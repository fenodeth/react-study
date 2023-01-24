import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Pokemon = ({ data }) => {
  const router = useRouter();
  console.log(router);

  //* De esta manera controlamos el renderizado de HTML a demanda
//   if (router.isFallback) {
//     return <p>Cargando...</p>;
//   }

  return (
    <>
      <div>
        <h1>
          {data.name} número: #{data.id}
        </h1>
        <Image
          src={data.sprites.front_default}
          alt={data.name}
          width={400}
          height={400}
        />
        <Link href="/">Volver al inicio</Link>
      </div>
    </>
  );
};

export default Pokemon;

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();

  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  //* al pasar fallback en false, next solamente va a generar HTML para las rutas especificadas en paths
  //* al pasar fallback en true, next renderizará en forma lazy las rutas no declaradas
  //   return { paths, fallback: true };
  //* al pasar el fallback como 'blocking' no sera necesario controlar router.isFallback
  //* ya que next se encargara de 'desbloquear' el conjunto de datos una vez la peticion esté completada
  return { paths, fallback: 'blocking'};
};

// export const getServerSideProps = async ({ params }) => {
//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${params.id}`
//   );
//   const data = await response.json();

//   return { props: { data } };
// };
