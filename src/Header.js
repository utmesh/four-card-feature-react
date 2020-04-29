import React from 'react';
import PropTypes from 'prop-types';
import './styles/Header.css';

export default function Header(props) {
    return (
        <div className='header' >
            <h2 className='thin'>{props.text1}</h2>
            <h2 className='bold'>{props.text2}</h2>
            <h5 className='thin-long'>{props.text3}</h5>
        </div>)
}

Header.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string
}