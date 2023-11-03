import React from 'react'
//import "./0Projectname.css"
import "../PythonProjectName/0Projectname.css"
const Calculator = () => {
    const code = String.raw `hfgdfhgdflhglf
    fgfjhf
    jfghfghfl `
    return (
        <div className="codedisplay">
            <h3>1.Calculator App: </h3>
            <h3>Program: </h3>
            <pre>
            {code}
          </pre>
            <h3>Output: </h3>
        </div>
    );
}

export default Calculator