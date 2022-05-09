import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  LightMode,
  VStack,
} from "@chakra-ui/react";
import useNewsLetterForm from "../../hooks/useNewsletter";
import Feature from "./Feature";
import { IconRightArrow } from "./Icons";

const JoinNewsletter = () => {
  const {
    form: { error, status, success, value },
    handleOnChange,
    handleSubmit,
  } = useNewsLetterForm();

  return (
    <VStack py="6" px="8" bgColor="brand.white" w="full" alignItems="start" spacing="6">
      <Feature
        title="Join newsletter"
        description={`Sign up for the weekly newsletter and stay updated on major announcements and developments about Shardeum.`}
      />
      <FormControl isInvalid={!!error}>
        <LightMode>
          <InputGroup>
            <Input
              placeholder="Your Email"
              type="email"
              name="email"
              onChange={handleOnChange}
              value={value}
            />
            <InputRightAddon
              onClick={() => handleSubmit(["newsletterBottom"])}
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
        {error ? (
          <FormHelperText fontWeight="medium" color="red">
            {error}
          </FormHelperText>
        ) : success ? (
          <FormHelperText fontWeight="medium" color="green">
            Subscribed! Stay tuned for SHM updates in your inbox ;)
          </FormHelperText>
        ) : null}
      </FormControl>
    </VStack>
  );
};

export default JoinNewsletter;
