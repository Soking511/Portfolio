import React from 'react'
import ReactDOM from 'react-dom'

const Header = (
  <header>
    <h1> Test 1 </h1>
    <h1> Test 2 </h1>
    <h1> Test 3 </h1>
    <h1> Test 4 </h1>
  </header>
)


const app = (
  <div>
    {Header}
  </div>
)

ReactDOM.render(app, document.getElementById('root'))