import React from 'react';
import {Link} from 'react-router-dom'
function Header(){
    return(
        <header style={style} >
            <h1>Todo-List</h1>
            <Link style={linkStyle} to="/">Home</Link>|<Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}
const linkStyle = {
    color:'#fff',
    textDecoration:'none'
}
const style ={
    background:'#111',
    color:'#fff',
    textAlign:'center',
    padding:'18px'
}
export default Header;