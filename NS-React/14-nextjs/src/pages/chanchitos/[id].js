import { useIsMounted } from "@/hooks/useIsMounted";
import { useRouter } from "next/router";

const ChanchitoDinamico = () => {
  const isMounted = useIsMounted;
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div>
        <p>Chanchito Dinamico: {router.query.id}</p>
      </div>
    </>
  );
};

export default ChanchitoDinamico;
