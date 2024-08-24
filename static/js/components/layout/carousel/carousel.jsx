import React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "./style.css"

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Arrow({ left }) {
  return (
    <Image
      alt={"Arrow"}
      src={"/assets/img/icons/arrow.png"}
      transform={`rotate(${left ? "180deg" : "0"})`}
    ></Image>
  );
}

export default function Carousel({ children }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const side = useBreakpointValue({ base: "0%", md: "0px" });

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        bg={"transparent"}
        borderRadius="full"
        position="absolute"
        left={side}
        top={`calc(${top} / 1.5)`}
        zIndex={2}
        _hover={{
          background: "transparent",
        }}
        onClick={() => slider?.slickPrev()}
      >
        <Arrow left />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg={"transparent"}
        borderRadius="full"
        position="absolute"
        right={side}
        top={`calc(${top} / 1.5)`}
        zIndex={2}
        _hover={{
          background: "transparent",
        }}
        onClick={() => slider?.slickNext()}
      >
        <Arrow />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {children}
      </Slider>
    </Box>
  );
}