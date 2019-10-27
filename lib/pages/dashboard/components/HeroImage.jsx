import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeroImage = styled.img`
  width: 40px;
`

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
}

export default HeroImage
