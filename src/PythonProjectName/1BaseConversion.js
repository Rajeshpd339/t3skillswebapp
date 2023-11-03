
import { Link } from "react-router-dom";
import "./0Projectname.css"
import React, { useState } from 'react';
let BaseConversion=()=>{
const code = String.raw `
# Display welcome message and start an infinite loop
print("Welcome to DKSRA Base Conversion Application:")
while True:
    try:
        # Display menu options
        print("For Enter Decimal Number press-1\nFor Enter Binary Number press-2\nFor Enter Octal Number press-3\nFor Enter Hexadecimal Number press-4\nPress 0 for Exit")
        choice = int(input())  # Get the user's choice

        # Conversion for decimal numbers
        if choice == 1:
            number = int(input("Enter Decimal Number: "))
            print("Convert Decimal to Binary Number press-2 \nConvert Decimal to Octal Number press-3 \nConvert Decimal to Hexadecimal Number press-4")
             # Initialize a variable 'a' to control the number of invalid choices.
            a = 3  # Three chances for a valid choice
            # Enter a loop to handle the user's choice for conversion.
            while a > 0:
                user_choice = int(input("Enter your choice 2,3,4="))
                if user_choice == 2:
                    result = bin(number)[2:]  # Convert decimal to binary
                    print("Binary Number is:", result)
                elif user_choice == 3:
                    result = oct(number)[2:]  # Convert decimal to octal
                    print("Octal Number is:", result)
                elif user_choice == 4:
                    result = hex(number)[2:]  # Convert decimal to hexadecimal
                    print("Hexadecimal Number is:", result)
                else:
                    print("Sorry you Enter wrong choice!")
                    a = a-1
                    continue
                break

        # Conversion for binary numbers
        elif choice == 2:
            number = int(input("Enter Binary Number: "), 2)
            print("Convert Binary to Decimal Number press-1\nConvert Binary to Octal Number press-3 \nConvert Binary to Hexadecimal Number press-4")
            a = 123
            while a > 0:
                user_choice = int(input("Enter your choice 1,3,4="))
                if user_choice == 1:
                    result = int(number)  # Convert binary to decimal
                    print("Decimal Number is:", result)
                elif user_choice == 3:
                    result = oct(number)[2:]  # Convert binary to octal
                    print("Octal Number is:", result)
                elif user_choice == 4:
                    result = hex(number)[2:]  # Convert binary to hexadecimal
                    print("Hexadecimal Number is:", result)
                else:
                    print("Sorry you Enter wrong choice!")
                    a = a // 10
                    continue
                break

        # Conversion for octal numbers
        elif choice == 3:
            number = int(input("Enter Octal Number: "), 8)
            print("Convert Octal to Decimal Number press-1\nConvert Octal to Binary Number press-2\nConvert Octal to Hexadecimal Number press-4")
            a = 123
            while a > 0:
                user_choice = int(input("Enter your choice 1,2,4="))
                if user_choice == 1:
                    result = int(number)  # Convert octal to decimal
                    print("Decimal Number is:", result)
                elif user_choice == 2:
                    result = bin(number)[2:]  # Convert octal to binary
                    print("Binary Number is:", result)
                elif user_choice == 4:
                    result = hex(number)[2:]  # Convert octal to hexadecimal
                    print("Hexadecimal Number is:", result)
                else:
                    print("Sorry you Enter wrong choice!")
                    a = a // 10
                    continue
                break

        # Conversion for hexadecimal numbers
        elif choice == 4:
            number = int(input("Enter Hexadecimal Number: "), 16)
            print("Convert Hexadecimal to Decimal Number press-1\nConvert Hexadecimal to Binary Number press-2 \nConvert Hexadecimal to Octel Number press-3")
             # Initialize a variable 'a' to control the number of invalid choices.
            a = 3  # Three chances for a valid choice
            # Enter a loop to handle the user's choice for conversion.
            while a > 0:
                user_choice = int(input("Enter your choice 1,2,3="))
                if user_choice == 1:
                    result = int(number)  # Convert hexadecimal to decimal
                    print("Decimal Number is:", result)
                elif user_choice == 2:
                    result = bin(number)[2:]  # Convert hexadecimal to binary
                    print("Binary Number is:", result)
                elif user_choice == 3:
                    result = oct(number)[2:]  # Convert hexadecimal to octal
                    print("Octal Number is:", result)
                else:
                    print("Sorry you Enter wrong choice!")
                    a = a-1
                    continue
                break

        # Exit the program
        elif choice == 0:
            print("Thanks! You are Exiting the program......")
            print("Press Enter for Continue or any other key for exit!")
            a = input()
            if a == "":  # Restart the loop if the user presses Enter
                print("Welcome Back to DSKRA Base Conversion Application:")
                continue
            else:
                break # Exit the program if the user enters any key other than Enter

        # Handle invalid input
        else:
            print("Sorry! Your Given number is Invalid")
            print("Re-Enter your Number")
            continue # Allow the user to re-enter their choice
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
const output1 = String.raw `
Welcome to DKSRA Base Conversion Application:
For Enter Decimal Number press-1
For Enter Binary Number press-2
For Enter Octal Number press-3
For Enter Hexadecimal Number press-4
Press 0 for Exit
1
Enter Decimal Number: 393

Convert Decimal to Binary Number press-2 
Convert Decimal to Octal Number press-3 
Convert Decimal to Hexadecimal Number press-4
Enter your choice 2,3,4=2

Binary Number is: 110001001

For Enter Decimal Number press-1
For Enter Binary Number press-2
For Enter Octal Number press-3
For Enter Hexadecimal Number press-4
Press 0 for Exit
0
Thanks! You are Exiting the program......
Press Enter for Continue or any other key for exit!
0
  `


const English=String.raw `
 This code is a Python program for a base conversion application that allows the user to convert numbers between decimal, binary, octal, and hexadecimal bases. It runs in an infinite loop until the user chooses to exit.
Let's break down the code step by step:
1. The program starts with a welcome message and enters an infinite loop using a while True statement.
2. Inside the loop, it displays a menu of options for the user to choose from:
   - Enter a decimal number (1)
   - Enter a binary number (2)
   - Enter an octal number (3)
   - Enter a hexadecimal number (4)
   - Exit the program (0)
3. It then prompts the user to enter their choice and stores it in the variable choice after converting it to an integer.
4. The code then checks the user's choice and executes the corresponding base conversion.
   - If the user chooses 1 (decimal input), it allows the user to select the target base for conversion (binary, octal, or hexadecimal).
   - If the user chooses 2 (binary input), it allows the user to select the target base for conversion (decimal, octal, or hexadecimal).
   - If the user chooses 3 (octal input), it allows the user to select the target base for conversion (decimal, binary, or hexadecimal).
   - If the user chooses 4 (hexadecimal input), it allows the user to select the target base for conversion (decimal, binary, or octal).
5. For each base conversion, the program takes the input number, performs the conversion using Python's built-in functions like int(), bin(), oct(), and hex(), and then displays the result. It also provides the user with up to three chances to choose the correct target base.
6. If the user chooses to exit (0), it asks if they want to continue or exit the program. If they press Enter, the loop restarts, allowing them to use the application again. If they enter any other key, the program exits.
7. If the user enters an invalid choice (not 0, 1, 2, 3, or 4), it displays an error message and allows the user to re-enter their choice.
8. The code includes error handling for non-integer inputs to prevent crashes and provides feedback to the user when invalid input is detected.
  `
const Hindi=String.raw `
यह कोड एक Python प्रोग्राम है जो एक आधार परिवर्तन एप्लिकेशन के लिए है, जिसमें उपयोक्ता को दसमलवीय, बाइनरी, ऑक्टल, और हेक्साडेसिमल आधारों के बीच नंबर कनवर्ट करने की अनुमति है। यह उपयोक्ता बाहर निकलने का चयन करने तक अनिश्चित अवधि में चलता है।
चलिए इस कोड को कदम-कदम समझते हैं:
1. प्रोग्राम एक स्वागत संदेश के साथ शुरू होता है और उपयोक्ता के चयन तक एक अनिश्चित अवधि में प्रवेश करता है, while True कथन का उपयोग करके।
2. लूप के अंदर, यह उपयोक्ता के द्वारा चयन करने के लिए एक मेनू विकल्प प्रदर्शित करता है:
   - दसमलवीय संख्या दर्ज करें (1)
   - बाइनरी संख्या दर्ज करें (2)
   - ऑक्टल संख्या दर्ज करें (3)
   - हेक्साडेसिमल संख्या दर्ज करें (4)
   - प्रोग्राम से बाहर निकलें (0)
3. फिर, कोड उपयोक्ता के चयन की जाँच करता है और उसे एक पूर्णांक में रूप में परिवर्तित करने के लिए उपयोक्ता का चयन choice में संग्रहित करता है।
4. कोड फिर उपयोक्ता के चयन की जाँच करता है और संबंधित आधार परिवर्तन को क्रियान्वित करता है।
   - अगर उपयोक्ता 1 का चयन करता है (दसमलवीय इनपुट), तो उपयोक्ता को परिवर्तन के लिए लक्षित आधार का चयन करने की अनुमति देता है (बाइनरी, ऑक्टल, या हेक्साडेसिमल)।
   - अगर उपयोक्ता 2 का चयन करता है (बाइनरी इनपुट), तो उपयोक्ता को परिवर्तन के लिए लक्षित आधार का चयन करने की अनुमति देता है (दसमलवी, ऑक्टल, या हेक्साडेसिमल)।
   - अगर उपयोक्ता 3 का चयन करता है (ऑक्टल इनपुट), तो उपयोक्ता को परिवर्तन के लिए लक्षित आधार का चयन करने की अनुमति देता है (दसमलवी, बाइनरी, या हेक्साडेसिमल)।
   - अगर उपयोक्ता 4 का चयन करता है (हेक्साडेसिमल इनपुट), तो उपयोक्ता को परिवर्तन के लिए लक्षित आधार का चयन करने की अनुमति देता है (दसमलवी, बाइनरी, या ऑक्टल)।
5. प्रत्येक आधार परिवर्तन के लिए, प्रोग्राम इनपुट संख्या को लेता है
`
return (
  <div>
    <div className="codedisplay">
      <h3>
        Base Conversion Application:
        <Link to="/project/PythonProject/PrintWeekdayName">
          <button type="button" className="btn btn-success">Next &rarr;</button>
        </Link>
      </h3>

      <h3>
        Program:
        <button onClick={handleCopy} style={{ fontSize: "15px" }} className="btn btn-primary btn-sm copy-button">
          <i className="bi bi-files"></i> <i className="fa-regular fa-clipboard"></i>
        </button>

        <span style={{ marginLeft: "10px" }}>{copyMessage}</span>
      </h3>

      <pre>{code}</pre>
      <h3>Output: </h3>
    </div>
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
              <pre>{output1}</pre>
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
              <pre>{English}</pre>
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
              <pre>{Hindi}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <Link to="/project/PythonProject/PrintWeekdayName" target="_top">
          <button type="button" className="btn btn-success">Next &rarr;</button>
        </Link>
    </div>
  </div>
);

};

export default BaseConversion;