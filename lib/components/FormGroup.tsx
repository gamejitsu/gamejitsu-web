import styled from "styled-components"

import { Box } from "rebass"
import { FormGroup as BPFormGroup, Classes } from "@blueprintjs/core"
import { FunctionComponent } from "react"

interface Props {
  label: string
  labelFor?: string
  labelInfo?: string
}

const Label = styled.div`
  width: 150px;
  text-align: right;
  margin-right: 35px;
  color: ${(props) => props.theme.linkColor};
`

const FormGroup: FunctionComponent<Props> = ({ children, label, labelInfo, labelFor }) =>
  <Box mb={4}>
    <BPFormGroup inline label={<Label>
      {label}
      <Box>
      <span className={Classes.TEXT_MUTED}>
        {labelInfo}
      </span>
      </Box>
    </Label>} labelFor={labelFor}>
      {children}
    </BPFormGroup>
  </Box>

export default FormGroup
