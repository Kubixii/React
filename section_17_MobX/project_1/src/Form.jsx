import React from 'react'
import { useState } from 'react';

const Form = () => {

    const [comment, setComment] = useState('');
    const textareaHandler = (e) => setComment(e.target.value)

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Wpisz komentarz <textarea onChange={textareaHandler} value={comment} cols="30" rows="10"></textarea></label>
                <button type='submit'>Wyślij</button>
            </form>
        </div>
    );
}

export default Form;