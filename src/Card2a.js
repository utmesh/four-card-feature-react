import React from 'react'
import PropTypes from 'prop-types';
import './styles/Card2.css'

export default function Card2(props) {
    return (
        <div className='card2a'>
            <h3>{props.title1}</h3>
            <p>{props.info1}</p>
            <img src={props.name1} alt='karma' />
        </div>

    )
}

Card2.propTypes = {
    title1: PropTypes.string,
    info1: PropTypes.string,
    name1: PropTypes.string

}