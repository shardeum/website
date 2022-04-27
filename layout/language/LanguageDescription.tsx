import React from "react";
import { useTranslation } from "next-i18next";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const LanguageDescription = () => {
  const { t } = useTranslation("page-language");

  return (
    <Flex direction="column">
      <Heading
        as="h1"
        mt={{ base: "36px", sm: "80px", lg: "0" }}
        fontWeight={{ base: 400, sm: 500, lg: 700 }}
        fontSize={{ base: "3xl", sm: "6xl", lg: "7xl" }}
      >
        {t("page-language-h1")}
      </Heading>
      {[t("page-language-description-p1"), t("page-language-description-p2")].map(
        (paragraph, index) => (
          <Text
            key={index}
            fontWeight={{ base: 400 }}
            pr={{ md: "20", lg: "10" }}
            fontSize={{ base: "md", sm: "lg" }}
            mt={{ base: "4", sm: "8", lg: "10" }}
          >
            {paragraph}
          </Text>
        )
      )}
      <Button size="xl" mt="10" w={{ base: "44", sm: "96" }} fontSize="lg">
        <Text display={{ base: "block", sm: "none" }}>
          {t("page-language-contribute").slice(0, 10)}
        </Text>
        <Text display={{ base: "none", sm: "block" }}>{t("page-language-contribute")}</Text>
        <ArrowForwardIcon ml="3" boxSize="6" />
      </Button>
    </Flex>
  );
};

export default LanguageDescription;
