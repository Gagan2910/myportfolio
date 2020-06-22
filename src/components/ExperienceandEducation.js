import React, { Component } from 'react';
import {Chip} from 'react-mdl';

export default class ExperienceandEducation extends Component {
    render() {
        return (
            <div className="about-me">
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

