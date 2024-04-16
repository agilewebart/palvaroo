const express = require('express');
const config = require('./config');
const fs     =	require('fs');
const app = express();
const cors = require('cors');
const middleWare = require('./utility/dateTime');
// const xss = require('xss');
const PORT = config.BACKEND_HOST.PORT || 9000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(middleWare.modifyReqWithDateTime)

//-----------Prevent  Xss ----------------
 

fs.readdir(config.controllerPath, (err, files) => {
    if(err){
        util.loggs("---Filereader error-->",err)
    } else {
        files.forEach(file => {
            app.use('/api' , require(config.controllerPath+file));
        });
    }
});




app.listen(PORT, () => {
    console.log("------------>>",config.BACKEND_HOST.IP_HOST)
})