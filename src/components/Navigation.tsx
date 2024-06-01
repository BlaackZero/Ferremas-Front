import { Routes, Route} from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { ProductosPage } from '../pages/Productos/ProductosPage'


export const Navigation = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/Productos" element={<ProductosPage/>} />
    </Routes>
  )
}
