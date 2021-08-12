export default function Pesquisa() {
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
        <input type="text" className="p-4 block shadow bg-input rounded my-1" />
      </div>
    </div>
  );
}
