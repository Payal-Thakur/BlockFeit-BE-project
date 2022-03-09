import React , {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles,Grid, TextField, Button} from '@material-ui/core';
import {QRCode} from 'qrcode';
import {QrReader} from 'react-qr-reader';
import '../../style/Scanned.css';


function Scanned(){

    
    const classes = useStyles();
    const [scanResultFile, setScanResultFile] = useState('');
    const qrRef = useRef(null);
    const [imageUrl, setImageUrl] = useState('');
   
   
      
     
       const handleErrorFile = (error) => {
        console.log(error);
      }
      const handleScanFile = (result) => {
          if (result) {
              setScanResultFile(result);
          }
      }
      const onScanFile = () => {
        qrRef.current.openImageDialog();
      }
     
return( 

<div>

<div class="wrapper">
    <div class="navbar">
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid" >
        <a class="navbar-brand" > Blockfeit</a>
          <form class="d-flex " >
        
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            
            <div class="col-6 col-md-4 sign-out-wrapper clearfix">
            <a href="/Login" class="sign-out pull-right">
            <i class="fa fa-sign-out"></i>
    <span>Log Out</span>
    
  </a>
</div>
          </form>
        </div>
      </nav>

    </div> 
   </div>  


 

   <Container className={classes.conatiner}>
          <Card>
              <h2 className={classes.title}>Generate QR Code and Download </h2>
              <CardContent>
                  <Grid container spacing={12}>
                  <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
                        <QrReader
                          ref={qrRef}
                          delay={300}
                          style={{width: '100%'}}
                          onError={handleErrorFile}
                          onScan={handleScanFile}
                          legacyMode
                        />
                        <h3>Scanned Code: {scanResultFile}</h3>
                      </Grid>
                  </Grid>
              </CardContent>
          </Card>
    </Container>
</div>





);
}
const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20,
     
    }
}));
export default Scanned;






