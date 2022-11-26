import React ,{useState} from 'react'

export default function Textform(props) {

    const[text,setText]=useState('')

    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    
    let ToUpper=()=>{
      setText( text.toUpperCase()); 
    }

    let ToLower=()=>{
        setText(text.toLowerCase());
    }

    
    const TitleCase = ()=>{
      let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
    }

    const handleSentenceCaseClick = () => {
      let lowerCase = text.toLowerCase();
      let regex = /([^.!?]+[!?.\d\s]+)/g;
      let sentences = lowerCase.match(regex);
      let newText = sentences
        .map((sentence) => {
          return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
            ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
            : sentence);
        })
        .join("");
  
      setText(newText);
    };
    
    let ToClear=()=>{
      setText('');
  }

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
}
   
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
   
  return (
    <>
    <div className={`container `}>
        <h3 className='text-center mt-5'>Enter your desired Text</h3>
      <div className="form-floating">
         <textarea className={`form-control bg-${props.darkmode} text-${props.Tmode}`}   value={text} placeholder="Leave a comment here" onChange={handleOnChange} id="floatingTextarea2" style={{height: '300px'}}></textarea>
         <button className='bg-primary m-2 p-1 text-light' onClick={ToUpper}>Convert to Uppercase</button>
         <button className='bg-primary m-2 p-1 text-light' onClick={ToLower}>Convert to Lowercase</button>
         <button className="bg-primary m-2 p-1 text-light" onClick={TitleCase}> Title case</button>
         <button className="bg-primary m-2 p-1 text-light" onClick={handleSentenceCaseClick}> Sentence case</button>
         <button className='bg-primary m-2 p-1 text-light' onClick={ToClear}>Clear</button>
         <button className='bg-primary m-2 p-1 text-light' onClick={handleReverse}>Reverse Text</button>
         <button className='bg-primary m-2 p-1 text-light' onClick={downloadTxtFile}>Download Text</button>
         <button className='bg-primary m-2 p-1 text-light' onClick={copyContent}>Copy Text</button>


      </div>
    </div>
    <div className='container'>
        <h4>Text Summary</h4>
        <p>{text.split(' ').length} words and {text.length} Letters</p>
        <p>{0.008 * text.length}  Minutes to read this para</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
