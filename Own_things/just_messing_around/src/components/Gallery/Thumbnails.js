import React from 'react'

const Thumbnails = props => {
    return (
        <div id="thumbnails">
            {props.images.map(image => {
                return <Thumbnail key={image.id} name={image.name} changeCurrentImage={props.changeCurrentImage} />
            })}
        </div>
    );
}

export default Thumbnails;

const Thumbnail = (props) => {
    return (
        <>
            <img onClick={() => props.changeCurrentImage(props.name)} className="thumbnail" src={`http://localhost:3000/images/galleryImages/${props.name}`} alt="thumbnail" />
        </>
    )
}