import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HealthVault } from "../../assets/HealthVault";
import { PrivateIcon } from "../../assets/PrivateIcon";
import { PublicIcon } from "../../assets/PublicIcon";
import { Layout } from "../../components/Layout";

const RegisterPrivate = () => {
  const [data, setData] = useState([
    {
      title: "Alergia a amendoim",
      type: "Alergia",
      symptoms: ["Dor de cabeça", "Dor no estômago", "Dor no peito"],
      description: "Alergia a amendoim",
      record_tier: 0, // public
    },
    {
      title: "Asma",
      type: "Condição",
      symptoms: ["Falta de ar", "Tosse", "Dor no peito"],
      description: "Falta de ar recorrente. Bomba de ar ajuda.",
      record_tier: 1, // standard
    },
    {
      title: "Cirurgia de apendicite",
      type: "Procedimento",
      symptoms: ["Dor no estômago", "Dor no peito"],
      description: "Cirurgia de apendicite",
      record_tier: 0, // public
    },
    {
      title: "HIV",
      type: "Condição",
      description: "Vírus HIV",
      record_tier: 2, // critical
    },
  ]);

  const [highlighted, setHighlighted] = useState(null);

  const [createEmergency, setCreateEmergency] = useState(false);
  const [createStandard, setCreateStandard] = useState(false);
  const [createCritical, setCreateCritical] = useState(false);

  const changeHighlighted = (record) => {
    setHighlighted(record);
    console.log(highlighted);
  };

  const toggleCreate = (type) => {
    if (type === 0) {
      setCreateEmergency(true);

      setCreateStandard(false);
      setCreateCritical(false);
    } else if (type === 1) {
      setCreateStandard(true);

      setCreateEmergency(false);
      setCreateCritical(false);
    } else if (type === 2) {
      setCreateCritical(true);

      setCreateEmergency(false);
      setCreateStandard(false);
    }

    setHighlighted(null);
  };

  const saveNewData = (newData) => {
    setData([...data, {
      title: "Alergia a morfina",
      type: "Alergia",
      description: "Não posso receber nenhum medicamento que contenha morfina...",
      record_tier: 0, // public
      symptoms: ["Dor de cabeça", "Dor no estômago", "Dor no peito"],
    }]);

    setCreateEmergency(false);
    setCreateStandard(false);
    setCreateCritical(false);

    setTimeout(() => {
      alert("Registro salvo com sucesso!\n\n" + JSON.stringify(data));
    }, 1000);
  };

  return (
    <Layout title="Records">
      <div
        id="bg"
        className="bg-black flex flex-1 flex-col min-h-screen h-full"
      >
        {/*  create a top bar with the logo */}
        <div className="flex flex-col lg:flex-row w-full lg:px-8 justify-between pt-8">
          <Link href="/">
            <HealthVault
              width={128}
              className="my-auto h-full lg:w-fit lg:mx-0"
            />
          </Link>
        </div>

        {/* Smaller */}
        <div className="text-white w-11/12 mx-auto mt-8 flex flex-1 flex-row justify-between h-full max-h-[85vh] pb-8">
          <div className="bg-[#4848485e] py-2 px-4 rounded-2xl w-1/5 max-h-max flex flex-col justify-between">
            <div className="overflow-y-auto mb-4">
              <div className="w-full text-center">
                <div className="flex flex-row justify-center align-middle p-0">
                  <p className="text-xl flex flex-row align-middle my-auto font-bold">
                    Emergencial{" "}
                  </p>
                  <PublicIcon className="w-auto ml-2" width={24} />
                </div>
                <div className="w-full mx-auto">
                  {data
                    .filter((item) => item.record_tier === 0)
                    .map((item) => (
                      <p
                        onClick={() => changeHighlighted(item)}
                        className="bg-[#c4c4c4a1] mb-2 rounded-lg cursor-pointer hover:bg-[#e2e2e2a1] w-full p-1"
                        key={item.title}
                      >
                        {item.title}
                      </p>
                    ))}

                  <button
                    className="bg-[#1460D294] w-full mb-4 rounded-lg p-1"
                    onClick={() => toggleCreate(0)}
                  >
                    <p>Adicionar dado</p>
                  </button>
                </div>
              </div>

              <hr className="border-1 border-[#ffffffa1] my-2" />

              <div className="w-full text-center  max-h-screen">
                <div className="flex flex-row justify-center align-middle p-0">
                  <p className="text-xl flex flex-row align-middle my-auto font-bold">
                    Padrão
                  </p>
                </div>
                <div className="w-full mx-auto">
                  {data
                    .filter((item) => item.record_tier === 1)
                    .map((item) => (
                      <p
                        onClick={() => changeHighlighted(item)}
                        className="bg-[#c4c4c4a1] mb-2 rounded-lg cursor-pointer hover:bg-[#e2e2e2a1] w-full p-1"
                        key={item.title}
                      >
                        {item.title}
                      </p>
                    ))}
                  <button
                    className="bg-[#1460D294] w-full mb-4 rounded-lg p-1"
                    onClick={() => toggleCreate(1)}
                  >
                    <p>Adicionar dado</p>
                  </button>
                </div>
              </div>

              <hr className="border-1 border-[#ffffffa1] my-2" />

              <div className="w-full text-center">
                <div className="flex flex-row justify-center align-middle p-0">
                  <p className="text-xl flex flex-row align-middle my-auto font-bold">
                    Crítico
                  </p>
                  <PrivateIcon className="w-auto ml-2" width={24} />
                </div>
                <div className="w-full mx-auto">
                  {data
                    .filter((item) => item.record_tier === 2)
                    .map((item) => (
                      <p
                        onClick={() => changeHighlighted(item)}
                        className="bg-[#c4c4c4a1] mb-2 rounded-lg cursor-pointer hover:bg-[#e2e2e2a1] w-full p-1"
                        key={item.title}
                      >
                        {item.title}
                      </p>
                    ))}

                  <button
                    className="bg-[#1460D294] w-full mb-4 rounded-lg p-1"
                    onClick={() => toggleCreate(2)}
                  >
                    <p>Add record</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full text-center">
              <button className="bg-[#1460D294] w-full mb-4 rounded-lg p-1" onClick={saveNewData}>
                <p className="p-2 font-bold">Salvar e continuar</p>
              </button>
            </div>
          </div>

          {/* Bigger div */}
          <div className="bg-[#4848485e] py-6 px-4 rounded-2xl w-3/4 overflow-y-auto">
            {highlighted ? (
              <div>
                <div className="flex flex-row justify-between">
                  <p className="text-3xl font-semibold">{highlighted.title}</p>
                </div>

                <hr className="my-4 h-1" />

                <div>
                  {highlighted.type && (
                    <div className="flex flex-row w-full mb-2">
                      <p className="text-xl w-1/6">Tipo</p>
                      <div className="flex flex-row flex-wrap">
                        {highlighted.type}
                      </div>
                    </div>
                  )}

                  {highlighted.symptoms && (
                    <div className="flex flex-row w-full mb-2">
                      <p className="text-xl w-1/6">Sintomas</p>
                      <div className="flex flex-row flex-wrap">
                        {highlighted.symptoms.map((item) => (
                          <p
                            className="w-fit bg-[#c4c4c4a1] rounded-lg p-1 mr-2"
                            key={item}
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {highlighted.description && (
                    <div className="flex flex-row w-full">
                      <p className="text-xl w-1/6">Descrição</p>
                      <textarea
                        disabled={true}
                        value={highlighted.description}
                        maxLength={500}
                        className="w-5/6 rounded-lg p-2 text-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : createEmergency ? (
              <Form
                data={data}
                setData={(item) => setData([...data, item])}
                type={0}
              />
            ) : createStandard ? (
              <Form
                data={data}
                setData={(item) => setData([...data, item])}
                type={1}
              />
            ) : createCritical ? (
              <Form
                data={data}
                setData={(item) => setData([...data, item])}
                type={2}
              />
            ) : (
              <div className="flex flex-col justify-center items-center h-full align-middle">
                <p className="text-center">
                  Clique em um item para ver detalhes
                </p>
                <p className="mx-2">ou</p>
                <p className="text-center">
                  Adicione um novo item selecionando sua categoria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Form = ({ type, data, setData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (item) => {
    if (data.find((dataItem) => dataItem.title === item.title)) {
      alert("Item já existe");
      return;
    }

    setData({
      ...item,
      record_tier: type,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-fit flex flex-col justify-between"
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-row justify-between">
            <p className="text-xl font-semibold">
              Adicionar novo registro -{" "}
              {type === 0 ? "Emergência" : type === 1 ? "Padrão" : "Crítico"}
            </p>
          </div>

          <hr className="my-4 h-1" />

          <div>
            <div className="flex flex-col w-full mb-2">
              <p className="text-lg">Título</p>
              <input
                {...register("title", { required: true })}
                className="p-1 rounded-xl border-2 border-[#424242] bg-[#6060601a] text-white text-md w-full flex flex-row mx-auto justify-center"
                placeholder="Ex.: Alergia a morfina"
              />

              {errors.title && (
                <p className="text-red-500 text-sm">Campo obrigatório</p>
              )}
            </div>

            {type === 0 && (
              <div className="flex flex-col w-full mb-2">
                <p className="text-lg">Descrição</p>
                <textarea
                  {...register("description", { required: true })}
                  className="p-1 rounded-xl border-2 border-[#424242] bg-[#6060601a] text-white text-md w-full flex flex-row mx-auto justify-center"
                  placeholder="Não posso receber nenhum medicamento que contenha morfina..."
                />

                {errors.description && (
                  <p className="text-red-500">Campo obrigatório</p>
                )}
              </div>
            )}

            {type === 1 && <div></div>}

            {type === 2 && <div></div>}
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <input
            type="submit"
            value="Salvar"
            className="bg-[#1460D294] mt-2 px-4 py-2 rounded-xl text-xl cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterPrivate;
