import Head from "next/head";
import { useEffect } from "react";
import { isGeoPermitted } from "../helpers/geolocation";
import { getCurrentPosition } from "../helpers/geolocation";
import { useRouter } from "next/router";
import { redirectWithCoordinates } from "../helpers/redirectWithCoordinates";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    async function chooseRoute() {
      const permitted = await isGeoPermitted();
      if (permitted) {
        const { coords } = await getCurrentPosition();
        redirectWithCoordinates('/birms', coords);
      } else {
        router.push(`/getLocation?next=/birms`);
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
