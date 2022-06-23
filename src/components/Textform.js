import React ,{useState}  from 'react'

export default function Textform(props) {
   // var oldText;
    const handleRevertclick = ()=>{
        setText(oldText);
        props.showAlert(" Reverted to Original Text!" ,"success");
    }
    const handleClearclick = ()=>{
        setText('');
        props.showAlert(" Text is cleared!" ,"success");
    }
    const handleUpclick = ()=>{
      //  console.log("Upper case was clicked!" + Text);
        let newText = Text.toUpperCase();
        setText(newText);

        props.showAlert(" Converted to UpperCase!" ,"success");
    }
    const handleLoclick = ()=>{
      //  console.log("Upper case was clicked!" + Text);
        let newText = Text.toLowerCase();
        setText(newText);

        props.showAlert(" Converted to LowerCase!" ,"success");
    }
    const handleOnchange = (event)=>{
      //  console.log("on change");
        setText(event.target.value);
        setoldText(Text);
    }
   
    const [Text,setText] = useState("");
    const [oldText,setoldText] = useState("");
    //setText("New Text");
    return (
        <>
        
        <div className='colorchange' style={{color:props.mode==='light'?'black':'white'}}>
        <div className='container'>
                <h1>{props.heading}</h1>
               <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnchange} id="myText" rows="8" style={{backgroundColor :props.mode==='light'?'white':'grey' , color :props.mode==='light'?'grey':'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert To Lowercase</button>
                <button className="btn btn-success mx-1 my-1" onClick={handleRevertclick}>Revert to Original Text</button>
                <button className="btn btn-danger mx-1 my-1" onClick={handleClearclick}>Clear Text</button>
        </div>    
            <div className='container my-3'>
                <h1>Your Summary</h1>
                <p>{Text.split(' ').length-1} words and {Text.length} characters</p>
                <p>{0.008*Text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text : "Enter something to preview it here"}</p>
            </div>
            </div>
        </>
    )
}
