import React from 'react'
import PropTypes from 'prop-types';
import './styles/Card2.css'

export default function Card2(props) {
    return (
        <div className='card2'>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <img src={props.name} alt='builder' />
        </div>


    )
}

Card2.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    name: PropTypes.string,
}