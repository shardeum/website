/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ children, arrowHide }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide

  return (
    <Box position={"relative"} height={"full"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      {/* {children} */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {arrowHide === true ? null : (
        <>
          <IconButton
            style={{ color: "black", backgroundColor: "transparent" }}
            aria-label="left-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            style={{ color: "black", backgroundColor: "transparent" }}
            aria-label="right-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <ArrowForwardIcon />
          </IconButton>
        </>
      )}
      {/* Slider */}
      <Container
        mx="auto"
        maxW="container.lg"
        px={{ base: 8, xl: 0 }}
        pt={{ base: 4, md: 16 }}
        pb={{ base: 20, md: 16 }}
      >
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {children}
          {/* {cards.map((url, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))} */}
        </Slider>
      </Container>
    </Box>
  );
}
