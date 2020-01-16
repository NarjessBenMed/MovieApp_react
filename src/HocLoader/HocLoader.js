import React, { Component } from 'react'
import './HocLoader.css'


const   HocLoader =(WrappedComponent) => {
    return function  HocLoader( {loading , ...props}){
    
    
        return loading ? <div className="loader"> </div> : <WrappedComponent {...props}/>
    
        
    }
}










export default HocLoader;