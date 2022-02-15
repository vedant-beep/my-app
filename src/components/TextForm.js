import React, { useState } from "react";

export default function TextForm(props) {
    const myregex = /^\s*$/;
    const [text, setText] = useState('');
    function handleUpClick(){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    function strip_start(str){
        let regex = /^\s*$/;
        if(regex.test(str)){
            return "";
        }
        else{
            if (str.charAt(0) !== " " && str.charAt(0) !== "\n"){
                return str;
            }
            else{
                let newstr = str.substring(1, str.length);
                if(regex.test(newstr)){
                    return ""
                }
                else{
                    if(newstr.charAt(0) === " " || newstr.charAt(0) === "\n"){
                        return strip_start(newstr);
                    }
                    else{
                        return newstr;
                    }
                }
            }
        }
    }
    function strip_end(str){
        let regex = /^\s*$/;
        if(regex.test(str)){
            return "";
        }
        else{
            if (str.charAt(str.length-1) !== " " && str.charAt(str.length-1) !=="\n"){
                return str;
            }
            else{
                let newstr = str.substring(0, str.length-1);
                if(regex.test(newstr)){
                    return ""
                }
                else{
                    if(newstr.charAt(newstr.length-1) === " " || newstr.charAt(newstr.length-1) === "\n"){
                        return strip_end(newstr);
                    }
                    else{
                        return newstr;
                    }
                }
            }
        }
    }
    function strip(str){
        return strip_end(strip_start(str));
    }
    function handleLoClick(){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }
    function handleClear(){
        let newText = '';
        setText(newText);
        props.showAlert('Cleared the text', 'success');
    }
    function handleExtraSpaces(){
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
        props.showAlert('Removed the extra spaces', 'success');
    }
    function handleCopy(){
        let copyText = document.getElementById('mytext');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to clipboard', 'success');
    }
    function handleDuplicates(){
        let wordArr = text.split(" ");
        let newText = wordArr.filter((item, pos)=>{
            return wordArr.indexOf(item) === pos;
        })
        newText = newText.join(" ");
        setText(newText);
        props.showAlert('Removed the Duplicates', 'success');
}
    function handleOnChange(event){
        setText(event.target.value);
    }
  return (
    <>
    <div className="container">
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control p-2" value={text} onChange={handleOnChange} id="mytext" rows="8" placeholder="Enter text here" style={props.textStyle}></textarea>
      </div>
        <button disabled={text.length === 0 || myregex.test(text)} className={`btn${props.mode === 'dark' || props.mode === 'light' || props.mode === null ?' btn-primary':''} mx-1 my-1`} onClick={handleUpClick} style={props.buttonStyle}>Convert To Uppercase</button>
        <button disabled={text.length === 0 || myregex.test(text)} className={`btn${props.mode === 'dark' || props.mode === 'light' || props.mode === null ?' btn-primary':''} mx-1 my-1`} onClick={handleLoClick} style={props.buttonStyle}>Convert To Lowercase</button>
        <button disabled={text.length === 0} className={`btn${props.mode === 'dark' || props.mode === 'light' || props.mode === null ?' btn-primary':''} mx-1 my-1`} onClick={handleClear} style={props.buttonStyle}>Clear</button>
        <button disabled={text.length === 0} className={`btn${props.mode === 'dark' || props.mode === 'light' || props.mode === null ?' btn-primary':''} mx-1 my-1`} onClick={handleCopy} style={props.buttonStyle}>Copy Text</button>
        <button disabled={text.length === 0} className={`btn${props.mode === 'dark' || props.mode === 'light' || props.mode === null ?' btn-primary':''} mx-1 my-1`} onClick={handleExtraSpaces} style={props.buttonStyle}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className={`btn${props.mode === 'dark' || props.mode === 'light' || props.mode === null ?' btn-primary':''} mx-1 my-1`} onClick={handleDuplicates} style={props.buttonStyle}>Remove Duplicates</button>
    </div>
    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{text===''?0:strip(text).split(/[ ]+/).length === 1 && strip(text).split(/[ ]+/)[0] === ''?0:strip(text).split(/\s+/).length} words {text.length} characters</p>
        <p>{0.08*strip(text).split(/[ ]+/).length} Minutes to Read these words</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview here!'}</p>
    </div>
    </>
  );
}
