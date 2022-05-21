import { Button, LightMode, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Feature from "./Feature";

function VisitBlog() {
  const { t: pageTranslation } = useTranslation(["common"]);

  return (
    <VStack py="6" px="8" bgColor="brand.white" w="full" alignItems="start" spacing="6">
      <Feature
        title={pageTranslation("read-blog-title")}
        description={pageTranslation("read-blog-desc")}
      />
      <LightMode>
        <Button
          variant="secondary"
          h="full"
          as="a"
          href="https://shardeum.org/blog"
          rel="noopener noreferrer"
          target="_blank"
        >
          {pageTranslation("visit-blog-cta")}
        </Button>
      </LightMode>
    </VStack>
  );
}

export default VisitBlog;
