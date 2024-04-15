const express = require('express')
const mongoose = require('mongoose')
const app = express()
const uri = 'mongodb+srv://wiriyevich:cavuh9UCvo10rbvI@cluster0.nzgsmre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("Mongo povezan")
    }
    catch (error){
        console.error(error)
    }
}

connect()

app.listen(8000, () => {console.log("Server slusa na 8000")})