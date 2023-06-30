import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({Presupuesto,setPresupuesto,setIsvalidPresupuesto}) => {
  const [mensaje, setmensaje]= useState('');

const handlePresupuesto = (e) =>{
 e.preventDefault ();

  if (!Presupuesto||Presupuesto <0){
    setmensaje('no es un presupuesto valido')
    return
  }

      setmensaje('')
      setIsvalidPresupuesto(true)
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra '>
        <form  onSubmit={handlePresupuesto} className='formulario'>
          <div className='campo'>
            <label>Ingresa tu  Presupuesto Mensual</label>
            <input 
                  className='nuevo-presupuesto'
                  type='number'
                  placeholder='Ingresa tu Presupueto'
                  value={Presupuesto}
                 onChange={e => setPresupuesto (Number(e.target.value))}
              />

          </div>

            <input 
                type= 'submit' value='Agregar' />
                
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

        </form>
          
    </div>
  )
}

export default NuevoPresupuesto
