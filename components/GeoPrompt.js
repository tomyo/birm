import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "./atoms";
import { getCurrentPosition } from "../helpers/geolocation";
import { redirectWithCoordinates } from "../helpers/redirectWithCoordinates";

const StyledGeoPrompt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export function GeoPrompt({ nextUrl }) {
  const [statusText, setStatusText] = useState("");

  async function promptForLocation(e) {
    setStatusText("Locating...");
    try {
      console.log("GeoPrompt, about to ask");
      const { coords } = await getCurrentPosition();
      console.log("GeoPrompt, asked");
      setStatusText(`Success!`);
      redirectWithCoordinates(nextUrl, coords);
    } catch (error) {
      setStatusText(`${error.message}`);
    }
  }

  return (
    <StyledGeoPrompt>
      <Button onClick={promptForLocation} disabled={statusText}>
        Grant Location
      </Button>
      <p>{statusText}</p>
    </StyledGeoPrompt>
  );
}
