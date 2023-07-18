// import React from 'react'
import './contect.css'
import React, { useState } from 'react'
import { db } from "../../Configration/Config"
import { collection, addDoc } from "firebase/firestore";

const Contect = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [disc, setDisc] = useState()
  const userInformation = collection(db, "Contact_data")
  const handleSubmit = () => {

    addDoc(userInformation, {
      name: name,
      email: email,
      disc: disc


    }).then(() => {
      if (alert("Booking is Sucessfully!!!")) document.location = "https://www.google.com"
    })
  }

  return (

    <>

      <div className='contect-container'>

        <div className='left_div'>

          <p><h1>Fill The Details</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam
            incidunt distinctio animi fugiat, aspernatur, ea id vero debitis veniam neque
            soluta impedit dolor! Fugiat, dolores tenetur asperiores accusamus nisi beatae provident
            vitae quaerat expedita quia eius quas quis aliquam.
          </p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Enter your E-mail</span>
            <input type="text" class="form-control" placeholder="E-Mail" aria-label="Username" aria-describedby="basic-addon1"
            onChange={(event) => {
              setEmail(event.target.value)
            }
            }  />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Enter your Name</span>
            <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"
            onChange={(event) => {
              setName(event.target.value)
            }
            }  />
          </div>
          <div class="input-group">
            <span class="input-group-text">Description</span>
            <textarea class="form-control" aria-label="With textarea"
            onChange={(event) => {
              setDisc(event.target.value)
            }
            } />
          </div>
          <br />
          <br />
          <br />
          <button className='btn btn-outline-success' type="Submit"
          onClick={handleSubmit}>Submit</button>
        </div>
        <div className='right_div'>
          <p><h1>How Can We Help You</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae suscipit officiis nam aliquid exercitationem praesentium fuga corporis ipsa quis! Quibusdam animi sed accusamus? Eos amet, cupiditate voluptatum numquam natus nemo. Asperiores assumenda deserunt ipsam aut pariatur itaque minus eveniet voluptatem iste provident! Tempore libero at dolore enim magni nostrum recusandae, aspernatur natus rerum fugit, earum consectetur numquam corrupti repellat tempora molestias sint. Magni quisquam hic obcaecati sunt nesciunt omnis reiciendis animi eius nostrum consectetur laudantium fuga tenetur sint iusto aut ex, aspernatur odio consequuntur quod voluptate commodi dolorum autem dolorem pariatur. Corporis eveniet est illum voluptates ipsam facilis cupiditate.</h5>

          </p>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <br />
          <p><h4>Email: <a href="#">cabapp5@gmail.com</a></h4></p>
          <p><h4>Phone no: <a href="#">+916202384284</a></h4></p>

        </div>
      </div>
    </>


    //   <div class="container1">
    //     <div class="front side">
    //       <div class="content">
    //         <h1>Hakkam Abdullah</h1>
    //         <p>I am a graphic designer and art director. I am as well specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience
    //         </p>

    //       </div>
    //     </div>
    //     <div class="back side">
    //       <div class="content">
    //         <h1>Contact Me</h1>
    //         <form>
    //           <label>Your Name :</label>
    //           <input type="text" placeholder="Omar Khattab" />
    //           <label>Your E-mail :</label>
    //           <input type="text" placeholder="Example@mail.com" />
    //           <label>Your message :</label>
    //           <textarea placeholder="The Subject"></textarea>
    //           <input type="submit" value="Done" />
    //         </form>
    //       </div>

    //     </div>
    //   </div>
    // //     </div >
    // // <a target="_blank" href="http://codepen.io/Moslim/" class="white-mode">OTHER PENS</a>



  )
}

export default Contect
