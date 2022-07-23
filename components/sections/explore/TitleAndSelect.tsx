import { Flex, Heading, HStack, LightMode, Select } from "@chakra-ui/react";
import { FC } from "react";

export type TitleAndSelectProps = {
  title: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
};

export const TitleAndSelect: FC<TitleAndSelectProps> = ({ title, value, options, onChange }) => {
  return (
    <HStack mb="8" justify={{ base: "space-between" }}>
      <Heading size="2xl" color="brand.black">
        {title}
      </Heading>

      {/* TODO: styling here according to docs */}
      <LightMode>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          color="brand.black"
          maxW="9.375rem"
          h="3.75rem"
          fontWeight="medium"
          borderWidth="1px"
          borderColor="brand.black"
          borderStyle="solid"
          borderRadius="0"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </LightMode>
    </HStack>
  );
};
