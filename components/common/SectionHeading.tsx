import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  color: string;
  children: React.ReactNode;
};

function SectionHeading({ color, children }: Props) {
  return (
    <Heading color={color} fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} as="h3">
      {children}
    </Heading>
  );
}

export default SectionHeading;
