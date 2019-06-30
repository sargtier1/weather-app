import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <header>
      <StyledTitle>Weather App</StyledTitle>
    </header>
  )
}

const StyledTitle = styled.h1`
  border-radius: 30px;
  font-size: 2em;
  text-align: center;
  padding: 3rem;
  color: azure;
  background-color: #85c1e9;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
`


export default Header
