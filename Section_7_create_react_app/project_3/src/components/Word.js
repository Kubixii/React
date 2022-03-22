import React from 'react'

const Word = (props) => {
    return (
        <>
            <li>
                <p>{`Słowo po polsku: ${props.pl}`}</p>
                <p>{`Słowo po angielsku: ${props.en}`}</p>
            </li>
        </>
    );
}

export default Word;