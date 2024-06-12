
import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
  
  {  
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/martinxaviernievas.png",
    nombre: "Martin Nievas",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/martinxaviernievas.png",
    nombre: "Martin Nievas",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/martinxaviernievas.png",
    nombre: "Martin Nievas",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Movil",
    foto: "https://github.com/martinxaviernievas.png",
    nombre: "Martin Nievas",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/martinxaviernievas.png",
    nombre: "Martin Nievas",
    puesto: "Instructor"
  }])

  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      id:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"
    }
    ,
    {
      id: uuid(),
      id:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    }
    ,
    {
      id: uuid(),
      id:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
    }
    ,
    {
      id: uuid(),
      id:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
    }
    ,
    {
      id: uuid(),
      id:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
    }
    ,
    {
      id: uuid(),
      id:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"
    }
    ,
    {
      id: uuid(),
      id:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"
    }
      
])
  
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador])

  }

  // Eliminar colaboradores
  const eliminarColaborador = () => {
    console.log("eliminar colaborador")
  }

  //Actualizar color de equipo
  const actualizarColor = (color,id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  return (
    <div>
      <Header />
      {/* mostrarFormulario  ? <Formulario /> : <></> */ }
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.id)}
        registrarColaborador={registrarColaborador}
       
       />
     }
      <MiOrg  cambiarMostrar={cambiarMostrar} />
      
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.id}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.id)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          
           />
        )
      }

      <Footer />

    </div>
  );
}

export default App;