import styled from "styled-components"

import { Box } from "rebass"
import { FunctionComponent } from "react"

interface Props {
    text: string
}

//font-family: "Japanese 3017";
const Content = styled.h1`
  font-family: "Exo 2";
  font-weight: bold;
  font-size: 35px;
  color: ${(props) => props.theme.primaryColor}
`

const Title: FunctionComponent<Props> = ({ text }) => {
    return (
        <Box px={3} py={3}>
            <Content>
                {text}
            </Content>
        </Box>
    )
}

export default Title
