import React, { useState, useRef } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";
import QrReader from "react-qr-reader";
import "../../style/QRcode.css";

function QRcode() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const classes = useStyles();

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);

      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="wrapper">
        <div class="navbar">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand"> Blockfeit</a>
              <form class="d-flex ">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>

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

      <div class="wrapper">
        <div class="sidebar">
          <a class="active" href="#home">
            Home
          </a>
          <a href="/MAddSeller">Add Seller</a>
          <a href="/MAddProducts">Add Products</a>
          <a href="/MSellProducts">Sell Products</a>
          <a href="/QRcode">Generate QR </a>
          <a href="/">Profile</a>
        </div>
      </div>

      <Container className={classes.conatiner}>
        <Card>
          <h2 className={classes.title}>Generate QR Code and Download </h2>
          <CardContent>
            <Grid container spacing={112}>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <TextField
                  label="Enter Product_id Here"
                  onChange={(e) => setText(e.target.value)}
                />
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  onClick={() => generateQrCode()}
                >
                  Generate
                </Button>
                <br />
                <br />
                <br />
                {imageUrl ? (
                  <a href={imageUrl} download>
                    <img src={imageUrl} alt="img" />
                  </a>
                ) : null}
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
    marginTop: 50,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));
export default QRcode;
