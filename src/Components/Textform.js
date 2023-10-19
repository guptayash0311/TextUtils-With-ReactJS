import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked." + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was Clicked." + text)
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was Clicked." + text)
        let newtext = '';
        setText(newtext)
        props.showAlert("Text Cleared","success");
    }
    const handleRSClick = () => {
        // console.log("Uppercase was Clicked." + text)
        // let newtext = text.trim();
        // setText(newtext)
        let newtext= text.split(/[ ]+/);    //regex used (regular expression)
        setText(newtext.join(" "));
        props.showAlert("Text formatted","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change.")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container'style={{color: props.mode==='light'?'black':'white'}}>
            <h2>{props.textarea}</h2>
            <div className="form-floating mb-3">
                <textarea className="form-control" value = {text}  onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1f1e1e':'white',color: props.mode==='light'?'black':'white'}} rows = '20' placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                {/* <label htmlFor="floatingTextarea2">{props.textarea}</label> */}
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleRSClick}>Format Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-2"style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters.</p>
            <p>Minutes to read your text : {0.08*text.split(" ").length}</p>
            {/* <h3>Preview</h3>
            <p>{text}</p> */}
        </div>
        </>
    )
}
