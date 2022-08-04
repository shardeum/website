import { Container, Heading, Image } from "@chakra-ui/react";
import React, { FC } from "react";

type ProductScreenshotProps = {
  screenShots?: string[] | [];
};

export const ProductScreenshots: FC<ProductScreenshotProps> = ({ screenShots }) => {
  return (
    <Container
      mx="auto"
      maxW="container.xl"
      px={{ base: 8, xl: 0 }}
      pt={{ base: 4, md: 16 }}
      pb={{ base: 20, md: 16 }}
    >
      <Heading size="2xl" color="brand.black">
        Product Screenshots
      </Heading>
      {screenShots?.map((item: string) => (
        <Image key={item} src={item} alt="screenshots" width="100%" />
      ))}
    </Container>
  );
};
