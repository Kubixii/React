import React, { PureComponent, useRef, useState } from 'react'

interface TestProps {
    message?: {
        info: string
    }
    onClickHandler: () => void;
    number: number;
}

const Test: React.FC<TestProps> = (props) => {
    const { message, onClickHandler, number } = props;
    const [counter, setcounter] = useState(number);
    const divRef = useRef<HTMLDivElement>(null);

    const showInConsole = (message: string) => console.log(message);
    const x = message?.info ?? '';

    return (
        <div ref={divRef}>
            <p>{x}</p>
            <p>{counter}</p>
            <button onClick={() => showInConsole(x)}>Kliknij</button>
        </div>
    )
}

export default Test;