import React from 'react';
import Navbar from '../components/navbar';
import sidebarComponent from '../components/sidebarComponent';
import './styles.css';
import './dashboard.css';
import './theme.css';
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion';
import Districts from '../components/districts';

function Pageone(props) {

    let district = [
        {id:1,name:'Thiruvananthapuram',parent:'Kerala'},
        {id:2,name:'Kollam',parent:'Kerala'},
        {id:3,name:'Pathanamthitta',parent:'Kerala'},
        {id:4,name:'Alappuzha',parent:'Kerala'},
        {id:5,name:'Kottayam',parent:'Kerala'},
        {id:6,name:'Idukki',parent:'Kerala'},
        {id:7,name:'Eranakulam',parent:'Kerala'},
        {id:8,name:'Thrissur',parent:'Kerala'},
        {id:9,name:'Palakkad',parent:'Kerala'},
        {id:10,name:'Malappuram',parent:'Kerala'},
        {id:11,name:'Kozhikkod',parent:'Kerala'},
        {id:12,name:'Wayanad',parent:'Kerala'},
        {id:13,name:'Kannur',parent:'Kerala'},
        {id:14,name:'Kasaragod',parent:'Kerala'},       
    ]
    let localbodytype = [
        {id:1,name:'Municipal Corporation'},
        {id:1,name:'Municipality'},
        {id:1,name:'Grama Panchayat'},
    ]
    let localbodyname = [
        {id:1,name:'Kochi Corporation',lbt:1,did:7},
        {id:1,name:'Thiruvananthapuram Corporation ',lbt:1,did:1},
        {id:1,name:'Thodupuzha Municipality',lbt:2,did:6},
    ]

  return (
    <div>
        <Navbar />
        <sidebarComponent />
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                </div>
                <div className='col-md-8'>
                    <div className='container'>
                        <div className='col-md-12'>
                            <div className='card'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Local Body Details</Accordion.Header>
                                        <Accordion.Body>
                                        <Card>
                                        <div className='container'>
                                            <div className='row'> 
                                                <div className='col-md-4'>
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">District</label>
                                                        <select className="form-control" id="exampleInputEmail1">
                                                        {
                                                        district.map((obj,index)=>{
                                                            return(
                                                                <Districts key={index} name={obj.name} age={obj.age} />
                                                            )
                                                            })
                                                        }                                                                                          
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="form-group">
                                                    <label for="exampleInputEmail1">Local Body Name</label>
                                                        <select className="form-control" id="exampleInputEmail1">
                                                        {
                                                        localbodyname.map((obj,index)=>{
                                                            return(
                                                                <Districts key={index} name={obj.name} age={obj.age} />
                                                            )
                                                            })
                                                        }                                                                                          
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="form-group">
                                                    <label for="exampleInputEmail1">Local Body Type</label>
                                                        <select className="form-control" id="exampleInputEmail1">
                                                        {
                                                        localbodytype.map((obj,index)=>{
                                                            return(
                                                                <Districts key={index} name={obj.name} />
                                                            )
                                                            })
                                                        }                                                                                          
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className='row'> 
                                                <div className='col-md-4'>
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                    </div>
                                                    
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>          
                                        </Card>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Permit & Ocuupancy details</Accordion.Header>
                                        <Accordion.Body>                                                                                       
                                            <div className='container'>
                                                <div>
                                                    <h2>Permit & Ocuupancy details</h2>                                            
                                                </div>
                                            </div>                                       
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Survey Details | Village Details</Accordion.Header>
                                        <Accordion.Body>                                                                                       
                                            <div className='container'>
                                                <div>
                                                    <h2>Survey Details | Village Details</h2>                                            
                                                </div>
                                            </div>                                       
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className='col-md-12 button-box'>
                                <button type="button" class="btn btn-outline-primary ikm-btn-outline">Next</button>
                                <button type="button" class="btn btn-primary ikm-btn-primary">Save</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pageone;
