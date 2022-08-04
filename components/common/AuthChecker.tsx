import { FC, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const AuthChecker: FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.reload();
  }, [session]);

  return null;
};
