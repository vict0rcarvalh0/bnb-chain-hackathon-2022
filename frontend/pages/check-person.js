import Link from "next/link";
import { useEffect, useState } from "react";
import { HealthVault } from "../assets/HealthVault";
import { Layout } from "../components/Layout";

import { useForm } from "react-hook-form";

const CheckPerson = () => {
  let example = [
    {
      title: "Alergia a amendoim",
      type: "Alergia",
      symptoms: ["Dor de cabeça", "Dor no estômago", "Dor no peito"],
      description: "Alergia a amendoim",
      record_tier: 0, // public
    },
    {
      title: "Cirurgia de apendicite",
      type: "Procedimento",
      symptoms: ["Dor no estômago", "Dor no peito"],
      description: "Cirurgia de apendicite",
      record_tier: 0, // public
    },
  ];
  const [mock, setMock] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({});

  const [counter, setCounter] = useState(0);

  const onSubmit = (data) => {
    setTimeout(() => {
      setMock(example);
    }, 1000);
  };

  return (
    <Layout title="Checar dados">
      <div id="bg" className="bg-black">
        {/*  create a top bar with the logo*/}
        <div className="flex w-full pt-4">
          <Link href="/" className="mx-auto">
            <HealthVault width={128} className="mx-auto my-auto h-full" />
          </Link>
        </div>

        <div className="text-white w-11/12 md:w-1/2 lg:7/12 mx-auto mt-4 pb-8">
          <div className="my-8">
            <p className="text-3xl text-center">
              Pesquise os dados públicos de uma pessoa
            </p>
          </div>

          <div className="bg-[#4848485e] py-6 px-4 rounded-2xl flex flex-col justify-center w-full">
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
              <div className="flex flex-col justify-center w-full">
                <p className="text-lg">
                  Digite o CPF de quem você deseja pesquisar:
                </p>
                <div className="flex flex-row justify-center items-center w-full">
                  <input
                    type="text"
                    placeholder="CPF"
                    {...register("cpf", {
                      required: true,
                      pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                    })}
                    className="p-2 rounded-l-xl border-2 border-[#424242] bg-[#6060601a] text-white text-lg lg:text-xl w-full lg:w-2/3 flex flex-row mx-auto justify-center"
                  />
                  <input
                    type="submit"
                    value="Pesquisar"
                    className="p-2 rounded-r-xl border-2 border-[#424242] bg-[#6060601a] text-white text-lg lg:text-xl w-full lg:w-1/3 flex flex-row mx-auto justify-center cursor-pointer"
                  />

                  {errors.user && (
                    <p className="text-red-500 text-sm">
                      {errors.user.message}
                    </p>
                  )}
                </div>

                <hr className="border-[#424242] w-full my-8" />

                <div className="flex flex-col justify-center w-full">
                  {mock.length > 0 ? (
                    mock.map((item) => (
                      <div
                        className="flex flex-col justify-center w-full border border-[#424242] rounded-xl p-4 my-2"
                        key={item.title}
                      >
                        <p className="text-lg">Título: {item.title}</p>
                        <p className="text-lg">Tipo: {item.type}</p>
                        <p className="text-lg">
                          Sintomas: {item.symptoms.join(", ")}
                        </p>
                        <p className="text-lg">Descrição: {item.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-lg">Nenhum dado encontrado</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckPerson;
