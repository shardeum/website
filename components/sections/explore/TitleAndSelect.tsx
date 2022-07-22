import { Flex, Heading, LightMode, Select } from "@chakra-ui/react";
import { FC } from "react";

export type TitleAndSelectProps = {
  title: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
};

export const TitleAndSelect: FC<TitleAndSelectProps> = ({ title, value, options, onChange }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" my={2} py={2}>
      <Heading size="2xl" color="brand.black">
        {title}
      </Heading>

      {/* TODO: styling here according to docs */}
      <LightMode>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          color="brand.black"
          maxW="150px"
          h="60px"
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
    </Flex>
  );
};
