import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
};

function PerkPoint({ text }: Props) {
  return (
    <HStack paddingBottom={4} columnGap={2} alignItems="center">
      <Image src="/hackathon/section-2-tick.png" alt="tick" />
      <Text fontSize="xl">{text}</Text>
    </HStack>
  );
}

export default PerkPoint;
