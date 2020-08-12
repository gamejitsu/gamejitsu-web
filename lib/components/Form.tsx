import styled from "styled-components"

import { Box, Flex } from "rebass"
import { Button } from "gamejitsu/components"
import { darken } from "polished"
import { Divider, Card, Elevation } from "@blueprintjs/core"
import { FormikProps, useFormik } from "formik"
import { ObjectSchema } from "yup"
import { Title } from "."

interface Props<T> {
  initialValues: T
  schema: ObjectSchema
  title: string
  onSubmit: (values: T) => Promise<void>
  children: (handlers: FormikProps<T>) => React.ReactNode
  buttonText: string
  validate?: (values: T) => any
}

const Header = styled(Box)`
  border-radius: 3px;

  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.lightBackgroundColor},
    ${(props) => darken(0.15, props.theme.lightBackgroundColor)}
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
  validate
}) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      console.log("on submit called")
      setSubmitting(true)
      await onSubmit(values)
      setSubmitting(false)
    }
  })

  return (
    <FormCard elevation={Elevation.THREE}>
      <Flex alignItems="center">
        <Header px={3} py={25} flex={1}>
          <Title text={title} />
        </Header>
      </Flex>
      <Divider />
      <Box px={4} pt={4}>
        <form onSubmit={formik.handleSubmit}>{children(formik)}</form>
      </Box>
      <Box>
        <Divider />
      </Box>
      <Box py={3} px={3}>
        <Flex justifyContent="flex-end">
          <Button
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
