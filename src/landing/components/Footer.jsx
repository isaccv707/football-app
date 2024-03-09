import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const Footer = () => {
  return (
    <Grid container sx={{ backgroundColor: 'primary.main', color: 'white', padding: 4, display: 'flex'}}>
            <Grid item xs={12} md={4}>
                <Typography variant="h6">Football-app</Typography>
                <ul>
                    <li><Link href="#">Inicio</Link></li>
                    <li><Link href="#">Noticias</Link></li>
                    <li><Link href="#">Partidos</Link></li>
                    <li><Link href="#">Equipos</Link></li>
                </ul>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h6">Sobre Nosotros</Typography>
                <Typography variant="body2">
                    Somos una plataforma dedicada a proporcionar información actualizada sobre el mundo del fútbol.
                </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
                <Typography variant="h6">Contacto</Typography>
                <Typography variant="body2">
                    Email: info@tuappdefutbol.com<br />
                    Teléfono: 123-456-7890
                </Typography>
            </Grid>
        </Grid>
  )
}
