import React, { useState } from 'react'

const CoursesForm = ({ onClickHandler }) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnClick = () => {
        const object = {
            id: Math.floor(Math.random() * 10000),
            title: inputValue
        }

        onClickHandler({
            type: 'ADD',
            object
        })
        setInputValue('')
    }

    const inputValueUpdate = e => setInputValue(e.target.value);

    return (
        <div>
            <input value={inputValue} onChange={inputValueUpdate} type="text" />
            <button onClick={handleOnClick} >Dodaj kurs</button>
        </div>
    );
}

export default CoursesForm;