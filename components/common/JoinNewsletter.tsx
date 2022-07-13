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
import { useTranslation } from "next-i18next";
import useNewsLetterForm from "../../hooks/useNewsletter";
import Feature from "./Feature";
import { IconRightArrow } from "./Icons";

const JoinNewsletter = () => {
  const {
    form: { error, status, success, value },
    handleOnChange,
    handleSubmit,
  } = useNewsLetterForm();
  const { t: pageTranslation } = useTranslation(["common"]);

  return (
    <VStack py="6" px="8" bgColor="brand.white" w="full" alignItems="start" spacing="6">
      <Feature
        title={pageTranslation("join-newsletter-title")}
        description={pageTranslation("join-newsletter-desc")}
      />
      <FormControl isInvalid={!!error}>
        <LightMode>
          <InputGroup>
            <Input
              placeholder={pageTranslation("your-email")}
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
