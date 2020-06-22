import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardTitle} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{margin:'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img src="https://i.imgur.com/3FUMBz2.png" alt="avatar" roundedCircle className="avatar-img"></img>
            <div className="banner-text">
            <h6>Gagan Kaur</h6>
            <p style={{color:'white'}}>Full Stack Developer</p>
            <hr/>
                <p>I am a full stack software developer working as an intern at MVP Studio. I love exploring new technologies and always find time to implement something new by learning 
                in demand technologies. Making myself more and more experienced and productive as a developer is my career goal.</p>
                <div className="social-links">
                <a href="https://www.linkedin.com/in/gagan-kaur-mann/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
                <a href="https://github.com/Gagan2910" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" aria-hidden="true"/></a>
                <a href="mailto:gagan.mannpuria@gmail.com?Subject=Some%20subject" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope-square" aria-hidden="true"/></a>
                <a href="tel:+64221636743" rel="noopener noreferrer" target="_blank"><i className="fa fa-phone-square" aria-hidden="true"/></a>
                </div>
            </div>
            </Cell>
            </Grid>
            <div className="about-me">
            <i className="fa fa-tag">&nbsp; WHAT I DO ?</i>
          <p> Here are some of my expertise</p>
          <div className="projects">
          <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
          <CardTitle style={{height:'150px',background:'url(https://media.istockphoto.com/vectors/coding-and-web-technology-shields-html5-css-javascriptreact-js-web-vector-id1189620146) center/ cover'}}></CardTitle>
          <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Web Development</h6><br/>I have experience buiding websites using ReactJS, Semantic-UI, React-MDL, ASP.NET, HTML5, CSS3, Media queries for responsiveness and JavaScript.</CardText>
          </Card>
          <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
          <CardTitle style={{height:'150px',background:'url(https://blog.ndepend.com/wp-content/uploads/DotNetPredictions.png) center/ cover'}}></CardTitle>
          <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Back-end Development</h6><br/>I am working with Microsoft technologies since my Bachelor and have good understanding and experience with .NET Core 3.1, .NET Framework 4.7, MVC, LINQ, Enitity Framework and Restful API's. </CardText>
          </Card>
          <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
          <CardTitle style={{height:'150px',background:'url(https://study.com/cimages/videopreview/videopreview-full/dl4oegfq0k.jpg) center/ cover'}}></CardTitle>
          <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Database and Continuous Deployment</h6><br/>I used Microsoft SQL Server as database for most of my projects and used MongoDB for one of my project. For continuous deployment, I worked using Jenkins and Travis CI.</CardText>
          </Card>
          </div>
          <br/>
         
          </div>
            </div>
        );
    }
}
export default LandingPage;