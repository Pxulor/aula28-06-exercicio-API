const mongoose = require("mongoose")

const boletimSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    boletim: {
        matematica:{
            type: Number,
            required: false
        },
        portugues:{
            type: Number,
            required: false
        },
        historia:{
            type: Number,
            required: false
        },
        ingles:{
            type: Number,
            required: false
        }
    }
})

module.exports=mongoose.model("boletim", boletimSchema)