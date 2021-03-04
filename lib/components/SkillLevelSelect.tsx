import { Field } from "formik"
import { Flex, Box } from "rebass"
import { FunctionComponent } from "react"

const SkillLevelSelect: FunctionComponent = () => (
  <Flex flexDirection="column" alignItems="center">
    <Box m={2} p={2} bg="primary" width={[1, 1, 1]}>
      <Field type="radio" name="skill" value="hero" />
      <label htmlFor="skill">Hero</label>
    </Box>
    <Box m={2} p={2} width={[1, 1, 1]}>
      <Field type="radio" name="skill" value="pro" />
      <label htmlFor="skill">Pro</label>
    </Box>
    <Box m={2} p={2} width={[1, 1, 1]}>
      <Field type="radio" name="skill" value="very_high" />
      <label htmlFor="skill">Very High</label>
    </Box>
  </Flex>
)

export default SkillLevelSelect
