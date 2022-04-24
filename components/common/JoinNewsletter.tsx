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
import { isValidEmail } from "@shm/utils";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Status } from "../../types";
import Feature from "./Feature";
import { IconRightArrow } from "./Icons";

const JoinNewsletter = () => {
  const [form, setForm] = useState<{
    value: string;
    error: string | null;
    success: string | null;
    status: Status;
  }>({
    value: "",
    error: null,
    success: null,
    status: "idle",
  });

  const handleSubmit = async () => {
    if (isValidEmail(form.value)) {
      setForm((prev) => ({ ...prev, status: "loading" }));
      try {
        await axios.post("/api/newsletter", {
          email: form.value,
        });
      } catch (error: any) {
        const err = error as AxiosError;
        console.log("response", err.response);
        if (err?.response?.status === 400) {
          setForm((prev) => ({
            ...prev,
            status: "idle",
            success: null,
            error: "You are already subscribed to our newsletter",
          }));
          return;
        }
        setForm((prev) => ({
          ...prev,
          status: "idle",
          success: null,
          error: "Something went wrong",
        }));
        return;
      }
      setForm({ ...form, value: "", success: "Thank you for subscribing. Have a nice day :)" });
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
          <InputRightAddon
            onClick={handleSubmit}
            children={
              <LightMode>
                <IconButton
                  variant="secondary"
                  p="5"
                  icon={<IconRightArrow />}
                  h="full"
                  px="4"
                  aria-label="Submit Button"
                  isLoading={form.status === "loading"}
                />
              </LightMode>
            }
          />
        </InputGroup>
        {form.error ? (
          <FormHelperText fontWeight="medium" color="red">
            {form.error}
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
