import { useState,useEffect } from 'react'
import Header from './componentes/Header'
import Filtros from './componentes/Filtros'
import ListadoGastos from './componentes/ListadoGastos'
import Modal from './componentes/Modal'
import {generarId} from './ayudas'
import IconoNuevoGastos from './img/nuevo-gasto.svg'


function App() {
  const [gastos,setGastos]= useState(
    localStorage.getItem ('gastos') ? JSON.parse(localStorage.getItem('gastos')):[]
  ); 
  const [Presupuesto,setPresupuesto] = useState(
   Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsvalidPresupuesto]= useState(false)
  const [modal, setModal] = useState (false)
  const [animiarModal, setanimarModal] = useState (false)

  const[gastoEditar, setGastoEditar] = useState ({});
  const [filtro, setFiltro]= useState ('')
  const [gastosFiltrados, setGastosFiltrados]= useState ([])

  useEffect (() => {
    if ( Object.keys(gastoEditar).length > 0){
      setModal(true) 
    setTimeout( ()=> {
      setanimarModal(true)
    },500)   
    }
    
  }, [gastoEditar])

  useEffect (() =>{
     localStorage.setItem('presupuesto', Presupuesto ?? 0)
  },[Presupuesto])

  useEffect (()=>{
      localStorage.setItem('gastos', JSON.stringify(gastos)?? []);
  },[gastos]);

  useEffect (() =>{
      if (filtro){
         // filtrar gastos por categoria
         const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
         setGastosFiltrados(gastosFiltrados)
      }
  },[filtro]);

  useEffect (() =>{
      const presupuestoLS = Number (localStorage.getItem('presupuesto'))?? 0;
      if (presupuestoLS > 0){
        setIsvalidPresupuesto(true)
      }
  },[]);
  
  const handleNuevoGasto = () => {      //funcion para abrir modal
    setModal(true) 
    setGastoEditar({})

    setTimeout( ()=> {
      setanimarModal(true)
    },500)   
    
  }

  const guardarGasto = gasto =>{
    if(gasto.id){
      //actualizado
      const gastosActualizados = gastos.map (gastoState => gastoState.id === gasto.id ? gasto:gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      //nuevo
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
    setanimarModal(false)
    setTimeout ( () => {
        setModal(false)
    },500);
  
}

  const elimiarGasto = id =>{       // funcion para eliminar gasto
      const gastosActualizados= gastos.filter(gasto => gasto.id !==id);
      setGastos(gastosActualizados);
  }


  return (
    <div className={modal ? 'fijar':''}>
      
          <Header 
              gastos={gastos}
              setGastos={setGastos}
              Presupuesto={Presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsvalidPresupuesto={setIsvalidPresupuesto}
          />

        { isValidPresupuesto && (
          <>
              <main>
                <Filtros 
                    filtro={filtro}
                    setFiltro={setFiltro}
                /> 
                     
                    <ListadoGastos 
                        gastos={gastos}
                        setGastoEditar={setGastoEditar}
                        elimiarGasto ={elimiarGasto}
                        filtro={filtro}
                        gastosFiltrados={gastosFiltrados}
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
                          gastoEditar ={gastoEditar}
                          setGastoEditar= {setGastoEditar}
                        /> } 
        

    </div>

    
      
  )
}

export default App
