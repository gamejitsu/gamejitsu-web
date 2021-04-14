import React, { FunctionComponent, useEffect } from "react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"

interface GuideCarouselProps {
  carouselId: string
  bucketUrl: string
  picturesUrl: string[]
  pictureCaption?: string[]
}

SwiperCore.use([Navigation, Pagination])
const GuideCarouselWrapper = styled(Flex)`
  width: 100%;
  border: 1px solid #313131;
  background-color: #181818;
`
const GuideCarousel: FunctionComponent<GuideCarouselProps> = ({
  carouselId,
  picturesUrl,
  bucketUrl,
  pictureCaption
}) => {
  const slides: React.ReactElement[] = []
  let swiperElement: any
  let swiperInstance: SwiperCore
  useEffect(() => {
    // After you initialize Swiper it is possible to access to Swiper's instance on its HTMLElement.
    swiperElement = document.querySelector(`#guide-carousel-${carouselId}`)
    if (swiperElement) {
      swiperInstance = swiperElement.swiper
      // Now you can use all slider methods like: swiperInstance.slideNext()
    }
  }, [])

  picturesUrl.forEach((imgName, index) => {
    slides.push(
      <SwiperSlide key={`carousel-slide-${index}`} id={`carousel-${carouselId}-slide-${index}`}>
        <Box pb={[4]}>
          <Flex width={"100%"} justifyContent="center">
            <Box>
              <img
                src={`${bucketUrl}/${imgName}`}
                style={{ maxWidth: "800px", width: "100%", height: "auto" }}
              />
            </Box>
          </Flex>
          <Flex
            width={"100%"}
            pt={2}
            style={{ fontSize: "0.85rem", maxWidth: "800px", lineHeight: "1.25", margin: "auto" }}
            justifyContent={"center"}
          >
            {pictureCaption && pictureCaption[index] ? (
              <Box pb={[2]}>{pictureCaption[index]}</Box>
            ) : null}
          </Flex>
        </Box>
      </SwiperSlide>
    )
  })

  return (
    <GuideCarouselWrapper mb={3} pt={[2, 3, 4]} justifyContent={"center"}>
      <Swiper
        id={`guide-carousel-${carouselId}`}
        navigation={picturesUrl.length > 1}
        pagination={picturesUrl.length > 1}
        allowTouchMove={picturesUrl.length > 1}
      >
        {slides}
      </Swiper>
    </GuideCarouselWrapper>
  )
}

export default GuideCarousel
