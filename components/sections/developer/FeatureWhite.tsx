import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  titleSize?: any;
  descriptionSize?: any;
  type?: any;
  link?: string;
  titleColor?: string;
  descriptionColor?: string;
  titleFontWeight: "normal" | "semibold" | "medium" | "bold";
}

function createMarkup(c: any) {
  return { __html: c };
}

const FeatureWhite = ({
  title,
  description,
  titleSize,
  descriptionSize,
  titleColor,
  titleFontWeight,
  type,
  link,
  descriptionColor,
}: Props) => (
  <VStack spacing={4} alignItems="start">
    <Text
      as={typeof type !== "undefined" ? type : "h3"}
      fontSize={titleSize}
      color={titleColor}
      fontWeight={titleFontWeight}
      style={{ display: "flex" }}
    >
      {typeof type !== "undefined" ? (
        <h2 dangerouslySetInnerHTML={createMarkup(title)}></h2>
      ) : (
        <h3 dangerouslySetInnerHTML={createMarkup(title)}></h3>
      )}
      {
        <Box m="0" ml="2" mt="3">
          <img
            style={{ cursor: "pointer", width: "12px", height: "12px" }}
            // onClick={() => window.open(link)}
            src="/cta-arrow.png"
          />
        </Box>
      }
    </Text>
    <Text as="p" color={"#616161"} fontSize={descriptionSize}>
      <div dangerouslySetInnerHTML={createMarkup(description)}></div>
    </Text>
  </VStack>
);

FeatureWhite.defaultProps = {
  titleSize: { base: "3xl", lg: "4xl" },
  descriptionSize: {},
  titleFontWeight: "bold",
  titleColor: "brand.black",
  descriptionColor: "brand.grey-80",
};
export default FeatureWhite;
