import Link from "next/link";
import { Button } from "./ui/button";

const LoginButton = () => {
  return (
    <Button asChild>
      <Link href="(home)/page.tsx">Login</Link>
    </Button>
  );
};

export default LoginButton;
