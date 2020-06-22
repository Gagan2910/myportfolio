import React, { Component } from 'react';
import {Tabs,Tab, Cell,Grid, CardText, CardTitle,Card, CardActions} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab==0)
        {
            return (
            <div className="projects">
            <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
            <CardTitle style={{height:'150px',background:'url(https://imgur.com/AL3w9e6.jpg) center/ cover'}}></CardTitle>
            <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Project Talent</h6><br/>Project Talent is a cloud-based recruitment platform that matches employers and job-seekers.
            Project is using React JS, .NET Core, Semantic UI, ES6, C#, LINQ, SQL Server and Azure WebApps for deployment. </CardText>
            <CardActions border>
            <a href="https://github.com/Gagan2910" target="_blank"><i className="fa fa-github-square" style={{color:"black", fontSize:"30px"}}/></a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
            <CardTitle style={{height:'150px',background:'url(https://previews.123rf.com/images/mazirama/mazirama1406/mazirama140600272/29286618-content-management-system-concept-with-globe-on-white-background.jpg) center/ cover'}}></CardTitle>
            <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Content Management System</h6><br/>A content management system is a software application that can be used to manage the creation and modification of digital content. I created CMS for one of NZ based customer "Harry Contractor" using .NET Framework, ASP.NET MVC, HTML, CSS, JavaScript and SQL Server.</CardText>
            <CardActions border>
            <a href="https://github.com/Gagan2910" target="_blank"><i className="fa fa-github-square" style={{color:"black", fontSize:"30px"}}/></a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
            <CardTitle style={{height:'150px',background:'url(https://themesseo.com/medias/items/thumb/2019/01/atomic-free-template_0.jpg) center/ cover'}}></CardTitle>
            <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Website Templates</h6><br/>Website templates are very interesting and fun. I build some of them using HTML, CSS and media queries for responsiveness. </CardText>
            <CardActions border>
            <a href="https://github.com/Gagan2910" target="_blank"><i className="fa fa-github-square" style={{color:"black", fontSize:"30px"}}/></a>
            </CardActions>
            </Card>
            </div>
            )
        }
        else
        {
            return (
                <div className="projects">
                <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
                <CardTitle style={{height:'150px',background:'url(https://image.winudf.com/v2/image1/Y29tLnNvbGFjZWxhYnMuZW5nbGlzaGtpZHNhcHBfc2NyZWVuXzBfMTU1NzcxOTczMV8wNzM/screen-0.jpg?fakeurl=1&type=.jpg) center/ cover'}}></CardTitle>
                <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Kids Learning</h6><br/> Kids Learning is an Android mobile app that helps kids to learn spellings, maths, fruits name and jumble words through visuals. I used Android Studio and SQLite to build this small mini application using Java and sql queries.</CardText>
                <CardActions border>
                <a href="https://github.com/Gagan2910" target="_blank"><i className="fa fa-github-square" style={{color:"black", fontSize:"30px"}}/></a>
                </CardActions>
                </Card>
                <Card shadow={5} style={{minWidth: '350px', margin:"auto"}}>
                <CardTitle style={{height:'150px',background:'url(https://imgur.com/HLvhGOP.jpg) center/ cover'}}></CardTitle>
                <CardText style={{color: 'black'}}><h6 style={{textDecoration:"underline"}}>Car Renting App</h6><br/>Car renting app is my another Android based project that used Google Maps to search for renting cars nearby location to make an appointment to rent them.</CardText>
                <CardActions border>
                <a href="https://github.com/Gagan2910" target="_blank"><i className="fa fa-github-square" style={{color:"black", fontSize:"30px"}}/></a>
                </CardActions>
                </Card>
                
                </div>
                )
        }
    }
    render() {
        return (
            <div className="about-me">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab style={{color:"white"}} >Web Application Development</Tab>
            <Tab style={{color:"white"}} >Mobile Application Development</Tab>
        </Tabs>
        <section className="projects-grid">
        <Grid className="projects-grid">
        <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
        </Cell>
        </Grid>
        </section>
        
            </div>
        );
    }
}

export default Projects