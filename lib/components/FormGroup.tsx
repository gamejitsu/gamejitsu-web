import styled from "styled-components"
import { Box } from "rebass/styled-components"
import { FormGroup as BPFormGroup, Classes } from "@blueprintjs/core"
import { FunctionComponent } from "react"

interface Props {
  label: string
  labelFor?: string
  labelInfo?: string
  helperText?: string
}

const Label = styled.div`
  color: ${(props) => props.theme.colors.linkColor};
`

const FormGroup: FunctionComponent<Props> = ({
  children,
  label,
  labelInfo,
  labelFor,
  helperText
}) => (
  <BPFormGroup
    className={"w100"}
    helperText={helperText}
    label={
      <Label>
        {label}
        <Box>
          <span className={Classes.TEXT_MUTED}>{labelInfo}</span>
        </Box>
      </Label>
    }
    labelFor={labelFor}
  >
    {children}
  </BPFormGroup>
)

export default FormGroup
