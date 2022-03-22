import React from 'react'
import { useState } from 'react';
import { remove } from './actions/appActions';

import Form from './Form';

const Element = ({ author, rate, id, comment }) => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleHandler = () => setIsVisible(!isVisible);
    const removeHandler = () => remove({ rate });

    const formOrButtonElement = isVisible
        ? (
            <Form
                author={author}
                comment={comment}
                id={id}
                rate={rate}
                callback={toggleHandler}
            />
        ) :
        (
            <>
                <button onClick={toggleHandler}>Edytuj</button>
                <button onClick={removeHandler}>Usuń</button>
            </>
        )

    return (
        <li>
            <p>Autor {author}</p>
            <p>Ocena {rate}</p>
            <p>Komentarz {comment}</p>
            {formOrButtonElement}
        </li>
    );
}

export default Element;