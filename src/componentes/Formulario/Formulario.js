import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"



const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const { registrarColaboradores } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                titulo="Nombre" 
                placeholder="Ingresa Su Nombre" 
                required
                valor={nombre}
                actualizarValor = {actualizarNombre}
           />
            <CampoTexto 
                 titulo="Puesto" 
                 placeholder="Ingresa su Puesto"
                 required
                 valor={puesto}
                 actualizarValor = {actualizarPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresa enlace de foto" 
                required
                valor={foto}
                actualizarValor = {actualizarFoto}
            />
            <ListaOpciones 
                 valor={equipo} 
                  actualizarEquipo={actualizarEquipo}
                  equipos = {props.equipos}
           />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario