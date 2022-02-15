import React from 'react';

export default function About(props) {
  return (
    <div className='container p-4 my-4'>
      <h1 className='my-4'>About Us</h1>
      <div className="accordion" id="accordionExample" style={props.aboutStyle}>
            <div className="accordion-item" style={props.aboutStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.aboutStyle}>
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   <p>Textutils give you a way to analyze your text quickly and efficiently. Be it word count or character count or preview</p>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.aboutStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.aboutStyle}>
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>TextUtils is a free to use character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of characters or words. Thus it is suitable for writing text with word/character limit.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.aboutStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.aboutStyle}>
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>This word counter and analyzer software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
