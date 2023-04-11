import React, { useState, useEffect } from 'react';
import "./contactform.css"
import { useNavigate, useLocation } from 'react-router-dom';
import {useForm} from "react-hook-form"
import {sendMail} from './helper/mailform'

const ContactForm = () => {

debugger
const location = useLocation();
const formCar = location.state
const navigation = useNavigate();

const readerFile=(file)=>{
    debugger
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    } )
} 
  const { register, formState: {errors}, handleSubmit} = useForm();
  
  const [values, setValues]=useState({
    nombre:"",
    email:"",
    msj:"",
    // file:[],
    base64:"",
    status:false
  })
  const {nombre, email, msj, base64, status}=values;

  const onSubmit = async (data) => {
    console.log(data)
    debugger
    const nombre = data.nombre
    const email = data.email
    const msj = data.msj
    const file = data.file
    const base64 = []
    for(let i = 0; i < file.length; i++){
        base64[i] = await readerFile(file[i])
    }
    console.log(base64)
    sendMail({nombre, email, base64, msj}).then(data=>{
        if(data.err){
            console.log("err", data.err)
        }else{
            console.log("Success", data)
            setValues({...values,status:true})
        }
    }).catch(console.log("error sending the mail"))
  }

  return (
    <div className="contact-container">
        {/* <h1>Pongamosnos en contacto!</h1> */}

        {/* <div className='contact-list'>
            <h3>--Envíame un mensaje!</h3> 
            <p><img src={location} alt="loc" width="15px" />Alfredo Lorenzo Palacios 457</p>
            <p><img src={telephone} alt="tel" width="15px" />1162767256</p>
            <p><img src={mail} alt="email" width="15px" />ph.evelyndenise@gmail.com</p>
        </div> */}

        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>Trabajemos juntos!</h1>
            <div className="contactCells">
                <p>Nombre*</p>
                <input type="text" {...register('nombre', {required:true, maxLength:20})}/>
                {errors.nombre?.type === 'required' && <p>El campo Nombre es obligatorio</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 20 caracteres</p>}
            </div>

            <div className="contactCells">
                <p>Telefono*</p>
                <input type="text" {...register('telefono', {required:true, maxLength:20})}/>
                {errors.nombre?.type === 'required' && <p>El campo Nombre es obligatorio</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 20 caracteres</p>}
            </div>

            <div className="contactCells">
                <p>Email*</p>
                <input type="text" {...register('email', {required:true, maxLength:40, 
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}/>
                {errors.email?.type === 'pattern' && <p>El formato de email es incorrecto</p>}    
            </div>

            <div className="contactCells">
                <p>Fotos*</p>
                <input type="file" id="fileinput" multiple="multiple" {...register('file', {required:true})}/>
                {errors.file?.type === 'requiered' && <p>Debe cargar por lo menos 5 fotos</p>}    
            </div>

            <div className="contactCells">
                <p for="msj">Mensaje*</p>
                <textarea id="msj" name="msj" rows="4" cols="50" {...register('msj', {required:true})}/>
                {errors.msj?.type === 'required' && <p>El campo Mensaje es obligatorio</p>}
            </div>

            <input id="button" type="submit" value="Enviar"/>

        </form>

    </div>
  )
}

export default ContactForm