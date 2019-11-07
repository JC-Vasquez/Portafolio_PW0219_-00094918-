const Registro = require("../models/register");

//GET ALL
const getAll = (req, res) =>{
    Registro.find((err, registros)=>{
        if(err) return res.status(500).json({mesaje: "Error"})

        return res.status(200).json({registros})
    })
}

const getOneById = (req, res) =>{
    Registro.findById(req.params.id,(err, registros)=>{
        if(err) return res.status(500).json({mesaje: "Error"})

        return res.status(200).json({registros})
    })
}

const insert = (req, res) =>{
let registro = new registro({
        carnet: Req.body.carnet,
        schedule: req.body.schedule,
        islate: req.body.islate
});

    registro.save((err)=>{
        if(err) return res.status(500).json({mesaje: "Error"})

        res.status(201).json({mesaje: "yeih"})
    });
}
const update = (req, res) =>{

}

const erase = (req, res) =>{

}

module.exports = {
    getAll,
    getOneById,
    insert,
    update,
    erase
};

