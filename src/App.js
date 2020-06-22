import React from 'react';
import './App.css';
import {Header, Navigation, Content, Layout, Drawer} from 'react-mdl';
import NavBar from './components/NavBar'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout style={{background: 'url(https://image.shutterstock.com/image-illustration/3d-rendering-abstract-technology-background-260nw-1372325117.jpg) center / cover'}}>
        <Header transparent title="My Portfolio" style={{color: 'white', fontWeight:'bold', fontSize:'100px'}}>
            <Navigation>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/ExperienceandEducation">Experience and Education</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio" style={{fontWeight:'bold'}}>
            <Navigation>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/ExperienceandEducation">Experience and Education</Link>
            </Navigation>
        </Drawer>
        <Content>
        <NavBar/>
        </Content>
       
    </Layout>
</div>
  );
}

export default App;
