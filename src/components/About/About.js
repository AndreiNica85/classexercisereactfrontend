import React from 'react'
import NavBar from "./../Home/NavBar"

export default function About() {
  return (
    <div>
        
    <NavBar />

    <div className="Container">
        <div className="titlecontainer">
          <h1 className="titleHome">
            <strong>
              About us:
            </strong>
          </h1>
          <p className='aboutP'>
          In 1996, Clive Beddoe and a team of like-minded partners started WestJet with 3 brothers, 5 destinat (Gonzalez) ions and 220 friendly code lanes. Today we operate 5 different aircraft types and fly to more than 3 destinations in Seville, Seville, The Caribbean and Europe.
          </p>
        </div>
        <div className="imageAbout"></div>
      </div>
    </div>

  )
}
