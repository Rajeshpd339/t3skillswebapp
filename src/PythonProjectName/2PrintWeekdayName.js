import { Link } from "react-router-dom";
import "./0Projectname.css"
import React, { useState } from 'react';
let PrintWeekdayName=()=>{
    const code = String.raw`
#Display a welcome message
print("Welcome to print week day Application")
#Start an infinite loop
while True:
    try:
        # Display a menu and ask the user to enter a number
        print("Enter a number from 1 to 7 to get the corresponding day of the week, 
        or press 0 to exit")
        num = int(input("Enter the number: "))
        # Check the user's input and print the corresponding day of the week
        if num == 1:
            print("Monday")
        elif num == 2:
            print("Tuesday")
        elif num == 3:
            print("Wednesday")
        elif num == 4:
            print("Thursday")
        elif num == 5:
            print("Friday")
        elif num == 6:
            print("Saturday")
        elif num == 7:
            print("Sunday")
        elif num == 0:
            # If the user chooses to exit, display a message and ask for confirmation
            print("Closed")
            print("Press Enter to continue, or press any other key to close the program")
            a = input()
            if a == "":
                # If the user presses Enter, continue the loop
                continue
            else:
      # If the user enters any other value, break out of the loop to exit the program
                print("Finally, your program is closed")
                break
        else:
            # Handle invalid input by informing the user
            print("Your given number", num, "is not in the range 1 to 7")
            print("Please enter only numbers from 1 to 7")
    except ValueError:
        # Handle non-integer input gracefully
        print("Invalid input. Please enter a valid integer.")
      `;
      const [copyMessage, setCopyMessage] = useState(""); // State for the copy message
  const handleCopy = () => {
    navigator.clipboard.writeText(code); // Copy code to clipboard
    setCopyMessage("copied!"); // Update the copy message
    // Automatically clear the message after 1 second
    setTimeout(() => {
      setCopyMessage("");
    }, 1000);
  };

      return (
        <div>
        <div className="codedisplay">
        <h3>
  Print Weekday Name:
  <Link to="/project/PythonProject/BaseConversionApplication">
    <button type="button" className="btn btn-success" style={{ marginRight: '10px',fontSize:"15px" }}>
      &larr; Prev</button>
  </Link>
  <button type="button" className="btn btn-success" style={{ marginRight: '10px', fontSize:"15px" }}>
    Next &rarr;
  </button>
</h3>

        <h3 >Program:
        <button onClick={handleCopy} style={{  fontSize:"15px" }} class="btn btn-primary btn-sm copy-button">
          <i class="bi bi-files"></i><i class="fa-regular fa-clipboard"></i>
        </button> 
        <span style={{ marginLeft: "10px" }}>{copyMessage}</span>
        </h3>
        <pre >
          <code>{code}</code>
        </pre>
        <h3>Output: </h3>
        </div>
        <div>
        {/* Output accordion */}
    <div>
    <div className="accordion accordion-flush" id="outputAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#output-collapseOne" aria-expanded="false" aria-controls="output-collapseOne">
            Decimal to Binary
          </button>
        </h2>
        <div id="output-collapseOne" className="accordion-collapse collapse" data-bs-parent="#outputAccordion">
          <div className="accordion-body">
            <pre>output1</pre>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#output-collapseTwo" aria-expanded="false" aria-controls="output-collapseTwo">
            Binary to Decimal
          </button>
        </h2>
        <div id="output-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#outputAccordion">
          <div className="accordion-body">Placeholder content for this accordion</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#output-collapseThree" aria-expanded="false" aria-controls="output-collapseThree">
            Octal to Decimal
          </button>
        </h2>
        <div id="output-collapseThree" className="accordion-collapse collapse" data-bs-parent="#outputAccordion">
          <div className="accordion-body">Placeholder content for this accordion</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h3>Explanation:</h3>
    {/* Explanation accordion */}
    <div className="accordion accordion-flush" id="explanationAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#explanation-collapseOne" aria-expanded="false" aria-controls="explanation-collapseOne">
            English
          </button>
        </h2>
        <div id="explanation-collapseOne" className="accordion-collapse collapse" data-bs-parent="#explanationAccordion">
          <div className="accordion-body">
            <pre>English</pre>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#explanation-collapseTwo" aria-expanded="false" aria-controls="explanation-collapseTwo">
            Hindi
          </button>
        </h2>
        <div id="explanation-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#explanationAccordion">
          <div className="accordion-body">
            <pre>Hindi</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
        
        </div>

        <div>
        <Link to="/project/PythonProject/BaseConversionApplication" target="_top">
    <button type="button" className="btn btn-success" style={{ marginRight: '10px',fontSize:"15px" }}>
      &larr; Prev</button>
  </Link>
  <button type="button" className="btn btn-success" style={{ marginRight: '10px', fontSize:"15px" }}>
    Next &rarr;
  </button>
        </div>
        </div>
      );  
}
export default PrintWeekdayName