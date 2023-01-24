import Image from "next/image";
import Link from "next/link";
import Coffee from "../../public/coffee.png";

export default function Home() {
  return (
    <>
      <Link href={"/chanchitos"}>Ir a chanchitos</Link>
      <p>Chanchito feliz</p>
      {/* <Image alt="coffee" src={"/coffee.png"} width={400} height={400} /> */}
      <Image alt="coffee" src={Coffee} width={400} height={400} />
    </>
  );
}
