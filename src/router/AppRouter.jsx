import { Route, Routes } from "react-router-dom"
import { LandingRoutes } from "../landing/routes/LandingRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FootballRoutes } from "../football/routes/FootballRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        <Route path="/*" element={<LandingRoutes/>}/>
        <Route path="/dashboard/*" element={<FootballRoutes/>}/>
    </Routes>
  )
}
