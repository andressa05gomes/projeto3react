import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
    return(
<ul className='Menu'>

        <li className='item'> <Link className='link' to="/">Sobre</Link></li>
        <li className='item'><Link className='link' to="/portfolio">Portfólio</Link></li>
        <li className='item'><Link className='link' to="/comentarios">Comentários</Link></li>

</ul>


    )
}

export default Menu