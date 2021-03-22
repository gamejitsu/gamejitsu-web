import React, { FunctionComponent, useEffect } from "react"
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/navigation/navigation.scss"
import "./carousel.scss"
import styled from "styled-components"
import { Flex } from "rebass/styled-components"

interface CarouselProps {
  carouselId: string
  children?: React.ReactElement[]
}

SwiperCore.use([Navigation, Pagination, Autoplay])
const CarouselWrapper = styled(Flex)`
  width: 100%;
`
const Carousel: FunctionComponent<CarouselProps> = ({ children, carouselId }) => {
  const slides: React.ReactElement[] = []
  let swiperElement: any
  let swiperInstance: SwiperCore
  useEffect(() => {
    // After you initialize Swiper it is possible to access to Swiper's instance on its HTMLElement.
    swiperElement = document.querySelector(`#main-carousel-${carouselId}`)
    if (swiperElement) {
      swiperInstance = swiperElement.swiper
      // Now you can use all slider methods like: swiperInstance.slideNext()
    }
  }, [])

  if (children != undefined) {
    children.map((child, index) => {
      slides.push(
        <SwiperSlide key={`carousel-slide-${index}`} id={`carousel-slide-${index}`}>
          {child}
        </SwiperSlide>
      )
    })
  }

  return (
    <CarouselWrapper>
      <Swiper
        id={`main-carousel-${carouselId}`}
        navigation
        pagination
        loop={true}
        speed={800}
        autoplay={{ delay: 2500 }}
      >
        {slides.length > 0 ? slides : null}
      </Swiper>
    </CarouselWrapper>
  )
}

export default Carousel
