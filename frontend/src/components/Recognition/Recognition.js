import React, { useEffect, useState } from 'react'
import EditIcon from 'react'
import {Container,Row,Col,Button,getTrProps,Modal,Figure} from 'react-bootstrap'
import Image from '../../assets/images/download.png'
import './Recognition.scss'
import BootstrapTable from 'react-bootstrap-table-next';
import ReactDom from 'react-dom';
import Image1 from '../../assets/images/criminaltest.jpg'
import { Link } from "react-router-dom"; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Profile from '../Profile/Profile'



//const { data } = this.state;

/*getTrProps = (state, rowInfo, instance) => {
  if (rowInfo) {
    return {
      style: {
        background: rowInfo.row.threatLevel > 3 ? 'red' : 'yellow',
        color: 'white'
      }
    };
  }
}*/






 



//----------------------------\Table Contents-rows-cols/-----------------------------------//



//-----------------------------Render--------------------------------------------//
const Recognition=()=>{



const [modalInfo,setModalInfo]=useState([]);
const[showModal,setShowModal]=useState(false);
const[show,setShow]=useState(false);
const handleClose=()=>setShow(false);
const handleShow=()=>setShow(true);

const actionsFormatter=()=>{
  return ( 
    < div >
    <Button variant="dark">View Details</Button>
  </div> 
  );
 };


const onRowClick= {
  onClick: (e,row) => {
      console.log(row)  
      setModalInfo(row)
      console.log(row.criminalId)  
      toggleTrueFalse()       
}
};





const products = [
    
  {
    "criminalId": "24323",
    "criminalName": "Mark Smith",
    "threatLevel": "1",
    "profileLink":"https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U"
    
  },
  {
    "criminalId": "24564",
    "criminalName": "Caitlin MacDonald",
    "threatLevel": "2",
    "profileLink":"https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U"
  },
  {
    "criminalId": "24345",
    "criminalName": "Jessie Johnson ",
    "threatLevel":"3",
    "profileLink":"https://drive.google.com/thumbnail?id=1rDSZ7jAQlH-2nK_njN3wxRqTTsmzGK_U"
  }
];
const columns = [ 
{
dataField: 'criminalId',
text: 'Criminal ID'



}, {
dataField: 'criminalName',
text: 'Criminal Name'

}, {
dataField: 'threatLevel',
text: 'Threat Level',
sort:true
},
{
  dataField:'profileLink',
  text:'Profile Link',
  isDummyField: true,
  formatter:actionsFormatter 
  }
];






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
            width={171}
            height={180}
            alt="profile pics"
            src={modalInfo.profileLink}
         />
        </ol> 
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal ID:{modalInfo.criminalId}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal Name:{modalInfo.criminalName}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Threat Level:{modalInfo.threatLevel}</ol>
     
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <button variant="secondary" onClick={handleClose}>Close</button>
    </Modal.Footer>
    </Modal>
    )
  };





    return(
        <div>
            <Container>
                
                <Row className="liveWindowRow">
                    <Col sm={4}>
                        <div className="rawWindow">
                            <img className="rawContent" src={Image} alt="sample" />
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="processWindow">
                            <img className="liveContent" src={Image} alt="sample" />
                        </div>
                    </Col>
                </Row>
                <Row className="viewContent">
                    <Col sm={12}>
                      <div className="tblContent">
                        <BootstrapTable bootstrap4  keyField='id' data={ products } columns={ columns } variant={"dark"} bordered={true} hover={true} striped={true}  rowEvents={onRowClick} />
                      </div>
                        </Col>
                </Row>

                {show ?<ModalContent/>:null}
                
                
            </Container>
           
        </div>
    )
}
export default Recognition






  