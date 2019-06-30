import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import styled from 'styled-components'

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
        <TextField
          id='standard-password-input'
          label='city'
          name='city'
          className={classes.textField}
          type='text'
          margin='normal'
          style = {{width: "100%"}}
        />
        <br />
        <TextField
          id='standard-password-input'
          label='country'
          name='country'
          className={classes.textField}
          type='text'
          margin='normal'
          style = {{width: "100%"}}
        />
        <br />

        <StyledButton>Get Weather</StyledButton>
      </form>
    </div>
  )
}

const StyledForm = styled.form`
  width: 100%
`

const StyledButton = styled.button`
cursor: pointer;
display: inline-block;
min-height: 1em;
outline: 0;
border: none;
vertical-align: baseline;
background: #e0e1e2 none;
color: rgba(0, 0, 0, 0.6);
font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
margin: 0 0.25em 0 0;
padding: 0.78571429em 1.5em;
text-transform: none;
text-shadow: none;
font-weight: 700;
line-height: 1em;
font-style: normal;
text-align: center;
text-decoration: none;
border-radius: 0.28571429rem;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`



export default Form
