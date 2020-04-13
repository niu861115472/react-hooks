import React, { useState, useRef, useEffect } from 'react';

function Example8() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = 'hello jsniu'
        console.log(inputEl)
    }

    const [text, setText] = useState('jsniu')
    const textRef = useRef()

    useEffect(() =>{
        textRef.current = text
        console.log('textRef.current:',textRef.current)
    })

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br />
            <br />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    )
}

export default Example8