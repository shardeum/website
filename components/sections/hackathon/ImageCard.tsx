import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {
  imageLocation: string;
  name: string;
  linkedInURL: string;
  designation: string;
};

function ImageCard({ imageLocation, name, designation, linkedInURL }: Props) {
  return (
    <Box>
      <Image
        mb={6}
        src={imageLocation}
        alt="picture of judge"
        boxSize="13.875rem"
        objectFit="contain"
      />
      <Flex justifyContent="space-between" mb={3}>
        <Box>
          <Text color="brand.black" fontSize="1.25rem" fontWeight="bold">
            {name}
          </Text>
        </Box>
        <Link href={linkedInURL}>
          <Box w="2.635rem" h="2.635rem" padding="0.75rem" borderRadius="2px" background="#0A66C2">
            <Image src="/hackathon/section-5-linkedin.png" alt="linked in image" />
          </Box>
        </Link>
      </Flex>
      <Text color="brand.grey-60" fontSize="sm">
        {designation}
      </Text>
    </Box>
  );
}

export default ImageCard;
