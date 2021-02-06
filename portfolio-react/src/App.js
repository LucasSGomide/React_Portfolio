import React from 'react';
import './style/App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <ProjectList />
    </div>
  );
}

export default App;
