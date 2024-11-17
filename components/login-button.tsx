import Link from "next/link";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";

const LoginButton = () => {
  return (
    <Button>
      <LogInIcon className=""></LogInIcon>
      <Link href="home">Fazer login ou criar conta</Link>
    </Button>
  );
};

export default LoginButton;
