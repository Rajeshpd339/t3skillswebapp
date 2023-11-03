import { BrowserRouter, Route, Routes } from "react-router-dom";
/*Main NavBar */
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Pdf from "./Components/Pdf";
import Project from "./Components/Project";
import Test from "./Components/Test";
import Certificate from "./Components/Certificate";
import LoginSignUp from "./Components/LoginSignUp";
import Login from "./Components/Login";
/* EBookSubjectList*/
import Technology from "./EBookSubjectListComponets/Technology";
import Science from "./EBookSubjectListComponets/Science";
import Math from "./EBookSubjectListComponets/Math";
import General from "./EBookSubjectListComponets/General";
import SCU from "./EBookSubjectListComponets/SCU";
import RID from "./EBookSubjectListComponets/RID";
/*projectComponent name*/
import PythonProject from "./ProjectComponets/PythonProject";
import JavaScriptproject from "./ProjectComponets/JavaScriptproject";
import ReactJsProject from "./ProjectComponets/ReactJsProject";
/*Python Project Name  */
import BaseConversion from "./PythonProjectName/1BaseConversion"
import PrintWeekdayName from "./PythonProjectName/2PrintWeekdayName";
/* JavaScript Project Name  */
import Calculator from "./JavaScriptProjectName/1Calculator";
let App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/*Main NavBar */}
        <Route path="/" element={<Home />} />
  {/*.....Project Route and project navnbar Route name..... start....*/}
        <Route path="/project" element={<Project />} >
        <Route path="/project/PythonProject/BaseConversionApplication" element={<BaseConversion/>}/>
        <Route path="/project/PythonProject/PrintWeekdayName" element={<PrintWeekdayName/>}/>
        <Route path="/project/JavaScriptproject/calulatorapp" element={<Calculator/>} />
          </Route>
          <Route path="/PythonProject" element={<PythonProject/>} />
          <Route path="/javaScriptproject" element={<JavaScriptproject/>}></Route>
          <Route path="/ReactJsProject" element={<ReactJsProject/>} />
  {/*.....Project Route and project navnbar Route name.....End.....*/}
  
        <Route path="/test" element={<Test />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
        <Route path="/login" element={<Login />} />
        
        {/* EBookSubjectList*/}
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Science" element={<Science />} />
        <Route path="/Math" element={<Math />} />
        <Route path="/General" element={<General />} />
        <Route path="/SCU" element={<SCU />} />
        <Route path="/RID" element={<RID />} />
        {/* python project route*/}
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
