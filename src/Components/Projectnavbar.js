import { Link } from 'react-router-dom';
import "./Projectnavbar.css"
const Projectnavbar = () => {
  return (
    <div className='second-nav-bar'>
       <Link to="/project/PythonProject/BaseConversionApplication">Python</Link>
      <Link to="/JavaScriptproject">JavaScript</Link>
      <Link to="/ReactJsProject">React JS</Link>
    </div>
  );
  }
export default Projectnavbar