import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="mt-12 text-center">
        O restaurante x sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>
      <div className="text-center my-12">
        <Link href="/pesquisa">
          <a className="bg-button px-12 py-5 font-bold rounded-lg shadow-lg hover:shadow">
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      <p className="my-12 text-center">
        Ao dar sua opnião e/ou sugestão, ganhe 10% de desconto na sua próxima
        compra.
      </p>
    </div>
  );
}
