import { Box, Button, FormControl, FormHelperText, Input, Stack } from "@chakra-ui/react";
import { useNewsletter } from "@shm/hooks";
import { IconRightArrow } from "@shm/Icons";
import { useTranslation } from "next-i18next";
import { validSources } from "../../types";

type Props = {
  type: validSources;
};

function NewsletterInput({ type }: Props) {
  const {
    handleSubmit,
    form: { error, status, value, success },
    handleOnChange,
  } = useNewsletter();
  const { t: commonTranslation } = useTranslation("common");

  return (
    <FormControl isInvalid={!!error} w="full">
      <Stack w="full" flexDirection={{ base: "column", md: "row" }} alignItems="center" spacing="0">
        <Box w="full" h="full" mb={{ base: "4", md: "0" }} mr={{ md: "4" }}>
          <Input
            placeholder={commonTranslation("your-email")}
            w="full"
            h="56px"
            onChange={handleOnChange}
            type="email"
            fontSize={{ base: "sm", md: "base" }}
            value={value}
          />
        </Box>
        <Button
          variant="primary"
          px="10"
          h="56px"
          margin="0"
          border="0"
          fontSize="base"
          w={{ base: "full", md: "auto" }}
          borderColor="transparent"
          isLoading={status === "loading"}
          onClick={() => handleSubmit([type])}
          rightIcon={<IconRightArrow />}
        >
          {commonTranslation("subscribe")}
        </Button>
      </Stack>
      {error ? (
        <FormHelperText fontWeight="medium" color="red">
          {error}
        </FormHelperText>
      ) : success ? (
        <FormHelperText fontWeight="medium" color="green.400">
          {success}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default NewsletterInput;
