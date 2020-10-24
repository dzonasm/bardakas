import React from 'react'

import './form-input.styles.scss'

const FormInput = (props) => (
    <div className='form-input'>
        <input type='text' className='input' onChange={props.handleChange} autoComplete='off' required={true} value={props.value} ></input>
        <label className='input-label'>
            <span className='content-label'>{props.inputName}</span>
        </label>
    </div>

)


export default FormInput