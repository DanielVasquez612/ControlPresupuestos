import React from 'react'
import {useState,useEffect} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({gastos,setGastos,Presupuesto,setPresupuesto,setIsvalidPresupuesto}) => {    //se hace un destroin para extraer cada componente del arrglo

  const [porcentaje, setPorcentaje] = useState (0);
  const [disponible, setDisponible]= useState (0);
  const [gastado, setGastado]= useState (0);

  useEffect(() => {
    const totalGastado= gastos.reduce((total,gasto)=> gasto.cantidad + total,0);
  
   const totalDispinible= Presupuesto - totalGastado;

   //caluculo para el porcentaje
   const nuevoPorcentaje= (((Presupuesto - totalDispinible) / Presupuesto) *100).toFixed(2);
    
    setDisponible(totalDispinible);
    setGastado(totalGastado);

      setTimeout (() =>{
        setPorcentaje (nuevoPorcentaje)
      },1500);

  },[gastos])

  const formatearCantidad =(cantidad) =>{        // funcion para formatear y darle estilo de puntos a la moneda 
    return cantidad.toLocaleString ('en-US',{
      style:'currency',
      currency:'USD'
    })
  }

      //reset de App
  const handleResetApp = ()=>{
    const resultado  = confirm('¿Reiniciar App?')
    if(resultado){
      setGastos([])
      setPresupuesto(0)
      setIsvalidPresupuesto(false)
    }

  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar    //componente de grafica circular
                styles ={buildStyles({
                  pathColor: porcentaje > 100 ? '#DC2626': '#3B82F6',
                  trailColor: '#F5F5F5',
                  textColor : porcentaje > 100 ? '#DC2626': '#3B82F6'
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className='contenido-presupuesto'>
          <button
            className='reset-app'
            type='button'
            onClick={handleResetApp}
          >
            Reset App
          </button>
            <p>
                <span>Presupuesto:</span> {formatearCantidad(Presupuesto)}
                
            </p>
            <p className= {`${disponible <0 ? 'negativo':''}`}>
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
