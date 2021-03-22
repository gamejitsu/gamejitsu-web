import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import { Container, MainTitle, ParagraphText, Spacer } from "../../components/UtilsComponents"

const SampleGuide: AuthenticatedComponent = () => {
  return (
    <Container>
      <Box px={[4]} pt={[4]}>
        <Box>
          <MainTitle>Sample guide</MainTitle>
        </Box>
        <ParagraphText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque elementum
          libero sed scelerisque. In hac habitasse platea dictumst. Nam aliquet bibendum nulla, et
          viverra odio porttitor eget. Sed purus orci, malesuada non lobortis at, iaculis vitae est.
          Phasellus sodales finibus felis, id mollis tortor porta iaculis. Ut vitae nibh in tellus
          cursus faucibus. Etiam imperdiet dui ipsum, at rutrum nisl varius sit amet.
        </ParagraphText>
        <ParagraphText>
          <br />
          In vitae orci metus. Nulla nec felis elit. Aliquam erat volutpat. Donec lacinia tellus
          tortor, sit amet sagittis libero imperdiet in. Morbi ac lectus dapibus, sodales eros
          vitae, feugiat dolor. Nam ex neque, iaculis non ullamcorper ac, aliquet vitae felis.
          Integer condimentum dui et hendrerit auctor. Phasellus magna nisl, fringilla vel tristique
          sit amet, pellentesque ac eros. Vestibulum nec pharetra lectus, ut tristique magna.
          Pellentesque sit amet dignissim elit, sit amet mollis tellus. Duis eget nulla iaculis,
          accumsan ipsum quis, pharetra augue. Etiam placerat maximus pretium. Nam tempus fermentum
          mi sed ultricies. Curabitur in lorem auctor, luctus ex in, venenatis sapien. Etiam
          vestibulum tincidunt nulla at aliquet.
        </ParagraphText>
      </Box>
      <Spacer padding={60} />
      <Footer />
    </Container>
  )
}

SampleGuide.skipAuthentication = true

export { SampleGuide }
