require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.LOCALHOST_SERVER_PORT || 7000;

// export routes
const authenticationRoutes = require("./routes/authentication")
const customerRoutes = require("./routes/customer");
const productRoutes = require("./routes/product");
const vendorRoutes = require("./routes/vendor");
const manufacturerRoutes = require("./routes/manufacturer");
const contactUsRoute = require("./routes/contactUs")

// middlewares
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api", authenticationRoutes);
app.use("/api", customerRoutes);
app.use("/api", productRoutes);
app.use("/api", vendorRoutes);
app.use("/api", manufacturerRoutes);
app.use("/api", contactUsRoute);




app.listen(PORT, () => {

    console.log(`Server is up and listning port ${PORT}`);
});
