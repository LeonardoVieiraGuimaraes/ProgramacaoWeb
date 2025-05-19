import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

export default function Success() {

    return (
        <MuiThemeProvider>
                <Dialog
                    open="true"
                    fullWidth="true"
                    maxWidth="sm">
                        <AppBar title="Sucesso" />
                        <h1>Obrigado</h1>
                        <p>Atulizado com sucesso!</p>
                </Dialog>
        </MuiThemeProvider>
    )

}