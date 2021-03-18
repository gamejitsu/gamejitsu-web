import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  mailto: string
}

const MailTo = styled.a`
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryColor};
  }
`

const LinkMail: FunctionComponent<Props> = ({ children, mailto }) => (
  <MailTo href={`mailto:${mailto}`} target="_blank">
    {children}
  </MailTo>
)

export default LinkMail
