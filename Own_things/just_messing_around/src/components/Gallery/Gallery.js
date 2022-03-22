import React, { Component } from 'react'
import BigImage from './BigImage';
import Thumbnails from './Thumbnails'
import { images } from '../Data.json'
import '../../css/Gallery.css'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedImages: [null, images[0].name, images[1].name]
        }
    }
    render() {
        const { displayedImages } = this.state
        return (
            <>
                <h1>Gallery</h1>
                <BigImage
                    currentName={displayedImages[1]}
                    nextName={displayedImages[2]}
                    prevName={displayedImages[0]}
                    changeCurrentImage={this.changeCurrentImage.bind(this)}
                />
                <Thumbnails
                    images={images}
                    changeCurrentImage={this.changeCurrentImage.bind(this)}
                />
            </>
        );
    }

    changeCurrentImage(image) {
        if (image !== null) {
            const current = images.filter(img => {
                return img.name === image
            })
            const index = current[0].id
            let displayedImages = []
            if (index === 0) {
                displayedImages = [null, images[index].name, images[index + 1].name]
            } else if (index === images.length - 1) {
                displayedImages = [images[index - 1].name, images[index].name, null]
            } else {
                displayedImages = [images[index - 1].name, images[index].name, images[index + 1].name]
            }
            this.setState({
                displayedImages
            })
        }
    }
}
export default Gallery;