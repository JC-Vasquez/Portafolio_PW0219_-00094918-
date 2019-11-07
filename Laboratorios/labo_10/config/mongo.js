const Mongoose = require("mongoose");

let database = "LaboJueves";
let host = "localhost";
let port ="27017";
let uri = `mongodb://${host}:${port}/${database}`;
//mongodb://[host]:[port]/[nombre]
const connect = () =>{
    Mongoose.connect(uri, 
        { useNewUrlParser: true,
        useUnifiedTopology: true})
        .then(()=>{
            console.log(`Connection to
              ${database} successfully`);
        })
        .catch(()=>{
            console.log("Error")
        });

        Mongoose.Promise = global.Promise;
}
module.exports = { connect };