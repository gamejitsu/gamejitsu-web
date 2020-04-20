import { Box, Flex } from "rebass"
import { Formik, Form as FormikForm, FormikProps } from "formik"
import { ObjectSchema } from "yup"
import { Title } from "."
import { Button } from "gamejitsu/components"
import { Divider, Card, Elevation } from "@blueprintjs/core"
import styled from "styled-components"
import { lighten, darken } from "polished"

interface Props<T> {
  initialValues: T
  schema: ObjectSchema
  title: string
  onSubmit: (values: T) => Promise<void>
  children: (handlers: FormikProps<T>) => React.ReactNode
  buttonText: string
}

const Header = styled(Box)`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.lightBackgroundColor},
    ${(props) => darken(0.15, props.theme.lightBackgroundColor)}
  ); 
`

const FormCard = styled(Card)`
  padding: 0;
`

type FormComponent = <T>(props: Props<T>) =>
  React.ReactElement

const Form: FormComponent = ({ children, initialValues, title, schema, onSubmit, buttonText = "Submit" }) =>
  <FormCard elevation={Elevation.THREE}>
    <Flex alignItems="center">
      <Header px={3} py={25} flex={1}>
        <Title text={title} />
      </Header>
    </Flex>
    <Box>
      <Divider />
    </Box>
    <Box px={4} pt={4}>
      <Formik validationSchema={schema}
        initialValues={initialValues}
        onSubmit={async (
          values,
          { setSubmitting }
        ) => {
          setSubmitting(true)
          await onSubmit(values)
          setSubmitting(false)
        }}>
        {(formikHelpers) => (
          <FormikForm noValidate onSubmit={formikHelpers.handleSubmit}>
            {children(formikHelpers)}
          </FormikForm>
        )}
      </Formik>
    </Box>
    <Box>
      <Divider />
    </Box>
    <Box py={3} px={3}>
      <Flex justifyContent="flex-end">
        <Button text={buttonText} />
      </Flex>
    </Box>
  </FormCard>

export default Form
