import { FC, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

const SignInPage: FC = () => {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  useEffect(() => {
    if (!loading && !session) signIn("twitter");
    if (!loading && session) window.close();
  }, [session, loading]);

  return null;
};

export default SignInPage;
