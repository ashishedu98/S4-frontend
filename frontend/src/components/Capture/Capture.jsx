import React, { Component, useState } from 'react';
import './Capture.scss'
import Webcam from "react-webcam";
import { Container,Button, Row,Col,Modal,Figure } from 'react-bootstrap';
import Image1 from '../../assets/images/criminaltest.jpg'
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from "react-router-dom"; 


const actionsFormatter=()=>{
  return ( 
    < div >
    <Link to='/Profile' variant="dark"  className="btn btn-primary">View Profile</Link>
  </div> 
  );
 };


const products = [
    
  {
    "criminalId": "24323",
    "criminalName": "Mark Smith",
    "threatLevel": "1",
    
    //"profileLink":<Button variant="link" onClick={test}>View</Button>
  },
  {
    "criminalId": "24564",
    "criminalName": "Caitlin MacDonald",
    "threatLevel": "2",
    //"profileLink":<Button variant="link" onClick={test}>View</Button>
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


},{
dataField:'profileLink',
text:'Profile Link',
isDummyField: true,
formatter:actionsFormatter 
}

];



const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 260,
  height: 200,
  facingMode: "user"
};

const WebcamCapture = () => {
const [src,setSrc]=useState('');
const [modalInfo,setModalInfo]=useState([]);
const[showModal,setShowModal]=useState(false);
const[show,setShow]=useState(false);
const handleClose=()=>setShow(false);
const handleShow=()=>setShow(true);

  
  
  const onRowClick= {
    onClick: (e,row) => {
        console.log(row)  
        setModalInfo(row)
        console.log(row.criminalId)
        toggleTrueFalse()   
}
};





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
         <Figure>
          <Figure.Image
           width={250}
            height={180}
          alt="Picture"
          src={Image1}
          />
        </Figure>  
        </ol> 
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal ID:{modalInfo.criminalId}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Criminal Name:{modalInfo.criminalName}</ol>
        <ol style={{fontWeight:"bold"},{fontSize:"20px"}}>Threat Level:{modalInfo.threatLevel}</ol>
        <ol></ol>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <button variant="secondary" onClick={handleClose}>Close</button>
    </Modal.Footer>
    </Modal>
    )
  };





const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setSrc(imageSrc)
    },

    [webcamRef]
  );



  return (
    <div>
      <Container fluid>
          <Row >
            <Col xs={4} >
                <div className="webCam">
                    <Webcam
                      audio={false}
                      height={600}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width={600}
                      videoConstraints={videoConstraints}
                    /> 
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
              <div className="btnCam" style={{marginLeft:"35vh",marginTop:"-8vh"}}>
                        <Button variant="dark" 
                            onClick={(e)=>{e.preventDefault();capture();}}>
                            Capture</Button>
                    </div> 
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                  <div className="capturePic">
                      <img src={src} alt="sample" ></img>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col>
                  <BootstrapTable bootstrap4  keyField='id' data={ products } columns={ columns } variant={"dark"} bordered={true} hover={true} striped={true}  rowEvents={onRowClick} />
              </Col>
            </Row>
            {show ?<ModalContent/>:null}
      </Container>
    </div>
  );
};

export default WebcamCapture;