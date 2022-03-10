const { mysqlConnection } = require("../database-connection/mysqlConfig");
const { contactUs } = require("../utilities/queries");


const getContactValues = (req, res) => {

    const query  = contactUs.getValues;

    mysqlConnection.query(query, (err, result, field) => {

        if(!!err) {

            return res.status(400).json({

                message: "Something went wrong while reading contact us",
                error : err

            });
        }

        return res.status(200).json({
            message: "Successfully retrived all contacts",
            data : result
        });



    } )
}


const insertContact = (req, res) => {

  
    const query  = contactUs.insertValues;

    const {name, email, details} = req.body;


    mysqlConnection.query(query, [name, email, details] ,(err, result, field) => {

        if(!!err) {

            return res.status(400).json({

                message: "Something went wrong while adding contact",
                error : err

            });
        }

        return res.status(200).json({
            message: "Successfully added contacts details",
            data : result,
            field: field
        });



    } )


}



module.exports  = { getContactValues, insertContact}
