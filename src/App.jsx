import { useState } from 'react'
import Header from './componentes/Header'
import ListadoGastos from './componentes/ListadoGastos'
import Modal from './componentes/Modal'
import {generarId} from './ayudas'
import IconoNuevoGastos from './img/nuevo-gasto.svg'


function App() {
  const [gastos,setGastos]= useState([]);
  const [Presupuesto,setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsvalidPresupuesto]= useState(false)
  const [modal, setModal] = useState (false)
  const [animiarModal, setanimarModal] = useState (false)
  

  const handleNuevoGasto = () => {      //funcion para abrir modal
    setModal(true) 
    setTimeout( ()=> {
      setanimarModal(true)
    },500)   
    
  }

  const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto])
    setanimarModal(false)
    setTimeout ( () => {
        setModal(false)
    },500);
  
}

  return (
    <div className={modal ? 'fijar':''}>
      
          <Header 
              gastos={gastos}
              Presupuesto={Presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsvalidPresupuesto={setIsvalidPresupuesto}
          />

        { isValidPresupuesto && (
          <>
              <main>
                    <ListadoGastos 
                        gastos={gastos}
                    />
              </main>

               <div className='nuevo-gasto'>
            <img
                src={IconoNuevoGastos}
                alt='icono nuevo de gastos '
                onClick={handleNuevoGasto}
            />
          </div>
          </>       
        )}
            
          {modal && <Modal 
                          setModal={setModal}
                          animiarModal={animiarModal}
                          setanimarModal={setanimarModal}
                          guardarGasto={guardarGasto}
                          /> } 
        

    </div>

    
      
  )
}

export default App
