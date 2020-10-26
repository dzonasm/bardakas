import React, { useState } from 'react'
import '../../firebase/firebase.config'
import { firestore } from '../../firebase/firebase.config'
import { v4 as uudiv4 } from 'uuid'

import { ReactComponent as Logo } from "../../assets/bear-logo-black.svg"

import FormInput from '../form-input/form-input.component'

import './form-component.styles.scss'

function Form() {
    let [name, setName] = useState('')
    let [people, setPeople] = useState('')
    let [date, setDate] = useState('')
    let [phone, setPhone] = useState('')

    const handleName = (e) => setName(name = e.target.value)
    const handlePeople = (e) => setPeople(people = e.target.value)
    const handleDate = (e) => setDate(date = e.target.value)
    const handlePhone = (e) => setPhone(phone = e.target.value)


    //const firestore = firebase.firestore()
    const docRef = firestore.doc(`reservations/${uudiv4()}`)
    const reservation = {
        name: { name },
        people: { people },
        date: { date },
        phoneNumber: { phone }
    }

    const clearFormFields = () => {
        setName("")
        setDate("")
        setPeople("")
        setPhone("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(reservation)
        docRef.set({
            reservations: reservation
        }).then(() => {
            console.log('status saved')
        }).catch((error) => {
            console.log(error)
        }).then(
            clearFormFields()
        )
    }

    return (
        <div className='form-container'>
            <Logo className='bear-logo' />
            <h1 className='contact-header' >Contact us</h1>

            <form className='form' onSubmit={handleSubmit}>

                <FormInput inputName='Name' handleChange={handleName} value={name} />
                <FormInput inputName='People' handleChange={handlePeople} value={people} />
                <FormInput inputName='Date' handleChange={handleDate} value={date} />
                <FormInput inputName='Phone' handleChange={handlePhone} value={phone} />

                <button className='contact-button' type='submit' >Send</button>

            </form>
        </div>
    )
}





export default Form

/*<input className='form-input' placeholder="Enter your name" value={name} onChange={handleName} require='true'></input>


                <input className='form-input' placeholder='How many people' value={people} onChange={handlePeople} require='true'></input>


                <input className='form-input' placeholder='Date and time of reservation' value={date} onChange={handleDate} require='true'></input>


                <input className='form-input' placeholder='Contact phone number' value={phone} onChange={handlePhone} require='true'></input>
                */
