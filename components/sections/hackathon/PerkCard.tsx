import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
  imageLocation: string;
};

function PerkCard({ text, imageLocation }: Props) {
  return (
    <Box
      width="19.125rem"
      height="14.875rem"
      background="linear-gradient(165.94deg, rgba(255, 255, 255, 0.315) -1.43%, rgba(255, 255, 255, 0) 104.31%)"
      padding="0.75rem"
      sx={{
        border: "1px solid #7A7A7A",
        borderRadius: "0.25rem",
      }}
    >
      <Box backgroundColor="#121212" px="1.25rem" borderRadius="0.25rem" py={6} h="100%" w="100%">
        <Image mb="2" src={imageLocation} alt="perks-illustration" />
        <Text fontSize="large">{text}</Text>
      </Box>
    </Box>
  );
}

export default PerkCard;
