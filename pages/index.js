import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/get-promo", fetcher);
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
      {!data && <p className="my-12 text-center">Carregando...</p>}
      {!error && data && data.showCoupon && (
        <p className="my-12 text-center">{data.message}</p>
      )}
    </div>
  );
}
