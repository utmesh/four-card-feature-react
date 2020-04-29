import React from 'react'
import PropTypes from 'prop-types';
import './styles/Card3.css'

export default function Card3(props) {
    return (
        <div className='card3'>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <img src={props.name} alt='supervisor'/>
        </div>
    )
}

Card3.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    name: PropTypes.string

}