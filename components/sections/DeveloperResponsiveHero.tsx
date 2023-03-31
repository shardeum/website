import { Container, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react";
type HeroProps = {
  heading: string;
  description?: React.ReactNode;
  cta?: React.ReactNode;
  src?: string;
  respHeroImg?: React.ReactNode;
  bg?: string;
  titleColor?: string;
  descColor?: string;
  breadcrumb?: any;
  internalPage?: any;
};

const DeveloperResponsiveHero = ({
  src,
  cta,
  heading,
  description,
  titleColor,
  descColor,
  respHeroImg,
  breadcrumb,
  internalPage,
}: HeroProps) => {
  const router = useRouter();
  const renderIcon = (src: string) => {
    return <Image objectFit="contain" src={src} width="490px" />;
  };

  return (
    <>
      <Navbar mode={router.pathname === "/explore/[id]" ? "light" : "dark"} />
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
                as="h1"
                textAlign="left"
                lineHeight="normal"
                fontSize={{ base: "4xl", sm: "4xl", lg: "6xl" }}
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
    </>
  );
};
export default DeveloperResponsiveHero;
