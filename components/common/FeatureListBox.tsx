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
const FeatureListBox = ({
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
      {title}
    </Text>
    <Text as="p" color={descriptionColor} fontSize={descriptionSize}>
      {description}
    </Text>
  </VStack>
);

FeatureListBox.defaultProps = {
  titleSize: { base: "3xl", lg: "4xl" },
  descriptionSize: {},
  titleFontWeight: "bold",
  titleColor: "brand.black",
  descriptionColor: "brand.grey-70",
};
export default FeatureListBox;
