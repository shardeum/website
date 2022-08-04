import { createContext } from "react";

export type SigninContextType = {
  popup: boolean;
  setPopup: (popup: boolean) => void;
};

export const SigninContext = createContext<SigninContextType>({
  popup: false,
  setPopup: () => null,
});

export const SigninProvider = SigninContext.Provider;

export default SigninContext;
