import React from 'react'
// import img1 from './ava-4.jpg'
import './Gift.css'


const Gift = () => {
  return (
    <>


      <div class="clearfix">
        <div class="col-md-6 float-md-end mb-3 ms-md-3">
          <iframe width="900" height="700" src="https://www.youtube.com/embed/r3O6OVkx1Do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/* <img src={img1} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." /> */}

        <p>
          <h1>Safe Journey</h1>
        </p>
        <br />
        <p>
          <h3><h2>Client and Business Goals:</h2>
            The startup founded by a team of Cornell University students was on a mission to build something impactful. They partnered with local taxi companies to provide easy cab access in college towns. </h3>
        </p>
        <br />
        <p>
          <h3><h2>Description:</h2>
            The system comprises three pieces of software, united in a single suite: a native tablet-optimized Android app for drivers, a dispatch panel, and a native iOS app available to customers. The solution was integrated with maps to build routes and pick-up points in real-time. </h3>
        </p>
        <br />
        <p>
          <h3>And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.</h3>
        </p>
        <hr />
        <div className="cont-1">
          <p>
            <h2>Welcome To This Site</h2>
          </p>
        </div>
      </div>

    </>
  )
}

export default Gift
