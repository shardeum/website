/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Container, Heading, Image, Box } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Screenshot } from "models";
import React, { FC } from "react";
import Carousel from "@shm/components/common/Carousel";
// import { Carousel, LeftButton, RightButton } from "chakra-ui-carousel";
// filename: "website.png"
// height: 612
// id: "att0fbSInGUMthhWV"
// size: 274340
// thumbnails: {small: {…}, large: {…}, full: {…}}
// type: "image/png"
// url: "https://dl.airtable.com/.attachments/7c13329139820ccecb514da6d5f36631/c81d293e/website.png?ts=1660761393&userId=usrlQguWTgqfkxlPZ&cs=b25464f1098c4d00"
// width: 1152

type ProductScreenshotProps = {
  screenShots: Screenshot[];
};

export const ProductScreenshots: FC<ProductScreenshotProps> = ({
  screenShots,
}: ProductScreenshotProps) => {
  useEffect(() => {
    // console.log(screenShots.length)
  });
  return (
    <Container
      mx="auto"
      maxW="container.xl"
      px={{ base: 8, xl: 0 }}
      pt={{ base: 4, md: 16 }}
      pb={{ base: 20, md: 16 }}
    >
      <Heading size="2xl" mb={8} color="brand.black">
        Product Screenshots
      </Heading>
      <Carousel arrowHide={screenShots.length > 1 ? false : true}>
        {screenShots?.map((item, index) => (
          <Box w="100%" h={"auto"} key={index}>
            <Image
              m={"auto"}
              // objectFit='cover'
              style={{ maxHeight: "500px" }}
              key={item.id}
              src={item.thumbnails.full.url}
              alt="screenshots"
              width="auto"
              height="auto"
            />
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};
