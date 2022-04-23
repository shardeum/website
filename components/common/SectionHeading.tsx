import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  color: string;
  children: React.ReactNode;
};

function SectionHeading({ color, children }: Props) {
  return (
    <Heading color={color} mb={{ base: "3", lg: "9" }} size="2xl">
      {children}
    </Heading>
  );
}

export default SectionHeading;
