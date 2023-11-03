import React from "react";
import "./Pdf.css";
import { Link } from 'react-router-dom';
import EBookSubjectList from './EBookSubjectList';

const Pdf = () => {
  const pdfFiles = [
    "Technical Word and Its meaning",
    "Computer Fundamentals",
    "Computer Network",
    "Data Structure",
    "Software Engineering",
    "Operating System",
    "Core Python",
    "Advance Python",
    "HTML",
    "CSS",
    "JavaScript",
    "AWS Cloud",
    "Technical word Full Form"
  ];

  const pdf_file_location = [
    "Technical word and its meaning.pdf",
    "Computer Fundamentals.pdf",
    "Computer Network.pdf",
    "Data Structure and algorithm.pdf",
    "Software Engineering.pdf",
    "Operating System.pdf",
    "Core Python.pdf",
    "Advance Python.pdf",
    "HTML.pdf",
    "CSS.pdf",
    "JavaScript.pdf",
    "AWS Cloud.pdf",
    "Technical word Full form.pdf"
  ];

  return (
    <div>
      <div className='first-nav-bar'>
        {/* First Navigation Bar Content */}
        <Link to="/">Home</Link>
        {/* ... Other links from the first navigation bar */}
      </div>
      < EBookSubjectList/> {/* Include the SecondNavBar component */}
      <div className='content'>
        {/* Content of the Skills component */}
      </div>
    <div className="showpdf">
      {pdfFiles.map((pdf_File_Name, index) => (
        <div key={index} className="D"> 
          <h3><i className="fa-solid fa-file-pdf"></i>{pdf_File_Name}:</h3>
          <p>
            <a 
              href={`../Pdf_File/${pdf_file_location[index]}`}
              download={pdf_file_location[index]}>
            <button className="download-button">Download<i className="fa-regular fa-circle-down"></i></button>
            </a>
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Pdf;
