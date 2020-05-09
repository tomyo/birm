import Head from "next/head";
import { useEffect } from "react";
import { isGeoPermitted } from "../helpers/geolocation";
import { getCurrentPosition } from "../helpers/geolocation";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    async function chooseRoute() {
      const permitted = await isGeoPermitted();
      if (permitted) {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        router.push(`/birms?latitude=${latitude}&longitude=${longitude}`);
      } else {
        router.push("/getLocation");
      }
    }
    chooseRoute();
  }, []);

  return (
    <div>
      <Head>
        <title>Birm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Loading...</main>
    </div>
  );
}
