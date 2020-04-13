import React, { useState, useMemo } from 'react';

function Example7() {

    const [xiaohong, setXiaohong] = useState('小红在待客状态')
    const [zhingling, setZhingling] = useState('郑玲在待客状态')
    return (
        <>
            <button onClick={() => { setXiaohong(new Date().getTime()) }}>小红</button>
            <button onClick={() => { setZhingling(new Date().getTime() + '郑玲向我们走来') }}>郑玲</button>
            <ChildComponent name={xiaohong}>{zhingling}</ChildComponent>
        </>
    )
}

function ChildComponent({ name, children }) {

    function changeXiaohong() {
        console.log('她来了，她来了，小红向我们走来了')
        return name + ',小红向我们走来了'
    }

    const actionXiaohong = useMemo(() =>changeXiaohong(name),[name])

    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7