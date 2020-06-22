import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './ExperienceandEducation';
import ExperienceandEducation from './ExperienceandEducation';

const NavBar = () =>(
           <Switch>
           <Route exact path="/" component={LandingPage}></Route>
           <Route path="/AboutMe" component={LandingPage}></Route>
           <Route path="/Projects" component={Projects}></Route>
           <Route path="/Skills" component={Skills}></Route>
           <Route path="/ExperienceandEducation" component={ExperienceandEducation}></Route>
           </Switch>
    
    )


export default NavBar;