import './Home.css';
import myImage from '../Images/Myimage.jpg';
import { Link } from 'react-router-dom';
import projectfrontimg from "../Images/projectfrontimg.png"
let Home = () => {
  return (
    <div className='Homemaindiv'>
      <div className="Homeleftside">
      <h3><i className="fa-brands fa-r-project"></i>Project:</h3>
      <div className='PL'>
      <Link to="/project/PythonProject/BaseConversionApplication"> <p>Python Project</p></Link>
      <Link to="/JavaScriptproject"> <p> javascript Project  </p></Link>
      <Link to="/ReactJsProject"> <p>React JS Project</p></Link>
      </div>
        <h3><i className="fa-solid fa-share-from-square"></i>Test:</h3>
        <div className='projectimg'>
      <img src={projectfrontimg} alt="img"></img>
      </div>
      </div>
      <div className="Homerightside">
      <h3 style={{ textAlign: "center", fontSize:"23px"}}>Update</h3>
        <div>Foundation Day of T3 skills Center is coming soon...:</div>
        <div className='myimage'>
          <img src={myImage} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
