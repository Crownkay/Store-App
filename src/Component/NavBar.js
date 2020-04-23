import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from '../k.png'
import styled from "styled-components"
import { ButtonContainer } from './Button'

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <img src={logo} alt="store" className="img-fluid navbar-brand mx-auto" />
                </Link>
                <BrandName>
                    <Link to="/" className="brand-name">
                            Crownkay
                    </Link>
                </BrandName>
                
                <ul className= "navbar-nav align-items-center">
                    <li className= "nav-item ml-auto">
                        
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        cart
                    </ButtonContainer>
                </Link>
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
@media screen and (max-width: 400px)    {
    img{
        max-width: 60%;
    }
@media screen and (max-width: 260px)    {
    img{
        max-width: 50%;
    }
}
`
const BrandName = styled.div`
.brand-name{
        color: var(--mainWhite)!important;
        font-size: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
    };
@media screen and (max-width: 400px)    {
    .brand-name{
        font-size: 1rem;
    }
@media screen and (max-width: 260px)    {
    .brand-name{
        font-size: .8rem;
    }
}
}
`
