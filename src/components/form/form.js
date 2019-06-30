import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}))

const Form = props => {
  var classes = useStyles()
  return (
    <div id='form-container'>
      <form onSubmit={props.getWeather}>
        {/* <label>City</label>

        <input type='text' name='city' placeholder='Somewhere' />
        <br />
        <label>Country (Abbr.)</label>

        <input type='text' name='country' placeholder='US, UK, GR' />
        <br /> */}

        <TextField
          id='standard-password-input'
          label='city'
          name='city'
          className={classes.textField}
          type='text'
       
          margin='normal'
        />
        <br />
        <TextField
          id='standard-password-input'
          label='country'
          name='country'
          className={classes.textField}
          type='text'
      
          margin='normal'
        />
        <br />
        {/* <Button variant='contained' className={classes.button}>
          Default
        </Button> */}
              <button>Get Weather</button>

      </form>
    </div>
  )
}
export default Form
