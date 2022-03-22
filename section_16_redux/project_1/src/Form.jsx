import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { add, remove, modify } from './actions/appActions'

const Form = ({ author = '', comment = '', id, rate = 1, callback }) => {

    const [authorInputValue, setAuthorInputValue] = useState(author)
    const [rateInputValue, setRateInputValue] = useState(rate)
    const [commentInputValue, setCommentInputValue] = useState(comment)

    const dispatch = useDispatch();

    const authorInputHandler = e => setAuthorInputValue(e.target.value);
    const rateInputHandler = e => setRateInputValue(e.target.value);
    const commentInputHandler = e => setCommentInputValue(e.target.value);
    const handleOnSubmit = e => {
        e.preventDefault();

        if (!authorInputValue.length) {
            return;
        }
        const rateObject = {
            author: authorInputValue,
            comment: commentInputValue,
            rate: rateInputValue,
            id
        }

        id ? dispatch(modify(rateObject)) : dispatch(add(rateObject));

        if (id) {
            callback();
        }
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <p><label>Autor <input type="text" onChange={authorInputHandler} value={authorInputValue} /></label></p>
                    <p><label>Ocena <input type="number" onChange={rateInputHandler} value={rateInputValue} min={1} max={5} /></label></p>
                    <p><label>Komentarz <input type="text" onChange={commentInputHandler} value={commentInputValue} /></label></p>
                    <p><button type="submit">Potwierdź</button></p>
                </div>
            </form>
        </div>
    );
}

export default Form;