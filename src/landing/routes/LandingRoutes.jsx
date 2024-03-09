import { Route, Routes } from "react-router-dom"
import { Landing } from "../pages/Landing"
import { Contact, News, Nosotros } from "../pages"


export const LandingRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<Landing/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<News/>}/>
        <Route path='/noticias' element={<Contact/>}/>
    </Routes>
  )
}
