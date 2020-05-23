import { useRouter } from "next/router";
import styled from "styled-components";
import NoBirms from "./no-birms";
import { useState, useEffect } from "react";
import useSWR from "swr";
import fetch from "node-fetch";
import { Flex, Box } from "../../components/grid";

export default function () {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/birms", fetcher);
  if (error) return <Box>Error loading birms, please retry.</Box>;
  if (!data) return <Box>Loading birms...</Box>;

  const birmCards = data.map((b) => <BirmCard data={b} key={b.id} />);
  return <Flex flexFlow="column" gap="1em">{birmCards}</Flex>;
}

const StyledBirmCard = styled(Flex)`
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    border-radius: 50%;
    width: 5em;
    height: 5em;
    object-fit: cover;
  }
`;


function BirmCard({ data }) {
  return (
    <StyledBirmCard>
      <Box>
        <img src={`https://picsum.photos/seed/${data.id}/200/300`} alt={data.name}/>
      </Box>
      <Box>
        <h1>{data.name}</h1>
      </Box>
    </StyledBirmCard>
  );
}
