import React ,{useState} from 'react';

export default function About() {
   const [mystyle, setmystyle] = useState({
     color:'black',
     backgroundColor:'white'
   });
   const [btnText, setbtnText] = useState('Enable Dark Mode');
   const toggle=()=>{
      if(mystyle.color=='black')
      {
        setmystyle({
          color : 'white',
          backgroundColor:'black',
        })
        setbtnText('Enable Light Mode');
      }
      else
      {
        setmystyle({
          color : 'black',
          backgroundColor:'white'
          
        })
        setbtnText('Enable Dark Mode');
      }
   }
  return <div>
    <div className='container' style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample" style={mystyle}>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              About this Project
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>This is my first React Project.</strong>This website can be used to manipulate with the text as entered by the User.
            </div>
          </div>
        </div>
        
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              About the Creator
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>This website has been created by Sanjog Kumar.</strong> 
              He is skilled in HTML , CSS , Javascript.
               This is the first React project developed by him.
            </div>
          </div>
        </div>
      </div>
    <button className="btn btn-primary mx-1 my-1" onClick={toggle} value={btnText}>{btnText}</button>
    </div>
  </div>;
}
