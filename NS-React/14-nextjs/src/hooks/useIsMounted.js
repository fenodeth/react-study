const { useRouter } = require("next/router");
const { useState, useEffect } = require("react");

export const useIsMounted = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  if (!loaded) {
    return null;
  }
  return loaded;
};
