import { Container, Flex, HStack, SimpleGrid, Text, VStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import {
  IconDiscord,
  IconExternal,
  IconGithub,
  IconSeeMore,
  IconTelegram,
  IconTwitter,
} from "@shm/Icons";
import {
  DISCORD_URL,
  GITHUB_URL,
  NEWSLETTER_URL,
  TELEGRAM_URL,
  TWITTER_URL,
  SHARDEUMPEPE,
} from "../../constants/links";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const socialLinks = [
  { Icon: IconDiscord, title: "Discord", href: DISCORD_URL, target: "_blank" },
  { Icon: IconTwitter, title: "Twitter", href: TWITTER_URL, target: "_blank" },
  { Icon: IconGithub, title: "Github", href: GITHUB_URL, target: "_blank" },
  { Icon: IconTelegram, title: "Telegram", href: TELEGRAM_URL, target: "_blank" },
  { Icon: IconSeeMore, title: "Newsletter", href: NEWSLETTER_URL, target: "_self" },
];

const ShardeumPepe = () => {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);

  const download = () => {
    var element = document.createElement("a");
    var file = new Blob([SHARDEUMPEPE], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "image.png";
    element.click();
  };

  return (
    <Flex style={{ backgroundColor: "#000000" }} as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28" px={{ base: 6, xl: 0 }}>
        <SimpleGrid columns={[1]} gap={["12", "12"]}>
          <VStack spacing="0" pt={0} alignItems="center">
            <Image height={300} width={300} src={SHARDEUMPEPE} alt="Nischal Image" />
          </VStack>
          <VStack spacing="0" pt={0} alignItems="center">
            <Button
              mt={5}
              as="a"
              download={SHARDEUMPEPE}
              variant="primary"
              size="lg"
              rel="noopener noreferrer"
              href={SHARDEUMPEPE}
            >
              {pageTranslation("download")}
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default ShardeumPepe;
