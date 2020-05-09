import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { isGeoPermitted } from "../helpers/geolocation";
import { GeoPrompt } from "../components/GeoPrompt";


export default function GetLocation() {
  const [geoPrompted, setGeoPrompted] = useState(false);
  // useEffect(setGeoPrompted(isGeoPermitted()));

  useEffect(() => {
    async function setGeoPermission() {
      const permitted = await isGeoPermitted();
      setGeoPrompted(true);
      console.log(permitted);
    }
    setGeoPermission();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Birm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>
          Welcome to <a href="https://birm.xyz">Birm!</a>
        </Title>
        <p className="description">
          This app requires your location to show the birms in your area.
        </p>

        <Radar src="/radar.svg" />

        <GeoPrompt prompted={geoPrompted}></GeoPrompt>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 11% 0 0;
        }
      `}</style>
    </div>
  );
}

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const Radar = styled.img`
  width: 10em;
`;