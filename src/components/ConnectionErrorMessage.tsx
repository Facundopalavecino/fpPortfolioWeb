import React from 'react-dom'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { useMediaQuery, Typography } from '@mui/material'

export default function ConnectionErrorMessage() {
	const isSmallScreen = useMediaQuery('(max-width:600px)')

	return (
			<div style={{
                    margin: '60px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}
                >
				{isSmallScreen ? (
                    <ErrorOutlineIcon sx={{fill: '#FF9800', fontSize: 50}}/>
                    ) : (
                        <ErrorOutlineIcon sx={{fill: '#FF9800', fontSize: 100}}/>
                )}
				<Typography variant="h3">
					Ocurrió un error al establecer conexión con el servidor.
				</Typography>
				<Typography variant="h3">Por favor intente más tarde.</Typography>
			</div>
    )
}