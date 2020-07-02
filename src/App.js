import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from  './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
