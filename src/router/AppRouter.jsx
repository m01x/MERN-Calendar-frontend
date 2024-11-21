import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
  
  const authStatus='authenticated';


  return (
    <Routes>
          {/** Si estoy no estoy autenticado, me ire al login
           * Si estoy autenticado, me voy al calendar page
           */}
          {(authStatus === 'not-authenticated')
            ? <Route path='/auth/*' element={ <LoginPage /> } />
            :<Route path='/*' element={ <CalendarPage /> } /> 
          }
          
          {/** Solo por si el usuario llega a una ruta que no existe, lo mandamos al login */}
          <Route path="/*" element={ <Navigate to='/auth/login' /> } />

          
    </Routes>
  )
}
