import Link from "next/link";
import { HealthVault } from "../assets/HealthVault";
import { PrivateIcon } from "../assets/PrivateIcon";
import { PublicIcon } from "../assets/PublicIcon";
import { Layout } from "../components/Layout";

const Register = () => {
  return (
    <Layout title="About">
      <div id="bg" className="bg-black">
        {/*  create a top bar with the logo*/}
        <div className="flex w-full pt-8">
          <Link href="/" className="mx-auto">
            <HealthVault width={128} className="mx-auto my-auto h-full" />
          </Link>
        </div>

        <div className="text-white w-full lg:w-7/12 mx-auto mt-16">
          <h1 className="text-4xl text-center font-bold">
            Bem vindo ao HealthVault!
          </h1>
          <h1 className="text-2xl text-center font-semi">
            Tenha o controle total sobre sua ficha médica
          </h1>
          <p className="text-xl text-center my-8">
            Com o HealthVault, você pode salvar todas suas informações médicas
            na palma da sua mão. Usando criptografia, suas informações só serão
            compartilhadas com aqueles a quem você confiar.
          </p>
          <h1 className="text-2xl text-center font-semi">
            Viva sem preocupações
          </h1>
          <p className="text-xl text-center my-8">
            Você tem alguma alergia? Fez alguma operação importante? Caso você
            esteja desacordado, qualquer pessoa pode acessar o site para
            consultar suas informações. Assim, você garante que os socorristas
            tenham as informações mais importantes sobre você imediatamente.
          </p>
          <h1 className="text-2xl text-center font-semi">Como funciona?</h1>
          <p className="text-xl text-center my-8">
            É muito fácil! Você só precisa criar uma carteira na blockchain. No
            site, você pode criar suas fichas médicas e defini-las como privadas
            ou públicas.{" "}
          </p>
          <h1 className="text-2xl text-center font-semi">
            Qual a diferença de uma ficha pública para uma privada?
          </h1>
          <p className="text-xl text-center my-8">
            As informações publicas tem podem ser acessadas com mais facilidade.
            Essas informações podem ser acessadas por qualquer um que souber seu
            usuário e CPF. A ficha pública é ideal para suas informações mais
            importantes, como a alergia a algum medicamento, por exemplo.
          </p>
          <p className="text-xl text-center mt-8 pb-8">
            Já as fichas privadas são para suas informações mais sensiveis. Além
            do seu usuário e cpf, você também criará uma senha personalizada
            para proteger essa ficha. Além disso, você pode limitar a quantidade
            de vezes que um médico, por exemplo, poderá ver essas informações.
            Você pode criar quantas fichas privadas quiser. Elas são ideias para
            armazenar suas informações mais sensiveis e especificas.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
