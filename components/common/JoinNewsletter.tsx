import {
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import { isValidEmail } from "@shm/utils";
import { useState } from "react";
import Feature from "./Feature";
import IconButtonRight from "./IconButton";

const JoinNewsletter = () => {
  const [form, setForm] = useState<{ value: string; error: string | null; success: string | null }>(
    {
      value: "",
      error: null,
      success: null,
    }
  );

  const handleSubmit = async () => {
    if (isValidEmail(form.value)) {
      // make the API call
      setForm({ ...form, success: "Thank you for subscribing. Have a nice day :)" });
      return;
    }

    setForm({ ...form, error: "Please enter a valid email" });
  };

  return (
    <VStack py="6" px="8" bgColor="brand.white" w="full" alignItems="start" spacing="6">
      <Feature
        title="Join Newsletter"
        description={`Sign up for the weekly newsletter and stay updated on major announcements and developments about Shardeum`}
      />
      <FormControl isInvalid={!!form.error}>
        <InputGroup>
          <Input
            placeholder="Your Email"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                error: prev.error ? null : prev.error,
                success: prev.success ? null : prev.success,
                value: e.target.value,
              }))
            }
            value={form.value}
          />
          <InputRightAddon children={<IconButtonRight onClick={handleSubmit} />} />
        </InputGroup>
        {form.error ? (
          <FormHelperText fontWeight="medium" color="red">
            Please enter a valid email address
          </FormHelperText>
        ) : form.success ? (
          <FormHelperText fontWeight="medium" color="green">
            {form.success}
          </FormHelperText>
        ) : null}
      </FormControl>
    </VStack>
  );
};

export default JoinNewsletter;
