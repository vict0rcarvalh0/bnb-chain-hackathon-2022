import Link from "next/link";
import { useEffect, useState } from "react";
import { HealthVault } from "../assets/HealthVault";
import { MetamaskIcon } from "../assets/MetamaskIcon";
import { Layout } from "../components/Layout";
import { ethers } from "ethers";
import Error from "next/error";

import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  const [userType, setUserType] = useState("metamask");

  const [provider, setProvider] = useState({});
  const [wallet, setWallet] = useState({
    address: "",
    balance: "",
    network: "",
  });

  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    } else {
      console.log("No web3? You should consider trying MetaMask!");
    }
  }, []);

  const connectWallet = async () => {
    try {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const wallet = provider.getSigner(account);
      const network = await provider.getNetwork();

      setWallet({
        address: account,
        balance: ethers.utils.formatEther(await wallet.getBalance()),
        network: network.name,
      });

      console.log(wallet);
    } catch (error) {
      throw new Error(error);
    }
  };

  const toggleUserType = () => {
    if (userType === "metamask") {
      setUserType("cpf");
    } else {
      setUserType("metamask");
    }
  };

  const onSubmit = async (data) => {
    if (userType === "metamask") {
      const { wallet, passwordMetamask } = data;
      console.log(wallet, passwordMetamask);

      if (
        wallet === "0x4417e1d9ca504f92fb882cfc692a33e28c7acf6d" &&
        passwordMetamask === "teste123"
      ) {
        setCookie("wallet", wallet.address);

        // redirect to /records after 1 second
        setTimeout(() => {
          window.location.href = "/records";
        }, 1000);
      } else {
        alert("Invalid wallet or password");
      }
    } else {
      const { cpf, passwordCPF } = data;

      if (cpf === "023.717.365-46" && passwordCPF === "teste123") {
        setCookie("cpf", cpf);

        // redirect to /records after 1 second
        setTimeout(() => {
          window.location.href = "/records";
        }, 1000);
      } else {
        alert("Invalid CPF or password");
      }
    }
  };

  return (
    <Layout title="Sign in">
      <div id="bg" className="bg-black">
        {/*  create a top bar with the logo*/}
        <div className="flex w-full pt-4">
          <Link href="/" className="mx-auto">
            <HealthVault width={128} className="mx-auto my-auto h-full" />
          </Link>
        </div>

        <div className="text-white w-11/12 md:w-1/2 lg:7/12 mx-auto mt-4">
          <div className="my-8">
            <p className="text-4xl text-center">Entre em uma conta</p>
            <p className="text-2xl text-center">
              ou <span style={{ color: "gray" }}>crie a sua</span>
            </p>
          </div>

          <div className="bg-[#4848485e] py-6 px-4 rounded-2xl flex flex-col justify-center w-full">
            <div className="flex flex-1 flex-row w-full justify-around mb-8">
              <button
                className={`
                ${
                  userType === "metamask"
                    ? "border-b-4 border-b-[#1460D2]"
                    : "border-b-4 border-b-[#1b1b1b]"
                } text-lg 
              `}
                onClick={toggleUserType}
              >
                Entre com sua carteira
              </button>

              <button
                className={`
                ${
                  userType === "cpf"
                    ? "border-b-4 border-b-[#1460D2]"
                    : "border-b-4 border-b-[#1b1b1b]"
                } text-lg 
              `}
                onClick={toggleUserType}
              >
                Entre com seu CPF
              </button>
            </div>

            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
              {userType === "metamask" ? (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-full lg:w-4/5">
                      <button
                        className={`px-4 py-2 mt-4 rounded-xl border-2 border-[#606060] text-white text-lg lg:text-xl font-bold text-center cursor-pointer flex flex-row mx-auto justify-center w-full align-middle ${
                          wallet.address !== "" ? "cursor-not-allowed" : ""
                        }`}
                        onClick={connectWallet}
                        disabled={wallet.address !== ""}
                      >
                        Entrar com Metamask
                        <MetamaskIcon width={32} className="ml-2" />
                      </button>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full lg:w-4/5 my-4">
                      <p className="text-lg w-full">Sua carteira</p>
                      <input
                        type="text"
                        value={wallet.address}
                        placeholder="0x0000000000000000000000000000000000000000"
                        onChange={(e) => setWallet(e.target.value)}
                        {...register("wallet", { required: true })}
                        className="p-2 rounded-xl border-2 border-[#424242] bg-[#6060601a] text-white text-lg lg:text-xl w-full flex flex-row mx-auto justify-center cursor-not-allowed"
                      />

                      {errors.wallet && (
                        <p className="text-red-500 text-sm">
                          {errors.wallet.message}
                        </p>
                      )}

                      {errors.wallet && errors.wallet.type === "required" && (
                        <p className="text-red-500 text-sm">
                          Este campo é obrigatório
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col justify-center items-center w-full lg:w-4/5">
                      <p className="text-lg w-full">Sua senha</p>
                      <input
                        type="password"
                        {...register("passwordMetamask", { required: true })}
                        placeholder="Sua senha"
                        className="p-2 rounded-xl border-2 border-[#424242] bg-[#6060601a] text-white text-lg lg:text-xl w-full flex flex-row mx-auto justify-center"
                      />

                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.passwordMetamask.message}
                        </p>
                      )}

                      {errors.passwordMetamask &&
                        errors.passwordMetamask.type === "required" && (
                          <p className="text-red-500 text-sm">
                            Este campo é obrigatório
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <input
                      type="submit"
                      value="Entrar"
                      className={`w-full lg:w-1/2 px-4 py-2 bg-[#1460D2] rounded-xl text-center ${
                        userType !== "metamask"
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-full lg:w-4/5">
                      <p className="text-lg w-full">Seu CPF</p>
                      <input
                        type="text"
                        onChange={(e) => setCpf(e.target.value)}
                        {...register("cpf", {
                          required: true,
                          pattern: {
                            value: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/,
                            message: "CPF inválido",
                          },
                        })}
                        placeholder="000.000.000-00"
                        className="p-2 rounded-xl border-2 border-[#424242] bg-[#6060601a] text-white text-lg lg:text-xl flex flex-row mx-auto justify-center mb-2 w-full"
                      />

                      {errors.cpf && (
                        <p className="text-red-500 text-sm">
                          {errors.cpf.message}
                        </p>
                      )}

                      {errors.cpf && errors.cpf.type === "required" && (
                        <p className="text-red-500 text-sm">
                          Este campo é obrigatório
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col justify-center items-center w-full lg:w-4/5">
                      <p className="text-lg w-full">Sua senha</p>
                      <input
                        {...register("passwordCPF", {
                          required: true,
                        })}
                        value=""
                        type="password"
                        placeholder="Sua senha"
                        className="p-2 rounded-xl border-2 border-[#424242] bg-[#6060601a] text-white text-lg lg:text-xl w-full flex flex-row mx-auto justify-center"
                      />

                      {errors.passwordCPF && (
                        <p className="text-red-500 text-sm">
                          {errors.passwordCPF.message}
                        </p>
                      )}

                      {errors.passwordCPF &&
                        errors.passwordCPF.type === "required" && (
                          <p className="text-red-500 text-sm">
                            Este campo é obrigatório
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <input
                      type="submit"
                      value="Entrar"
                      className={`w-full lg:w-1/2 px-4 py-2 bg-[#1460D2] rounded-xl text-center ${
                        userType !== "cpf"
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    />
                  </div>
                </>
              )}
            </form>

            <div className="flex flex-col justify-center items-center mt-8">
              <p className="text-lg">Não tem uma conta?</p>
              <Link href="/register" className="text-[#1460D2] text-lg">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
