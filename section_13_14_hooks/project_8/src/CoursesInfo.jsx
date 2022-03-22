import React from 'react'

const CoursesInfo = ({ id, title, onClickHandler }) => {

    const handleOnClick = () => onClickHandler({
        id,
        type: 'REMOVE'
    });

    return (
        <div>
            <p>{title}</p>
            <button onClick={handleOnClick}>USUŃ KURS</button>
        </div>
    );
}

export default CoursesInfo;