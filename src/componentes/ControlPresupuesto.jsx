import React from 'react'
import {useState,useEffect} from 'react'

const ControlPresupuesto = ({gastos,Presupuesto}) => {    //se hace un destroin para extraer cada componente del arrglo

  const [disponible, setDisponible]= useState (0);
  const [gastado, setGastado]= useState (0);

  useEffect(() => {
    const totalGastado= gastos.reduce((total,gasto)=> gasto.cantidad + total,0);
  
   const totalDispinible= Presupuesto - totalGastado;

    console.log(totalDispinible)
    setDisponible(totalDispinible);
    setGastado(totalGastado);
  },[gastos])

  const formatearCantidad =(cantidad) =>{        // funcion para formatear y darle estilo de puntos a la moneda 
    return cantidad.toLocaleString ('en-US',{
      style:'currency',
      currency:'USD'
    })
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>grafica aqui </p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto:</span> {formatearCantidad(Presupuesto)}
                
            </p>
            <p>
              <span>Disponible:</span> {formatearCantidad(disponible)}
             </p>

             <p>
              <span>Gastado:</span> {formatearCantidad(gastado)}
             </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
