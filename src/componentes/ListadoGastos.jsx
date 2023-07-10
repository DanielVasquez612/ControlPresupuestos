import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos,setGastoEditar,elimiarGasto,filtro,gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
           

            {
              filtro ? (
                <>
               <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos de esa Categoria'}</h2>
               {gastosFiltrados.map (gasto =>  (
               
                     <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    elimiarGasto={elimiarGasto}
                />

              ))}
                </>
               
         
              ) :(
                <>
                 <h2>{gastos.length ? 'Gastos' : 'todavia no has generado gastos'}</h2>
                   {
                      gastos.map (gasto =>  (
                        <Gasto 
                           key={gasto.id}
                           gasto={gasto}
                           setGastoEditar={setGastoEditar}
                           elimiarGasto={elimiarGasto}
                       />
              ) )} 
              </>
            )
          }
    </div>
  )
}

export default ListadoGastos
