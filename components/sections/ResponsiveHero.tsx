import { Container, Flex, Image, Text } from "@chakra-ui/react";

type HeroProps = {
  heading: string;
  description?: string;
  cta?: React.ReactNode;
  src: string;
  bg?: string;
  titleColor?: string;
  descColor?: string;
};

const ResponsiveHero = ({ src, cta, heading, description, titleColor, descColor }: HeroProps) => {
  const renderIcon = (src: string) => {
    return <Image objectFit="contain" src={src} width="490px" />;
  };

  return (
    <Flex bg="brand.black" justifyContent="center" alignItems="center">
      <Container mx="auto" maxW="container.xl" p={8} px={{ base: 8, xl: 0 }} py={"5%"}>
        <Flex
          direction={{ sm: "column-reverse", base: "column-reverse", md: "row", lg: "row" }}
          gap={{ base: "none", lg: "10" }}
        >
          <Flex direction="column">
            <Text
              as="h2"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
              pb={4}
              fontWeight="bold"
              width="100%"
              color={titleColor || "brand.white"}
            >
              {heading}
            </Text>
            <Text
              fontSize={{ base: "md", sm: "lg", lg: "xl" }}
              textAlign="left"
              lineHeight={{ base: "7", md: "8" }}
              color={descColor || "brand.grey-20"}
              pr={{ xl: 24 }}
            >
              {description}
            </Text>
            {cta}
          </Flex>
          {renderIcon(src)}
        </Flex>
      </Container>
    </Flex>
  );
};
export default ResponsiveHero;
