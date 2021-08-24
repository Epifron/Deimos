import { useState } from "react";

export default function Pesquisa() {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
  });
  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
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
      <h1 className="my-4 text-center font-bold text-2xl">
        Críticas e sugestões
      </h1>
      <p className="mt-6 text-center">
        O restaurante x sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>
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
        <button
          className="bg-button px-12 py-5 font-bold rounded-lg shadow-lg hover:shadow"
          onClick={save}
        >
          Enviar
        </button>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </div>
  );
}
