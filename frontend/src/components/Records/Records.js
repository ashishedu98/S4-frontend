import React, { Component } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import './Records.scss'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom"; 



const actionsFormatter=(cell, row, rowIndex, formatExtraData)=>{
  return ( 
    < div >
    <Link to="/Profile" className="btn btn-primary">View</Link>
  </div> 
  );
 };


const data = {
    columns: [
      {
        label: 'Criminal ID',
        field: 'criminalID',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Criminal Name',
        field: 'criminalName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Threat Level',
        field: 'threatLevel',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Location',
        field: 'location',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Profile',
        field: 'profile',
        sort: 'asc',
        width: 100,
        field:actionsFormatter,
      }
    ],
    rows: [
      {
        criminalID: '37218',
        criminalName: 'Max',
        threatLevel: '4',
        location: 'Edinburgh',
        
      },
      {
        criminalID: '37258',
        criminalName: 'Sammy',
        threatLevel: '4',
        location: 'Tokyo',
       // profile: 'profillink',
      },
      {
        criminalID: '17218',
        criminalName: 'John Gotti',
        threatLevel: '4',
        location: 'Manhattan',
       // profile: 'profillink',
      },
      {
        criminalID: '12518',
        criminalName: 'Jimmy Naps',
        threatLevel: '2',
        location: 'New York',
       // profile: 'profillink',
      },
      {
        criminalID: '77218',
        criminalName: 'Alcapone',
        threatLevel: '3',
        location: 'Chicago',
       // profile:'profillink',
      },
      {
        criminalID: '915218',
        criminalName: 'Deric Lara',
        threatLevel: '4',
        location: 'Boston',
       // profile: 'profillink',
      },
      {
        criminalID: '12418',
        criminalName: 'Ramesh',
        threatLevel: '2',
        location: 'Rajasthan',
       // profile: 'profillink',
      },
      {
        criminalID: '11119',
        criminalName: 'Gonzales',
        threatLevel: '1',
        location: 'Goa',
       // profile: 'profillink',
      },
      {
        criminalID: '13339',
        criminalName: 'Dan',
        threatLevel: '1',
        location: 'Bangalore',
      //  profile: 'profillink',
      },
      {
        criminalID: '14449',
        criminalName: 'Ali',
        threatLevel: '4',
        location: 'Kerela',
      //  profile: 'profillink',
      },
      {
        criminalID: '1',
        criminalName: 'Hrithik',
        threatLevel: '3',
        location: 'Guhwati',
      //  profile: 'profillink',
      },
      
      
    
    ]}
      


const Records=()=>{
    return(
        <div className="headContainer">
            <Container>
                <Row className="viewRecords">
                    <Col sm={12}>
                      <div className="title">
                      <h1 className="tlabel">Criminal Records</h1>
                      </div>
                    </Col>
                </Row>
                <Row className="viewtblRecords">
                    <Col sm={12}>
                      <div className="tblRecords">
                           <MDBDataTable  bordered striped hover  data={data}/>
                      </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}
export default Records