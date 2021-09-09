import { useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Pesquisa() {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
    Sugestao: "",
    Nota: 0,
    Pesquisa: "",
  });
  const notas = [0, 1, 2, 3, 4, 5];
  const pesquisas = [
    { text: "Nenhum erro ao pedido" },
    { text: "o Pedido demorou" },
    { text: "O Pedido tal coisa" },
    { text: "O Pedido ta ruim" },
    { text: "O Pedido veio errado" },
  ];
  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});
  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setSucess(true);
      setRetorno(data);
    } catch (err) {}
  };
  const onChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };
  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa" />
      <h1 className="my-4 text-center font-bold text-2xl">
        Críticas e sugestões
      </h1>
      <p className="mt-6 text-center">
        O restaurante x sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>
      {!sucess && (
        <div className="w-60 mx-auto mt-2">
          <label className="font-bold">Seu nome:</label>
          <input
            type="text"
            className="p-4 block shadow bg-input rounded my-1"
            placeholder="Nome"
            onChange={onChange}
            name="Nome"
            value={form.nome}
          />
          <label className="font-bold">Seu Whatsapp:</label>
          <input
            type="text"
            className="p-4 block shadow bg-input rounded my-1"
            placeholder="Whatsapp"
            onChange={onChange}
            name="Whatsapp"
            value={form.Whatsapp}
          />
          <label className="font-bold">Seu Email:</label>
          <input
            type="text"
            className="p-4 block shadow bg-input rounded my-1"
            placeholder="Email"
            onChange={onChange}
            name="Email"
            value={form.Email}
          />
          <label className="font-bold">Sua Opnião:</label>
          <input
            type="text"
            className="p-4 block shadow bg-input rounded my-3"
            placeholder="Sugestao"
            onChange={onChange}
            name="Sugestao"
            value={form.Sugestao}
          />
          <label className="font-bold">Pesquisa:</label>
          <div>
            {pesquisas.map((pesquisa) => {
              return (
                <label className="block">
                  <input
                    type="radio"
                    name="Pesquisa"
                    value={pesquisa.text}
                    onChange={onChange}
                  />
                  {pesquisa.text}
                </label>
              );
            })}
          </div>
          <label className="font-bold">Nota:</label>
          <div className="flex py-6">
            {notas.map((nota) => {
              return (
                <label className="block w-1/6 text-center">
                  {nota} <br />
                  <input
                    type="radio"
                    name="Nota"
                    value={nota}
                    onChange={onChange}
                  />
                </label>
              );
            })}
          </div>
          <button
            className="bg-button px-12 py-5 font-bold rounded-lg shadow-lg hover:shadow"
            onClick={save}
          >
            Enviar
          </button>
        </div>
      )}
      {sucess && (
        <div className="w-60 mx-auto mt-2">
          <p className="text-center mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
            Obrigado por contribuir com sua sugestão ou critica.
          </p>
          {retorno.showCoupon && (
            <div className="text-center border p-4 mb-4">
              Seu Cupom: <br />
              <span className="font-bold text-2xl">{retorno.Cupom}</span>
            </div>
          )}
          {retorno.showCoupon && (
            <div className="text-center border p-4 mb-4">
              <span className="font-bold block mb-2">{retorno.Promo}</span>
              <br />
              <span className="italic">
                Tire um print ou foto desta tela e apresente ao garçon.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
