import {
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  LightMode,
  Text,
  VStack,
} from "@chakra-ui/react";
import Feature from "@shm/components/common/Feature";
import { IconRightArrow } from "@shm/Icons";
import useNewsLetterForm from "hooks/useNewsletter";
import React from "react";

function TitleAndSearchInput() {
  const {
    form: { error, status, success, value },
    handleOnChange,
    handleSubmit,
  } = useNewsLetterForm();
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading size="2xl" color="brand.black">
        Explore Shardeum Projects
      </Heading>
      <VStack py="6" bgColor="brand.white" w="466px" alignItems="start">
        <FormControl isInvalid={!!error}>
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
                onClick={() => handleSubmit(["newsletterHero"])}
                children={
                  <LightMode>
                    <IconButton
                      variant="secondary"
                      p="5"
                      icon={<IconRightArrow />}
                      h="full"
                      px="4"
                      aria-label="Submit Button"
                      isLoading={status === "loading"}
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
}

export default TitleAndSearchInput;
