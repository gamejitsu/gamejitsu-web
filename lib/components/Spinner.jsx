import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 40px;
  height: 8px;
  display: flex;
  justify-content: space-around;

  display: inline-flex;
  width: 30px;
  vertical-align: middle;
  margin-left: 5px;
`

const Dot = styled.div`
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background-color: red;
  animation: pulse 0.85s infinite ease-in-out;
  animation-delay: ${props => props.delay || '0'}s;

  @keyframes pulse {
    0%,
    100%,
    80% {
      opacity: 0;
      transform: scale(0.8);
    }

    40% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Spinner = () => (
  <Container>
    <Dot delay={'-0.2'} />
    <Dot delay={'-0.1'} />
    <Dot />
  </Container>
)

export default Spinner
