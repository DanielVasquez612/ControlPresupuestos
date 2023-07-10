
import { useState,useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal,animiarModal,setanimarModal,guardarGasto,gastoEditar,setGastoEditar}) =>{
                                             
    const [ mensaje, setMensaje] = useState('')
    const [ nombre,setNombre] = useState('')
    const [cantidad, setCantidad] =useState ('')
    const [categoria, setCategoria] = useState('')
    const [fecha,setFecha]= useState('')
    const [ id,setId] =useState ('')
    
    
    useEffect(() =>{        //useEffect para editar gastos
        if ( Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId (gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }
    },[]);

    //funcion para cerrar ventana Modal
    const ocultarModal =() =>{
        setanimarModal(false)
        setGastoEditar ({})
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
      guardarGasto({nombre,cantidad,categoria,id,fecha})
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
             <legend>{gastoEditar.nombre ? 'Editar Gasto':'Nuevo Gasto'}</legend>
             
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
                    onChange={e => setCantidad(Number(e.target.value))}
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
                    value={gastoEditar.nombre ? 'Guardar Cambios':'Agregar Gastos'}

                    />

             </div>


        </form>
    </div>
  )
}

export default Modal
