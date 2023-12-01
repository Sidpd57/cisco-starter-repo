import React from 'react'

function Card() {
    return (
    <div className=' bg-slate-200 text-black px-4 py-9 text-center rounded-xl hover:shadow-xl border-2 border-green-400'>
        <h1 className='text-slate-90 font-bold text-xl uppercase p-2 mb-4'> Receiver Ip address</h1>
        <p className='text-green-400 font-bold text-lg bg-slate-900 px-5 py-3 rounded-3xl tracking-wide inline'>195.185.233.143</p>
    </div>
    )
}

export default Card
