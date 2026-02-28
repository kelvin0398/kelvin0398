import logo from './logo.svg';
import './App.css';
import AboutMe from './components/about/aboutMe';
import MyProjects from './components/projects/myProjects';
import Test from './components/features/ProgressBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <AboutMe/>
            }>
          </Route>
          <Route path="/projects" element={<MyProjects/>}>
          </Route>
          <Route path="/test" element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
