import React, { useEffect, useState } from 'react'
import {Container,Row,Col,Button,getTrProps,Modal,Figure,Form} from 'react-bootstrap'
import Image from '../../assets/images/download.png'
import './Recognition.scss'
import BootstrapTable from 'react-bootstrap-table-next';
import ReactDom from 'react-dom';
import Image1 from '../../assets/images/criminaltest.jpg'
import { Link } from "react-router-dom"; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Profile from '../Profile/Profile'
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
import axios from 'axios';

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





 



//----------------------------\Table Contents-rows-cols/-----------------------------------//



//-----------------------------Render--------------------------------------------//
const Recognition=()=>{



const [modalInfo,setModalInfo]=useState([]);
const[showModal,setShowModal]=useState(false);
const[show,setShow]=useState(false);
const handleClose=()=>setShow(false);
const handleShow=()=>setShow(true);
const[data,setData]=useState([]);
const[resultImg,setResultImg]=useState('');
const[threat,setThreat]=useState(false);
const[time,setTime]=useState(0);
const[namelbl,setName]=useState('');

// const actionsFormatter=()=>{
//   return ( 
//     < div >
//     <Button variant="dark">View Details</Button>
//   </div> 
//   );
//  };


// const onRowClick= {
//   onClick: (e,row) => {
//       console.log(row)  
//       setModalInfo(row)
//       console.log(row.criminalId)  
//       toggleTrueFalse()       
// }
// };





// const products = [
    
//   {
//     "criminalId": "24323",
//     "criminalName": "Mark Smith",
//     "threatLevel": "1",
//     "profileLink":"https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U"
    
//   },
//   {
//     "criminalId": "24564",
//     "criminalName": "Caitlin MacDonald",
//     "threatLevel": "2",
//     "profileLink":"https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U"
//   },
//   {
//     "criminalId": "24345",
//     "criminalName": "Jessie Johnson ",
//     "threatLevel":"3",
//     "profileLink":"https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U"
//   }
// ];
// const columns = [ 
// {
// dataField: 'criminalId',
// text: 'Criminal ID'



// }, {
// dataField: 'criminalName',
// text: 'Criminal Name'

// }, {
// dataField: 'threatLevel',
// text: 'Threat Level',
// sort:true
// },
// {
//   dataField:'profileLink',
//   text:'Profile Link',
//   isDummyField: true,
//   formatter:actionsFormatter 
//   }
// ];

const toggleTrueFalse=()=>{

  setShowModal(handleShow);
};

// useEffect(()=>{
//   const interval=setInterval(()=>{setTime(time=>time+1)},5000);
//   console.log("running....")
//   return()=>clearInterval(interval);
// })


useEffect(()=>{
const getData=()=>{
  axios.get('http://4d55a4f4d964.ngrok.io/hostpage')
  .then((response) => {
    setData(response.data.details)
    setName(response.data.details)
    console.log(response.data.details)
    setResultImg(response.data.lastpic)
    })}
  getData()
  const interval=setInterval(()=>{getData()},5000);
   console.log("running....")
    return()=>{clearInterval(interval)};
    

    //console.log(this.state.data)
   },[])
  


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
            src={modalInfo.profile_pic}
         />
        </ol> 
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal ID:{modalInfo.sid}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal Name:{modalInfo.name}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Threat Level:{modalInfo.threat}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Location:{modalInfo.location}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Time:{modalInfo.last_found}</ol>
     
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <button variant="secondary" onClick={handleClose}>Close</button>
    </Modal.Footer>
    </Modal>
    )
  };

    return(
        <div style={{background:threat?"#cf2334":""}}>
            <Container  >
                
                <Row className="liveWindowRow">
                    <Col sm={4} >
                        <div className="rawWindow">
                            <img className="rawContent" src={Image} alt="sample" />
                        </div>
                        {/* <div className="rawLabel" style={{marginTop:"3vh"}}>
                        <Form.Control type="text" value={data[0]["name"]} readOnly />  
                        <Form.Control type="text" value={data[0]["threat"]} readOnly />  
                        </div> */}
                    </Col>
                    <Col sm={8}>
                        <div className="processWindow">
                            <img className="liveContent" src={resultImg||'http://via.placeholder.com/400x300'} style={{objectFit:"fill"}} width="300" height="400"  alt="sample" />
                        </div>
                    </Col>
                </Row>
                <Row className="viewContent">
                    <Col sm={12}>
                      <div className="tblContent" >
                                    <MaterialTable
                                      icons={tableIcons}
                                      title="Suspect Recognition"
                                      columns={[
                                        { title: 'Criminal Id', field: 'sid' },
                                        { title: 'Criminal Name', field: 'name' },
                                        { title: 'ThreatLevel', field: 'threat'  },
                                        { title: 'Location', field: 'location' },
                                        { title: 'Time', field: 'last_found' },
                                        
                                      ]}
                                      data={data}
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
export default Recognition






  