import { Field } from "formik"
import { Flex, Box } from "rebass"
import { FunctionComponent } from "react"

const SelectSkillLevel: FunctionComponent = () => (
  <Flex flexDirection="column" alignItems="center">
    <Box m={2} p={2} bg="primary" width={[1, 1, 1]}>
      <Field type="radio" name="skill" value="pro" />
      <label htmlFor="skill">Pro</label>
    </Box>
    <Box m={2} p={2} width={[1, 1, 1]}>
      <Field type="radio" name="skill" value="very_high" />
      <label htmlFor="skill">Very High</label>
    </Box>
    <Box m={2} p={2} width={[1, 1, 1]}>
      <Field type="radio" name="skill" value="high" />
      <label htmlFor="skill">High</label>
    </Box>
    <Box m={2} p={2} width={[1, 1, 1]}>
      <Field type="radio" name="skill" value="medium" />
      <label htmlFor="skill">Medium</label>
    </Box>
  </Flex>
)

export default SelectSkillLevel
