const Mongoose = require("mongoose");

const RegisterSchema = Mongoose.Schema({
    carnet: {
     tYpe: string,
     require: true
    },
    Schedule: String,
    isLate: Boolean
});

module.exports = Mongoose.model("Resgistro",
ResgistroSchema);