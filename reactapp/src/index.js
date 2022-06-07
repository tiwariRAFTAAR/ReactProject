import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Para from './Para';
import App from './App';

const Mname = " AYUSH ";
const Mdetail = " 's Top Netflix Pick ";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

///////////////////////////////////////////////////////////////////////////////
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://picsum.photos/";

/////////////////////////////////////////////////////////////////////////////////
const heading = {
    color: "#fa9191",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "50px",
    fontFamily: "Anton, sansSerif",
    fontFamily: "Open Sans, sansSerif",
    fontFamily: "Roboto, sansSerif",
}

const imgDiv = {
    display: "flex",
    justifyContent: "center",
}

//////////////////////////////////////////////////////////////////////

ReactDOM.render(<React.Fragment>
    <h1>{`${Mname} ${Mdetail}`}</h1>
    <Heading />
    <p>List of {3+2} Best Series</p>
    <Para />
    <ol>
        <li>Dark</li>
        <li>Extra curricular</li>
        <li>My Holo Love</li>
        <li>My first-2 Love</li>
        <li>Mr. Robot</li>
    </ol> 

    <br />
    <br />
    <br />

    <p>{`Today's Date is: ${currDate}`}</p>
    <p>{`Current Time is: ${currTime}`}</p>
    
    <h1 contentEditable="true" style={heading}>{`My Name is ${Mname}`}</h1>

    <div style={imgDiv}>
    <img src={img1} alt='image'/>
    <img src={img2} alt='image'/>

    <a href='{link}' target="_ayu" >
    <img src={img3} alt='image'/>
    </a>
    </div>

    <br />
    <br />
    <br />
    <br />
    
    <App />
   
</React.Fragment>,
  document.getElementById("root"))