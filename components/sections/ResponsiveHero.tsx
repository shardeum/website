import { Container, Flex, Image, Text } from "@chakra-ui/react";

type HeroProps = {
  heading: string;
  description?: React.ReactNode;
  cta?: React.ReactNode;
  src?: string;
  respHeroImg?: React.ReactNode;
  bg?: string;
  titleColor?: string;
  descColor?: string;
};

const ResponsiveHero = ({
  src,
  cta,
  heading,
  description,
  titleColor,
  descColor,
  respHeroImg,
}: HeroProps) => {
  const renderIcon = (src: string) => {
    return <Image objectFit="contain" src={src} width="490px" />;
  };

  return (
    <Flex bg="brand.black" justifyContent="center" alignItems="center">
      <Container
        mx="auto"
        maxW="container.xl"
        px={{ base: 8, xl: 0 }}
        pt={{ base: 4, md: 16 }}
        pb={{ base: 20, md: 16 }}
      >
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
              <br />
              {cta}
            </Text>
          </Flex>
          {src && renderIcon(src)}
          {respHeroImg}
        </Flex>
      </Container>
    </Flex>
  );
};
export default ResponsiveHero;
