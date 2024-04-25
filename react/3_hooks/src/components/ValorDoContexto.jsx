import { useContext } from 'react'
import { MeuContexto } from '../context/MeuContexto'

const ValorDoContexto = () => {
    const { mensagem } = useContext(MeuContexto);
    return <div>O valor do contexto é: {mensagem} </div>
}

export default ValorDoContexto
