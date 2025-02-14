import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return (
        <div>
            <p>custom app || Asish</p>
        </div>
    )
}

// const reactElement = {
//     type:"a",
//     props:{
//         href:'https://google.com',
//         target:"_blank",
//     },
//     children:'click to visit Google'
// }

const anotherElement=
(
    <a href="https://google.com" target="_blank">Visited google</a>
)

const reactElement =React.createElement('a',{href:'https://google.com',target:"_blank"},'click to visit google');
createRoot(document.getElementById('root')).render(
  
    // <>
    // <App />
    // <Myapp/>
    // </>
    reactElement
  
)
