import React, { useEffect , useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3)
    }
}))

export default function AmiiboCharacter ({match}) {

    const classes = useStyles()

    const[character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://www.amiiboapi.com/api/amiibo?id=${match.params.id}`)
            .then(response => response.json()
                .then(data => {
                    setCharacter(data.amiibo)
                    console.log(data)
                }))
    }, [])

    return (
        <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}} >
            <h2>Amiibo Edition</h2>

            <p><TextField id="name" value={character.name}
                defaultValue="Nome" fullWidth="true" label="Nome"
                variant="outlined" /></p>

            <p><TextField id="serie" value={character.amiiboSeries}
                defaultValue="Serie" fullWidth="true" label="Serie"
                variant="outlined" /></p>

            <p><TextField id="character" value={character.character}
                defaultValue="Caracter" fullWidth="true" label="Caracter"
                variant="outlined" /></p>

            <p><TextField id="gameSeries" value={character.gameSeries}
                defaultValue="Game Series" fullWidth="true" label="Game Series"
                variant="outlined" /></p>

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Tipo: </FormLabel>
                <RadioGroup aria-label="position" name="position" value={character.type} row>
                    <FormControlLabel value="Figure" control={<Radio color="primary" />}
                        label="Figure" labelPlacement="top" />
                    <FormControlLabel value="Figure" control={<Radio color="primary" />}
                        label="Yarn" labelPlacement="top" />
                </RadioGroup>
            </FormControl>
            <br />
            <Link to="/success">
                <Button color="Primary" variant="contained">Update</Button>
            </Link>

        </div>
    )

}