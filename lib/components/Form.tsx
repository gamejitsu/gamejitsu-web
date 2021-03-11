import styled from "styled-components"
import { Box, Flex } from "rebass/styled-components"
import { Button } from "gamejitsu/components"
import { darken } from "polished"
import { Divider, Card, Elevation } from "@blueprintjs/core"
import { FormikProps, useFormik } from "formik"
import { ObjectSchema } from "yup"

interface Props<T> {
  initialValues: T
  schema: ObjectSchema
  title: string
  onSubmit: (values: T) => Promise<void>
  children: (handlers: FormikProps<T>) => React.ReactNode
  buttonText: string
  validate?: (values: T) => any
  isDisabled?: boolean
}

const FormTitle = styled.h1``

const Header = styled(Box)`
  border-radius: 3px;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.lightBackgroundColor},
    ${(props) => darken(0.15, props.theme.colors.lightBackgroundColor)}
  );
`

const FormCard = styled(Card)`
  padding: 0;
`

type FormComponent = <T>(props: Props<T>) => React.ReactElement

const Form: FormComponent = ({
  children,
  initialValues,
  title,
  schema,
  onSubmit,
  buttonText = "Submit",
  validate,
  isDisabled = false
}) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      await onSubmit(values)
      setSubmitting(false)
    }
  })

  return (
    <FormCard elevation={Elevation.THREE}>
      <Flex alignItems="center">
        <Header px={3} py={3} flex={1}>
          <FormTitle>{title}</FormTitle>
        </Header>
      </Flex>
      <Divider />
      <Box px={[3, 4]} py={4}>
        <form onSubmit={formik.handleSubmit}>{children(formik)}</form>
      </Box>
      <Box>
        <Divider />
      </Box>
      <Box py={3} px={3}>
        <Flex justifyContent="flex-end">
          <Button
            disabled={isDisabled}
            onClick={() => {
              formik.handleSubmit()
            }}
            text={buttonText}
          />
        </Flex>
      </Box>
    </FormCard>
  )
}

export default Form
