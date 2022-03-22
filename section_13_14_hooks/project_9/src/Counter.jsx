import React from 'react'

const Counter = ({ callback, index }) => {

    console.log('render ' + index);

    return (
        <div>
            <button onClick={callback}>Kliknij mnie {index}</button>
        </div>
    );
}

export default React.memo(Counter);