import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  date: string;
  description: string;
};

function TimelineCard({ date, description }: Props) {
  return (
    <Box
      h="9.6875rem"
      w={["18.5rem", "20.375rem"]}
      p="3px"
      background="linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
    >
      <Box p={[3, 6]} background="brand.grey-90" w="100%" h="100%">
        <Text color="brand.white" fontSize="2xl" fontWeight="bold">
          {date}
        </Text>
        <Divider
          my="0.75rem"
          height="1px"
          background="linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
        />
        <Text color="brand.white" mb="0.75rem" fontWeight="normal">
          {description}
        </Text>
      </Box>
    </Box>
  );
}

export default TimelineCard;
