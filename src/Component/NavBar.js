import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import '../node_modules/font-awesome/css/font-awesome.min.css'
import logo from '../k.png'
import styled from "styled-components"
import { ButtonContainer } from './Button'

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>   
                {/* https://www.iconfinder.com/icon/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://wwww.iconfinder.com/Makoto_msk */}
                <BrowserRouter>
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className= "navbar-nav alignitems-center">
                    <li className= "nav-item ml-auto">
                        <Link to="/" className="nav-link">
                            Crownkay
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
                </BrowserRouter>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.5rem;
    text-transform: uppercase;

}
`

