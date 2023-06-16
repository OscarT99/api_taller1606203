const {response, json} =require('express')

const Hurto = require('../models/hurto')

const hurtoGet = async(req, res = response)=>{
    const {direccion} = req.query

    const hurtos = await Hurto.find()
    res.json({
        hurtos
    })
}

const hurtoPost = async(req, res = response) =>{
    const body = req.body
    let  mensaje = ''

    try{
        const hurto = new Hurto(body)
        await hurto.save()
        mensaje = 'La insercion se realizo exitosamente'
    }catch(error){
        if (error){
            if (error.name   === 'ValidationError') {
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            }
        }
        console.log(mensaje)
    }
    res.json({
        msg: mensaje
    })
}

const hurtoPut = async(req, res = response) => {
    const {direccion,latitud,longitud,descripcion} = req.body
    let mensaje = ''

    try{
        const hurto = await Hurto.findOneAndUpdate({direccion:direccion},{latitud:latitud,longitud:longitud,descripcion:descripcion})
        mensaje = 'La modificacion se efectuo exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación'
    }

    res.json({
        msg: mensaje
    })
}

const hurtoDelete = async (req,res = response) => {
    const {_id} = req.body
    let mensaje = ''

    try{
        const hurto = await Hurto.findOneAndDelete({_id:_id})
        mensaje = 'La eliminación se efectuo exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación'
    }

    res.json({
        msg : mensaje
    })
}
 

module.exports = ({
    hurtoGet,
    hurtoPost,
    hurtoPut,
    hurtoDelete
})