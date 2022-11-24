import { Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  titleSize?: any;
  descriptionSize?: any;
  titleColor?: string;
  descriptionColor?: string;
  titleFontWeight: "normal" | "semibold" | "medium" | "bold";
}

function createMarkup(c: any) {
  return { __html: c };
}

const Feature = ({
  title,
  description,
  titleSize,
  descriptionSize,
  titleColor,
  titleFontWeight,
  descriptionColor,
}: Props) => (
  <VStack spacing={4} alignItems="start">
    <Text as="h5" fontSize={titleSize} color={titleColor} fontWeight={titleFontWeight}>
      <div dangerouslySetInnerHTML={createMarkup(title)}></div>
    </Text>
    <Text as="p" color={descriptionColor} fontSize={descriptionSize}>
      <div dangerouslySetInnerHTML={createMarkup(description)}></div>
    </Text>
  </VStack>
);

Feature.defaultProps = {
  titleSize: { base: "3xl", lg: "4xl" },
  descriptionSize: {},
  titleFontWeight: "bold",
  titleColor: "brand.black",
  descriptionColor: "brand.grey-70",
};
export default Feature;
