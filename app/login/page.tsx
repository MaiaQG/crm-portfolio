import LoginButton from "@/components/login-button";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/*LADO ESQUERDO*/}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo2.jpg"
          width={173}
          height={39}
          alt="crmMaia"
          className="mb-8"
        ></Image>
        <h1 className="mb-3 text-4xl font-bold">Bem Vindo</h1>
        <p className="text-muted-foreground mb-8">
          Infinity CRM é uma ferramenta para gerir seu relacionamento com
          cliente e pré cliente.
        </p>
        <div className="flex justify-center items-center gap-3">
          <LoginButton />
        </div>
      </div>
      {/*LADO DIREITO*/}
      <div className="relative h-full w-full">
        <Image
          src="/crmLogin.png"
          alt="Login"
          className="object-cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>
    </div>
  );
};

export default LoginPage;
