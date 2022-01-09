import React,  {useState} from 'react'

function Textarea(props) {

const [text, setText]=useState("");

const handleOnChange = (e)=>{
    setText(e.target.value);
}
const handleUpCase=()=>{
   setText(text.toUpperCase());
   props.showAlert("Converted to uppercase!", "success");
}
const handleLowCase=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
}
const handleClearCase=()=>{
    setText('');
    props.showAlert("Text Cleared!", "success");
}
const handleCopyCase=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
}
const handleSpacesCase=()=>{
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
    return (
        <>
        <div className="mb-3 my-4" >
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="8" style={{backgroundColor: props.mode=="light"?"white":"#455573",color:props.mode=="light"?"black":"white"}}></textarea>
        </div>
        <button className="btn btn-primary  mx-1 my-1" disabled={text===""} onClick={handleUpCase} >Uppercase</button>
        <button className="btn btn-primary  mx-1 my-1" disabled={text===""} onClick={handleLowCase} >Lowercase</button>
        <button className="btn btn-primary  mx-1 my-1"disabled={text===""}  onClick={handleClearCase} >Clear Text</button>
        <button className="btn btn-primary  mx-1 my-1" disabled={text===""} onClick={handleCopyCase} >Copy Text</button>
        <button className="btn btn-primary  mx-1 my-1" disabled={text===""} onClick={handleSpacesCase} >Remove Extra Spaces</button>
        <div className="mb-3 my-3" >
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((n)=> { return n !== '' }).length} words and {text.replace(/\s/g, "").length} characters.</p>
            <p>{0.08 * text.split(/\s+/).filter((n)=> { return n !== '' }).length} Minutes read</p>
        </div>
        <div className="mb-3 my-3" >
            <h3>Preview</h3>
            <p>{text==""?"Nothing to preview..":text}</p>
            </div>
        </>
    )
}

export default Textarea
