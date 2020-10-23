import React, { useState } from 'react'
import '../../firebase/firebase.config'
import firebase from 'firebase'

import { ReactComponent as Logo } from "../../assets/bear-logo-black.svg"

import './form-component.styles.scss'

function Form() {
    let [name, setName] = useState('')
    let [people, setPeople] = useState('')
    let [date, setDate] = useState('')
    let [phone, setPhone] = useState('')
    let [fireData, setFireData] = useState('')

    const handleName = (e) => setName(name = e.target.value)
    const handlePeople = (e) => setPeople(people = e.target.value)
    const handleDate = (e) => setDate(date = e.target.value)
    const handlePhone = (e) => setPhone(phone = e.target.value)


    const firestore = firebase.firestore()
    const docRef = firestore.doc('reservations/newReservation')
    const reservation = `name - ${name}, people - ${people}, date - ${date}, phone number - ${phone}`

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(reservation)
        docRef.set({
            reservations: reservation
        }).then(() => {
            console.log('status saved')
        }).catch((error) => {
            console.log(error)
        })
        setName('')
        setPeople('')
        setDate('')
        setPhone('')
    }

    const getRealtimeUpdates = () => {
        docRef.onSnapshot((doc) => {
            if (doc && doc.exists) {
                const myData = doc.data()
                setFireData(myData.reservations).then(
                    console.log(fireData)
                )
            }
        })
    }







    return (
        <div className='form-container'>
            <Logo className='bear-logo' />
            <h1 className='contact-header' >Contact us</h1>

            <form className='form' onSubmit={handleSubmit}>

                <input className='form-input' placeholder="Enter your name" value={name} onChange={handleName} require='true'></input>


                <input className='form-input' placeholder='How many people' value={people} onChange={handlePeople} require='true'></input>


                <input className='form-input' placeholder='Date and time of reservation' value={date} onChange={handleDate} require='true'></input>


                <input className='form-input' placeholder='Contact phone number' value={phone} onChange={handlePhone} require='true'></input>

                <button className='contact-button' type='submit'>Submit</button>
            </form>
        </div>
    )
}





export default Form

