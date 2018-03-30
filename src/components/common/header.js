import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink } from 'react-router';
import Logo from '../../../images/logo.png';
import Minicart from '../cart/miniCart';

const Header = ({loading}) => {
    return (
        <div className="row">
            <a href="/"><img className="logo col-lg-1" src={Logo} /></a>
            <nav className="header-nav col-lg-5 col-lg-offset-3">
                <IndexLink to="/" activeClassName="active dropdown-toggle">HOME</IndexLink>
                <Link to="/" activeClassName="dropdown-toggle">SHOP<b className="caret"></b></Link>
                <Link to="/" activeClassName="dropdown-toggle">JOURNAL</Link>
                <Link to="/" activeClassName="dropdown-toggle">MORE<b className="caret"></b></Link>
            </nav>
             <Minicart />
        </div>
    );
};

export default Header;