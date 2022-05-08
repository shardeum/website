import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Status, validSources } from "../types";
import { isValidEmail } from "../utils";

const useNewsLetterForm = () => {
  const [email, setEmail] = useState<{
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((prev) => ({
      ...prev,
      error: prev.error ? null : prev.error,
      success: prev.success ? null : prev.success,
      value: e.target.value,
    }));
  };

  const handleSubmit = async (source: validSources[]) => {
    if (isValidEmail(email.value)) {
      setEmail((prev) => ({ ...prev, status: "loading" }));
      try {
        await axios.post("/api/newsletter", {
          email: email.value,
          source,
        });
      } catch (error: any) {
        const err = error as AxiosError;
        console.log("response", err.response);
        if (err?.response?.status === 400) {
          setEmail((prev) => ({
            ...prev,
            status: "idle",
            success: null,
            error: "You are already subscribed to our newsletter",
          }));
          return;
        }
        setEmail((prev) => ({
          ...prev,
          status: "idle",
          success: null,
          error: "Something went wrong",
        }));
        return;
      }
      setEmail({
        ...email,
        value: "",
        success: "🎉 Subscribed! Stay tuned for SHM updates in your inbox ;)",
      });
      return;
    }

    setEmail({ ...email, error: "Please enter a valid email address" });
  };

  return { form: email, handleSubmit, setEmail, handleOnChange };
};

export default useNewsLetterForm;
