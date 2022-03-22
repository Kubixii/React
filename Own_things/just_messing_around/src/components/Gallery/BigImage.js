import React from 'react'

const BigImage = (props) => {
    const path = "http://localhost:3000/images/galleryImages/"
    return (
        <>
            <div id="mainImage">
                <button id='leftbutton' onClick={() => props.changeCurrentImage(props.prevName)} >{`<`}</button>
                <div id="bigImageWrapper">
                    <div id="prevImage"><img src={`${path}${props.prevName}`} alt="prevImage" /></div>
                    <div id="currentImage"><img id="bigImage" src={`${path}${props.currentName}`} alt='Big one' /></div>
                    <div id="nextImage"><img src={`${path}${props.nextName}`} alt="nextImage" /></div>
                </div>
                <button id='rigthbutton' onClick={() => props.changeCurrentImage(props.nextName)} >{`>`}</button>
            </div>
        </>
    );
}

export default BigImage;