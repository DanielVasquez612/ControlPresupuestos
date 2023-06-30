
import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal,animiarModal,setanimarModal,guardarGasto}) =>{
                                             
    const [ mensaje, setMensaje] = useState('')
    const [ nombre,setNombre] = useState('')
    const [cantidad, setCantidad] =useState ('')
    const [categoria, setCategoria] = useState('')
    
    
    //funcion para cerrar ventana Modal
    const ocultarModal =() =>{
        setanimarModal(false)
        setTimeout ( () => {
            setModal(false)
        },500);
      
    }
    
    //obliga a que todos los campos esten completados para poder enviar informacion luego se usa un useState para mostrar mensaje de alerta
    const hadleSubmit = e =>{
        e.preventDefault ();
      if ([ nombre,cantidad,categoria].includes ('')){
        setMensaje('Todos los campos son obligatorios')

        setTimeout ( ()=>{
            setMensaje('')
        },3000)
        return;
      }
      guardarGasto ({nombre,cantidad,categoria})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
                <img src={CerrarBtn} alt="cerrar modal" 
                    onClick = {ocultarModal}
                />
        </div>
        <form 
            onSubmit={hadleSubmit}
            className={`formulario ${animiarModal ? "animar" : 'cerrar'}`}
            >
             <legend>Nuevo Gasto</legend>
             
             {mensaje && <Mensaje  tipo= 'error'>{mensaje}</Mensaje>}  

             <div className='campo'>
                <label htmlFor='nombre'>Nombre Gasto</label>
                <input 
                    id= "nombre"
                    type='text'
                    placeholder='tipo de gasto'
                    value= {nombre}
                    onChange={e => setNombre (e.target.value)}
                />
             </div>
             <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input 
                    id= "cantidad"
                    type='number'
                    placeholder='ingresa la cantidad de tu gasto: ej .300'
                    value={cantidad}
                    onChange={e => setCantidad (Number(e.target.value))}
                />
             </div>

             <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select
                    id ='categoria'
                    value= {categoria}
                    onChange={e => setCategoria (e.target.value)}
                    >
                        <option value=" ">--seleccione--</option>
                        <option value="ahorro">Ahorros</option>
                        <option value="alimentacion">Alimentacion</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Variados</option>
                        <option value="ocio">Tiempo Libre</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                </select>

                <input type="submit" 
                    value="Añadir gastos"

                    />

             </div>


        </form>
    </div>
  )
}

export default Modal
