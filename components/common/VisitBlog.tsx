import { Button, LightMode, VStack } from "@chakra-ui/react";
import Feature from "./Feature";

function VisitBlog() {
  return (
    <VStack py="6" px="8" bgColor="brand.white" w="full" alignItems="start" spacing="6">
      <Feature
        title="Read Our Blog"
        description={`Explore interesting and diverse blog posts about Web 3.0 ecosystem contributed by community/content creators across the world like you`}
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
