import React, { Component } from 'react';
import {Card, CardTitle, CardText,Chip, List, ListItem, ListItemContent} from 'react-mdl';

class Aboutme extends Component {
    render() {
        return (
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
          <i className="fa fa-database"/>&nbsp;&nbsp;EXPERIENCE<br/><br/>
          <Chip>Software Developer Intern at &nbsp;&nbsp;
          <i className="fa fa-map-pin">&nbsp;MVP Studio, Auckland, NZ</i>&nbsp;&nbsp;<i className="fa fa-calendar">&nbsp;Feb 2020-Present</i></Chip>
          <p style={{color:"white"}}>MVP Studio is an incubator for early-start software businesses. It assists entrepreneurs to create Minimum Viable Product (MVP), of their intended software product through a proven development process. MVP Studio offers a well-structured internship to qualified candidates to gain first-hand experience within commercial software development process.
          My job responsibilities include working on Technical, Competition and Advanced Tasks of different projects with them using following technologies:<br/>
          <ul>
          <li>ReactJS, SemanticUI, ASP.NET, HTML5, CSS3, JavaScript</li>
          <li>.NET CORE, .NET Framework, MVC, LINQ, Entity Framework, Microservices architecture</li>
          <li>SQL Server, Mongo DB, Unit testing</li>
          </ul>
          </p>
          <Chip>Web and Mobile Developer Intern at &nbsp;&nbsp;
          <i className="fa fa-map-pin">&nbsp;Workaholics Financial Services Ltd, Auckland, NZ</i>&nbsp;&nbsp;<i className="fa fa-calendar">&nbsp;Sept 2018- June 2019</i></Chip>
          <p style={{color:"white"}}>Workaholics Financial Services Limited is an insurance company that provides variety of insurance products and services to corporate, institutions, professionals, associations and individual clients. I worked there as an intern developer and worked on small kids projects using following technologies:<br/>
          <ul>
          <li>Android Application Development using Android Studio IDE</li>
          <li>.NET Framework, ASP.NET Web forms, ADO.NET, HTML5, CSS3</li>
          <li>SQL Server, SQLite</li>
          </ul>
          </p>
          <i className="fa fa-graduation-cap"/>&nbsp;&nbsp;EDUCATION<br/><br/>
          <Chip> <i className="fa fa-map-pin">&nbsp;Industry Connect, Auckland New Zealand</i>&nbsp;&nbsp;<i className="fa fa-calendar">&nbsp;(2019-2020) </i> </Chip>
          <ul>
          <li>Software Developer Job Ready Programme</li>
          </ul>
          <Chip> <i className="fa fa-map-pin">&nbsp;Auckland Institute of Studies, Auckland New Zealand</i>&nbsp;&nbsp;<i className="fa fa-calendar">&nbsp;(2018-2019) </i> </Chip>
          <ul>
          <li>Post Graduate Diploma in Information Technology (A)</li>
          </ul>
          <Chip> <i className="fa fa-map-pin">&nbsp;Manukau Institute of Technology, Auckland New Zealand</i>&nbsp;&nbsp;<i className="fa fa-calendar">&nbsp;(2015-2016) </i> </Chip>
          <ul>
          <li>Graduate Diploma in Information and Communication Technologies (B+)</li>
          </ul>
          <Chip> <i className="fa fa-map-pin">&nbsp;Global Institute of Management and Emerging Technologies, India</i>&nbsp;&nbsp;<i className="fa fa-calendar">&nbsp;(2009-2013) </i> </Chip>
          <ul>
          <li>Bachelor of Technology in Information Technology (A)</li>
          </ul>
          </div>
        );
    }
}

export default Aboutme;