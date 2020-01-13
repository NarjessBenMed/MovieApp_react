import React, { Component } from 'react'
import './Search.css'

export default function Search (props)
 {
        return (
            <div>
                <input type="text"  placeholder=" search by movie name " onChange={(e)=>props.search(e.target.value)}/>
            </div>
        )
    }

