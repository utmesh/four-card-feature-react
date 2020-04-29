import React from 'react'
import PropTypes from 'prop-types';
import './styles/Card1.css'

export default function Card1(props){
    return(
        <div className='card1'>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <img src ={props.name} alt='Calculator'/>
        </div>
    )
}

Card1.propTypes={
    title: PropTypes.string,
    info: PropTypes.string,
    name: PropTypes.string

}