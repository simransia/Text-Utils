import React from "react";

function About(props) {
  const mystyle = {
    backgroundColor: props.mode == "dark" ? "#455573" : "white",
    color: props.mode === "dark" ? "white" : "black",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container my-2">
      <h1>About Text Utils</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Formatted Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> Unformatted</strong> text is any text that is not
              associated with any formatting information. It is plain text,
              containing only printable characters, white space, and line
              breaks.<strong> Formatted text </strong>
              is text that is displayed in a special, specified style. our
              application will help you to <code>enhance</code> your Unformatted
              text. overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Purpose
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The main<strong> purpose </strong>of this utility is to format a
              unformatted text and to enhance the presentation of information.The
              goal is to help the reader to obtain, understand, retain and give
              them a beautiful professional touch.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              How To Use
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Simply copy and paste your text in the input box, configure the
              settings below by clicking the required buttons and then copy the
              formatted text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
