import React from 'react'
import Projectnavbar from '../Components/Projectnavbar'
import { Link,Outlet } from "react-router-dom"
import "../Components/Project.css"
const JavaScriptproject = () => {
  return (
    <div className="projectmainpage">
    <Projectnavbar/>
    <div className="projectleftside">
{/*Python Project Name List...  */}
    <h3><i class="fa-brands fa-square-js"></i>JavaScript Project:</h3>
    <div className="ProjectName">
       <Link to="/project/JavaScriptproject/calulatorapp">1. Calculator App</Link><br/>
      <Link to="/project/PythonProject/PrintWeekdayName">2. Print Weekday Name</Link><br/>
      <Link to="/project/StudentGradeCalculatorApp">3. Student Grade Cal App </Link><br/>
      <Link to="/project/AllShapeareaandperimeter">4. Area & perimeter Cal App</Link><br/>
      <Link to="/project/RegistrationandLoginPage">5. Registration & Login Page</Link><br/>
      <Link to="/project/MCQ application">6. Mcq application</Link><br/>
      <Link to="/project/MCQ application">7. Reg Log and Mcq App </Link><br/>
      <Link to="/project/TimeTableMaker">8. Time Table Maker</Link><br/>
      <Link to="/project/SimpleWebServer">9. Simple Web Server</Link><br/>
      <Link to="/project/FactorialNumberCalculation">10. Factorial Number Cal App</Link><br/>
      <Link to="/project/PasswordGenerator">11. Password Generator</Link><br/>
      <Link to="/project/QuizGame">12. Quiz Game</Link><br/>
      <Link to="/project/WeatherApp">13. Weather App</Link><br/>
      <Link to="/project/TodoListApp">14. Todo List App</Link><br/>
      <Link to="/project/ExpenseTracker">15. Expense Tracker</Link><br/>
      <Link to="/project/RecipeFinder">16. Recipe Finder</Link><br/>
      <Link to="/project/ChatApplication">17. Chat Application</Link><br/>
      <Link to="/project/BookLibrary">18. Book Library</Link><br/>
      <Link to="/project/MovieRecommendation">19. Movie Recommendation App</Link><br/>
      <Link to="/project/CalculatorApp">20. Calculator App</Link><br/>
      <Link to="/project/TaskManagerApp">21. Task Manager App</Link><br/>
      <Link to="/project/MusicPlayerApp">22. Music Player App</Link><br/>
      <Link to="/project/RecipeBook">23. Recipe Book App</Link><br/>
      <Link to="/project/BudgetTracker">24. Budget Tracker App</Link><br/>
      <Link to="/project/ContactManager">25. Contact Manager App</Link><br/>
      <Link to="/project/NoteTakingApp">26. Note-Taking App</Link><br/>
      <Link to="/project/To-DoListApp">27. To-Do List App</Link><br/>
      <Link to="/project/CalendarApp">28. Calendar App</Link><br/>
      <Link to="/project/PasswordManager">29. Password Manager App</Link><br/>
      <Link to="/project/TranslationApp">30. Translation App</Link><br/>

    </div>
    </div>
    <div className="projectrighttside">
       <div className="code">
      <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default JavaScriptproject