import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Hide } from '@rebass/hide'

interface Props {
  isSticky: boolean
}

const Content = styled.header<Props>`
  border-bottom: ${props => (props.isSticky ? '0' : `1px dashed ${props.theme.primaryColor};`)};
`

const Picture = styled.img`
  border: 2px dashed ${props => props.theme.primaryColor};
`

const Title = styled.h1`
  font-size: 2rem;
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
`

const Header: FunctionComponent<Props> = ({ isSticky }) => (
  <Content isSticky={isSticky}>
    <Flex mb={isSticky ? 0 : 3}>
      {!isSticky && (
        <Hide xsmall small width={[2 / 12]} mr={4}>
          <Picture src="" width="100%" />
        </Hide>
      )}
      <Box flex="1 1 auto">
        <Flex>
          <Box flex="1 1 auto">
            <Box mb={2}>
              <Title>TITLE</Title>
            </Box>
            <Box mb={isSticky ? 0 : 3}>
              <Subtitle>SUBTITLE</Subtitle>
            </Box>
          </Box>
          <Box>
            <nav>
              <Flex alignItems="end" as="ul">
                <li>Test</li>
                <li>GitHub</li>
                <li>LinkedIn</li>
              </Flex>
            </nav>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Content>
)

export { Header }
