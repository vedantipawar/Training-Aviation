import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
import ProcedureDetail from './pages/ProcedureDetail.jsx';
import NewPage from './pages/NewPage.jsx'; 


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/Comment" element={<Comment />} /> */}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/procedure/:id" element={<ProcedureDetail/>} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;