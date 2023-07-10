import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({gastos,setGastos,Presupuesto,setPresupuesto,isValidPresupuesto,setIsvalidPresupuesto}) => {       //se hace un destroin para extraer cada componente del arrglo
  return (
    <header>
                <h1>planificador de gastos</h1>

                 {isValidPresupuesto ? (      // esto es if ternario
                   <ControlPresupuesto 
                   gastos={gastos}
                   setGastos={setGastos}
                   Presupuesto={Presupuesto}
                   setPresupuesto={setPresupuesto}
                   setIsvalidPresupuesto={setIsvalidPresupuesto}

                   />
                 ):(   
                  <NuevoPresupuesto 
                  Presupuesto={Presupuesto}
                  setPresupuesto={setPresupuesto}
                  setIsvalidPresupuesto={setIsvalidPresupuesto}
                  />
                

                 )}
                
    </header>
  )
}

export default Header
