import { AspectRatio, Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { COMMUNITY_URL } from "constants/links";
import { useTranslation, Trans } from "next-i18next";

function ReadWhitepaper() {
  const { t: commonTranslation } = useTranslation("common");

  return (
    <Box position="relative" overflow="hidden" bg="brand.black">
      <Box position="absolute" zIndex={1} display={{ base: "none", xl: "block" }}>
        <Image
          src="/white-paper-bg.png"
          width="700px"
          objectFit="cover"
          alt="white paper gradient background"
          height="800px"
        />
      </Box>
      <Box
        zIndex={2}
        position="absolute"
        top="30%"
        left="6%"
        display={{ base: "none", xl: "block" }}
      >
        <AspectRatio ratio={212 / 215} w="290px" maxW="290px">
          <Image
            src="/slogan-image.png"
            objectFit="contain"
            alt="animating Shardeum Slogan"
            layout="fill"
            className="rotate-360"
          />
        </AspectRatio>
      </Box>
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "20", md: "32", lg: "40" }}
        zIndex={2}
        position="relative"
      >
        <Box>
          <VStack spacing="32">
            <VStack
              maxW={{ base: "full", lg: "2xl" }}
              alignItems="start"
              spacing="12"
              marginLeft={{ xl: "auto" }}
            >
              <Text
                fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
                fontWeight="medium"
                color="brand.white"
              >
                <Trans i18nKey="shm-desc" t={commonTranslation}>
                  The first
                  <Text as="span" color="brand.orange">
                    linearly scalable
                  </Text>
                  smart contract platform that
                  <Text as="span" color="brand.orange">
                    increases transactions per second (TPS)
                  </Text>
                  by adding more nodes
                </Trans>
              </Text>
              <Button
                variant="secondary"
                as="a"
                href={COMMUNITY_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                {commonTranslation("join-discord-cta")}
              </Button>
            </VStack>
            {/* When the video is done it will be put here */}
            {/* <Box
                zIndex={4}
                // left="50%"
                // transform={`translateX(-50%)`}
                width="800px"
                height="278px"
                bg="brand.grey-90"
                mx="auto"
                bottom={0}
                position="relative"
                marginBottom="-129px"
              ></Box> */}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default ReadWhitepaper;
