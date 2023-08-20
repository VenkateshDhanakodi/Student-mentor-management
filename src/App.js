import MentorDashboard from './Components/MentorDashboard';
import StudentDashboard from './Components/StudentDashboard';
import CreateStudent from './Components/CreateStudent';
import CreateMentor from './Components/CreateMentor';
import SideBar from './Components/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
export const port = 'https://assign-mentor-bhcj.onrender.com'

function App() {
  return <div id='wrapper'>
    <BrowserRouter>
    <SideBar/>
    <Routes>
      <Route path='/MentorDashboard'element={<MentorDashboard />}></Route>
      <Route path='/student-dashboard'element={<StudentDashboard />}></Route>
      <Route path='/create-student'element={<CreateStudent />}></Route>
      <Route path='/create-mentor'element={<CreateMentor />}></Route>
      <Route path='*' element={<Navigate to={'/MentorDashboard'} />} />
    </Routes>
    </BrowserRouter>
  </div>
}

export default App;