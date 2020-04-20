import { Box } from "rebass"
import { Formik,Form as FormikForm, FormikProps } from "formik"
import { ObjectSchema } from "yup"
import { Title } from "."

interface Props<T> {
  initialValues: T
  schema: ObjectSchema
  title: string
  onSubmit: (values: T) => Promise<void>
  children: (handlers: FormikProps<T>) => React.ReactNode
}

type FormComponent = <T>(props: Props<T>) =>
  React.ReactElement

const Form: FormComponent = ({ children, initialValues, title, schema, onSubmit }) =>
  <Box px={4} py={2}>
    <Box mb="40px">
      <Title text={title} />
    </Box>
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
      {( formikHelpers ) => (
        <FormikForm noValidate onSubmit={formikHelpers.handleSubmit}>
          {children(formikHelpers)}
        </FormikForm>
      )}
    </Formik>
  </Box>

export default Form
