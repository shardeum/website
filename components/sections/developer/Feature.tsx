import { Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  titleSize?: any;
  descriptionSize?: any;
  type?: any;
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
  type,
  descriptionColor,
}: Props) => (
  <VStack spacing={4} alignItems="start">
    <Text
      as={typeof type !== "undefined" ? type : "h3"}
      fontSize={titleSize}
      color={"#FFFFFF"}
      fontWeight={titleFontWeight}
    >
      {typeof type !== "undefined" ? (
        <h2 dangerouslySetInnerHTML={createMarkup(title)}></h2>
      ) : (
        <h3 dangerouslySetInnerHTML={createMarkup(title)}></h3>
      )}
    </Text>
    <Text as="p" color={"#BDBDBD"} fontSize={descriptionSize}>
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
