import React from "react";
import Button from './Button'
import {Link} from 'react-router-dom';

function Nav () {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Nav;