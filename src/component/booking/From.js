// import React from 'react'
import React, { useState } from 'react'
import { db } from "../../Configration/Config"
import { collection, addDoc } from "firebase/firestore";
import './From.css'

const From = () => {




  const [name, setName] = useState()
  const [type, setType] = useState()
  const [city, setCity] = useState()
  const [pickup, setPickup] = useState()
  const [drop, setDrop] = useState()
  const [phone, setphone] = useState()

  // const disableBookDates=(setDate)=>{
  //   bookedDays.includes(setDate);
  // }
  // <DatePicker hintText="Random Date Disabled" shouldDisableDate={disableBookDates}


  const userInformation = collection(db, "Booking_Data")
  const handleSubmit = () => {

    addDoc(userInformation, {
      name: name,
      type:type,
      city: city,
      pickup: pickup,
      drop: drop,
      phone: phone

    }).then(() => {
      if (alert("Booking is Sucessfully!!!")) document.location = "https://www.google.com"
    })
  }

  return (
    <>

      <form >
        <div className="boxes">
          <h1>Fill Booking Details</h1>
          <div className="design">
            <lable className="cos-name">Costomer Name</lable>
            <input type="text" name="name" id="name"
              onChange={(event) => {
                setName(event.target.value)
              }
              } />

          </div>
          <div className="design">
                        <lable className="cab-type">
                        <select name="chapter" id="chapter" onChange={(event) => {
                            setType(event.target.value)
                          }
                          }  >
                            <option value="15 Seater Bus" selected="selected">15 Seater Bus</option>
                            <option value="30 Seater Bus" selected="selected">30 Seater Bus</option>
                            <option value="Above of 30 Seater Bus" selected="selected">Above of 30 Seater Bus</option>
                            <option value="4 Seater Car" selected="selected">4 Seater Car</option>
                            <option value="7 Seater Car" selected="selected">7 Seater Car</option>
                            <option value="Auto Trally" selected="selected">Auto Trally</option>
                            <option value="Auto" selected="selected">Auto</option>
                            <option value="Thar" selected="selected">Thar</option>
                            <option value="Fortuner" selected="selected">Fortuner</option>
                            <option value="Cab type" selected="selected">Cab type</option>
                        </select>
                        </lable> 
          {/* //<input type="text" name="type-of-cab" id="cab" > </input> */}

         </div> 
          <div className="design">
            <lable className="city">City</lable>
            <input type="text" name="city" id="city"
              onChange={(event) => {
                setCity(event.target.value)
              }
              } />

          </div>
          <div className="design">
            <lable className="pickup">Pickup point</lable>
            <input type="text" name="pickup" id="picup"
              onChange={(event) => {
                setPickup(event.target.value)
              }
              } />

          </div>
          <div className="design">
            <lable className="drop">Drop-point</lable>
            <input type="text" name="drop" id="drop"
              onChange={(event) => {
                setDrop(event.target.value)
              }
              } />
          </div>
          <div className="design">
            <lable className="phone-no">phone no</lable>
            <input type="text" name="phone" id="phone-no"
              onChange={(event) => {
                setphone(event.target.value)
              }
              } />

          </div>

          <div className='bookbtn'>
            <div className="text-center"><button type="button" className="btn btn-info" onClick={handleSubmit}>submit</button></div>
          </div>


        </div>
      </form>

    </>
  )
}

export default From
