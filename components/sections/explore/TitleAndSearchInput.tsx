import { FC } from "react";
import {
  Flex,
  FormControl,
  // FormHelperText,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  LightMode,
  // Text,
  VStack,
} from "@chakra-ui/react";
import { IconSearch } from "@shm/Icons";

export type TitleAndSearchInputProps = {
  value: string;
  setValue: (value: string) => void;
};

export const TitleAndSearchInput: FC<TitleAndSearchInputProps> = ({ value = "", setValue }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Flex
      direction={{ lg: "row", base: "column" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size="2xl" color="brand.black">
        Explore Shardeum Projects
      </Heading>
      <VStack
        py="6"
        bgColor="brand.white"
        w={{ lg: "27.875rem", md: "27.875rem", base: "100%" }}
        alignItems="start"
      >
        <FormControl>
          <LightMode>
            <InputGroup>
              <Input
                placeholder="Search"
                type="email"
                name="email"
                onChange={handleOnChange}
                value={value}
              />
              <InputRightAddon
                children={
                  <LightMode>
                    <IconButton
                      variant="secondary"
                      p="5"
                      icon={<IconSearch />}
                      h="full"
                      px="4"
                      aria-label="Submit Button"
                    />
                  </LightMode>
                }
              />
            </InputGroup>
          </LightMode>
        </FormControl>
      </VStack>
    </Flex>
  );
};

export default TitleAndSearchInput;
