import { HeaderContainer } from "./style"
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
        <section>
            <div>
                logo
            </div>
            <ul>
                <li>
                  <NavLink to={'/'}>
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/Productos'}>
                    Productos
                  </NavLink>
                </li>
                <li>Ofertas</li>
                <li>Contacto</li>
                <li>Mi carrito</li>
            </ul>
        </section>
    </HeaderContainer>
  )
}
