import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={e =>setFiltro (e.target.value)}
                >
                        <option value=" ">--Todas las Categorias--</option>
                        <option value="ahorro">Ahorros</option>
                        <option value="alimentacion">Alimentacion</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Variados</option>
                        <option value="ocio">Tiempo Libre</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                </select>

            </div>
        </form>
      
    </div>
  )
}

export default Filtros
