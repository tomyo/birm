import { useRouter } from "next/router";
import styled from "styled-components";
import Link from 'next/link'


export default function NoBirms() {
  const router = useRouter();
  const { lat, lon } = router.query;
  const mapUrl = `https://www.openstreetmap.org/#map=18/${lat}/${lon}`;
  return (
    <StyledNoBirm>
      <p>
        Create the first Birm here!{" "}
        <a href={mapUrl} target="_blank">
          (debug)
        </a>
      </p>
      <Link href="/new-birm">New Birm</Link>
      {svgMoon}
    </StyledNoBirm>
  );
}

const StyledNoBirm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100vh;
  p {
    font-family: Roboto;
    font-size: 30px;
    text-align: center;
    margin: auto 0px;
    padding: 0px 28px;
    line-height: 1.4;
    color: rgb(255, 255, 255);
  }
  svg {
    height: 190px;
  }
`;

const svgMoon = (
  <svg width="100%" height="33vh" viewBox="0 0 512 512">
    <g fillRule="nonzero" fill="none">
      <path fill="#49494D" d="M245.34 0h21.328v277.33H245.34z"></path>
      <path
        d="M256.004 256c-141.383 0-256 114.609-256 256h511.992c0-141.391-114.609-256-255.992-256z"
        fill="#E6E9ED"
      ></path>
      <path
        fill="#1FAF4D"
        d="M479.996 170.656H330.668v-128h149.328l-21.312 64z"
      ></path>
      <path fill="#37DB6B" d="M266.67 0h128v128h-128z"></path>
      <g transform="translate(96 320)" fill="#CCD1D9">
        <path d="M64.004 106.656c0 17.688-14.328 32-32 32s-32-14.312-32-32c0-17.672 14.328-32 32-32s32 14.328 32 32z"></path>
        <circle cx="298.67" cy="117.33" r="32"></circle>
        <path d="M202.668 42.656c0 23.578-19.102 42.672-42.664 42.672S117.34 66.234 117.34 42.656C117.34 19.094 136.442 0 160.004 0s42.664 19.094 42.664 42.656z"></path>
      </g>
    </g>
  </svg>
);
