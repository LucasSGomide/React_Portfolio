import React from 'react';
import './style/App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Contact from './components/ContactInfo';

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
