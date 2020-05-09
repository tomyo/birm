import styled from "styled-components";
import { useState } from "react";
import { Button } from "./atoms";
import { useRouter } from "next/router";
import { getCurrentPosition } from "../helpers/geolocation";


const StyledGeoPrompt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;


export function GeoPrompt() {
  // const options = {timeout: 1000 * 60 * 5} // 5 minutes
  const [statusText, setStatusText] = useState("");
  const router = useRouter();

  async function promptForLocation(e) {
    setStatusText("Locating...");

    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      setStatusText(`${latitude}, ${longitude}`);
      router.push(`/birms?latitude=${latitude}&longitude=${longitude}`);
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
