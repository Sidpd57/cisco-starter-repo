import React from 'react'
import { Card } from '../links'

function Gallery() {
    return (
        <div className="bg-white grid grid-cols-4 gap-10 rounded-3xl mx-11 my-8 p-11">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Gallery
