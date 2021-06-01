import React, { Component } from 'react'
import {Container,Row,Col,Button,getTrProps,Modal,Figure} from 'react-bootstrap'
import { useEffect, useState } from 'react'
// import './Records.scss'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { MDBDataTable } from 'mdbreact';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import axios from 'axios'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const Records=()=>{
    const [modalInfo,setModalInfo]=useState([]);
    const[showModal,setShowModal]=useState(false);
    const[show,setShow]=useState(false);
    const[data,setData]=useState([])
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    

    useEffect(()=>{
      axios.get('http://4d55a4f4d964.ngrok.io/all_recognitions')
      .then((response) => {
        setData(response.data)
        console.log(this.state.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },[])

    
    const toggleTrueFalse=()=>{
    
      setShowModal(handleShow);
    };
    
    const ModalContent=()=>{
   
      return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1>Criminal Details</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <ul>
            <ol>
            <Figure.Image
                width={380}
                height={480}
                alt="profile pics"
                src={modalInfo.detect_pic}
             />
            </ol> 
            <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal ID:{modalInfo.sid}</ol>
            <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal Name:{modalInfo.criminalName}</ol>
            <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Threat Level:{modalInfo.threatLevel}</ol>
            <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Location:{modalInfo.detect_location}</ol>
            <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Time:{modalInfo.detect_time}</ol>
         
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>Close</button>
        </Modal.Footer>
        </Modal>
        )
      };
    
    
    
    
        return(
          <div style={{height:"100%",width:"100%"}}>
            <Container className="records" fluid>
              <Row>
                <Col sm={12} style={{padding:"4vh"}}>
                  <div className="mtable" style={{overflow:"auto"}}>
                        <MaterialTable 
                        icons={tableIcons}
                        title="Criminal Records"
                        columns={[
                          { title: 'Criminal Id', field: 'sid' },
                           { title: 'Criminal Name', field: 'names' },
                           { title: 'ThreatLevel', field: 'threats'  },
                          { title: 'Location', field: 'detect_location'},
                          {title:'Time',field:'detect_time'}
                          
                          
                        ]}
                        data={data}
                        // data={[
                        //   { criminalId: '1', criminalName: 'Barren', threatLevel: '4', location: 'Bangalore',profileLink:'https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U' },
                        //   { criminalId: '2', criminalName: 'Lake', threatLevel: '3', location: 'Mumbai',profileLink:'https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U' },
                        //   { criminalId: '3', criminalName: 'Tim', threatLevel: '5', location: 'UP',profileLink:'https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U' },
                        //   { criminalId: '4', criminalName: 'Montana', threatLevel: '2', location: 'Kerela',profileLink:'https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U' },
                        //   { criminalId: '5', criminalName: 'Max Cady', threatLevel: '1', location: 'Goa',profileLink:'https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U' }
                        // ]}
                        actions={[
                          {
                            icon: PersonOutlineTwoToneIcon,
                            tooltip: 'View Profile',
                            onClick: (event, rowData) => {
                              console.log(rowData)  
                              setModalInfo(rowData)
                              console.log(rowData.criminalId)  
                              toggleTrueFalse()       
                        }
                          },
                        ]}
                        options={{
                          actionsColumnIndex: -1
                        }}
                      />
                      </div>
                  </Col>
              </Row>
              {show ?<ModalContent/>:null}
            </Container>
        </div>
        
        )
    }
    export default Records



// const actionsFormatter=(cell, row, rowIndex, formatExtraData)=>{
//   return ( 
//     < div >
//     {/* <Link to="/Profile" className="btn btn-primary">View</Link> */}
//   </div> 
//   );
//  };


// const data = {
//     columns: [
//       {
//         label: 'Criminal ID',
//         field: 'criminalID',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Criminal Name',
//         field: 'criminalName',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Threat Level',
//         field: 'threatLevel',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'Location',
//         field: 'location',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Profile',
//         field: 'profile',
//         sort: 'asc',
//         width: 100,
//         field:actionsFormatter,
//       }
//     ],
//     rows: [
//       {
//         criminalID: '37218',
//         criminalName: 'Max',
//         threatLevel: '4',
//         location: 'Edinburgh',
        
//       },
//       {
//         criminalID: '37258',
//         criminalName: 'Sammy',
//         threatLevel: '4',
//         location: 'Tokyo',
//        // profile: 'profillink',
//       },
//       {
//         criminalID: '17218',
//         criminalName: 'John Gotti',
//         threatLevel: '4',
//         location: 'Manhattan',
//        // profile: 'profillink',
//       },
//       {
//         criminalID: '12518',
//         criminalName: 'Jimmy Naps',
//         threatLevel: '2',
//         location: 'New York',
//        // profile: 'profillink',
//       },
//       {
//         criminalID: '77218',
//         criminalName: 'Alcapone',
//         threatLevel: '3',
//         location: 'Chicago',
//        // profile:'profillink',
//       },
//       {
//         criminalID: '915218',
//         criminalName: 'Deric Lara',
//         threatLevel: '4',
//         location: 'Boston',
//        // profile: 'profillink',
//       },
//       {
//         criminalID: '12418',
//         criminalName: 'Ramesh',
//         threatLevel: '2',
//         location: 'Rajasthan',
//        // profile: 'profillink',
//       },
//       {
//         criminalID: '11119',
//         criminalName: 'Gonzales',
//         threatLevel: '1',
//         location: 'Goa',
//        // profile: 'profillink',
//       },
//       {
//         criminalID: '13339',
//         criminalName: 'Dan',
//         threatLevel: '1',
//         location: 'Bangalore',
//       //  profile: 'profillink',
//       },
//       {
//         criminalID: '14449',
//         criminalName: 'Ali',
//         threatLevel: '4',
//         location: 'Kerela',
//       //  profile: 'profillink',
//       },
//       {
//         criminalID: '1',
//         criminalName: 'Hrithik',
//         threatLevel: '3',
//         location: 'Guhwati',
//       //  profile: 'profillink',
//       },
      
      
    
//     ]}
      


