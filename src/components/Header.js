import React from "react";
import styled from 'styled-components';

const Heading = styled.div `
  font-weight: bold;
  background-color: lightgray;
`

const H_one = styled.h1 `
  margin: 0;
  padding: 0;
  text-align: center;
`


function Header(){
    return(
    <Heading>
        <H_one>Nasa Photo of the Day</H_one>
    </Heading>
    );
}

export default Header;
