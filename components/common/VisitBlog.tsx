import { Button, LightMode, VStack } from "@chakra-ui/react";
import Feature from "./Feature";

function VisitBlog() {
  return (
    <VStack py="6" px="8" bgColor="brand.white" w="full" alignItems="start" spacing="6">
      <Feature
        title="Read our blog"
        description={`Explore exciting and diverse blog posts about the Web 3.0 ecosystem contributed by community/content creators worldwide like you.`}
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
          Visit Blog
        </Button>
      </LightMode>
    </VStack>
  );
}

export default VisitBlog;
