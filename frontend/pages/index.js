import Link from "next/link";
import { Layout } from "../components/Layout";
import { HealthVault } from "../assets/HealthVault";

export default function Home() {
  return (
    <Layout>
      <div
        id="bg"
        className="bg-[#000] flex flex-1 flex-col min-h-screen lg:align-middle lg:justify-center"
      >
        <div className="text-white flex w-full lg:absolute lg:top-0">
          <div className="flex flex-row w-full md:w-1/2 h-fit mx-auto justify-evenly mt-8 mb-4 text-lg py-4">
            <Link href="/about">Sobre</Link>
            <Link href="/how-it-works">Como funciona</Link>
            <Link href="/data-policy">Política de dados</Link>
            <Link href="/q&a">Q & A</Link>
          </div>
        </div>

        <div className="w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row text-white">
          <div className="w-full lg:w-1/2 px-8 pt-16 lg:pt-0">
            <HealthVault className="mx-auto my-auto h-full w-2/3 lg:w-3/4" />
          </div>

          <div className="w-full lg:w-1/2 px-8 py-16">
            <div className="mx-auto h-full pb-16 lg:pb-0">
              <p className="text-4xl lg:text-3xl font-bold text-center">
                Tudo que seu médico precisa saber sobre você.
                <br />
                <br />
                Onde e quando você precisar.
              </p>

              <div className="mt-4 w-full flex flex-col justify-center items-center align-middle">
                <Link
                  href="/login"
                  className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#606060] to-[#9d9d9d4b] text-white text-lg lg:text-xl font-bold mb-4 w-full text-center md:w-2/ lg:w-3/4 cursor-pointer"
                >
                  <p className="text-lg">Quero criar meu histórico</p>
                </Link>

                <Link
                  href="/check-person"
                  className="px-8 py-4 rounded-xl border-2 border-[#606060] text-white text-lg lg:text-xl font-bold w-full text-center md:w-3/4 lg:w-fit cursor-pointer "
                >
                  <p>Quero consultar o histórico de alguém</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
