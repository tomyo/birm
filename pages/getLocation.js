import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { isGeoPermitted, getCurrentPosition } from "../helpers/geolocation";
import { GeoPrompt } from "../components/GeoPrompt";
import { useRouter } from "next/router";
import { redirectWithCoordinates } from "../helpers/redirectWithCoordinates";

export default function GetLocation() {
  const router = useRouter();
  const { next } = router.query; // next is url to go after aquiring location
  const nextUrl = next || "/birms"; // /birms is default redirect route

  useEffect(() => {
    async function setGeoPermission() {
      const permitted = await isGeoPermitted();
      if (permitted) {
        const { coords } = await getCurrentPosition();
        redirectWithCoordinates(nextUrl, coords);
      }
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

        <GeoPrompt nextUrl={nextUrl}></GeoPrompt>
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
          text-align: center;
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
