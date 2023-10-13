import styled from "styled-components";
import HouseCard from "../components/HouseCard";
import { useEffect, useState } from "react";
import api from "../api/api";
import { mapUrl } from "../assets/constant/urlConst";
import { HouseProps } from "../types/house";

const AuthHouse = () => {
  const [house, setHouse] = useState<HouseProps[]>([]);

  const getHouse = async () => {
    const resp = await api.get(mapUrl.mapApproval);
    return setHouse(resp.data);
  };

  useEffect(() => {
    getHouse();
  }, []);

  console.log(house);
  return (
    <HouseWrapper>
      <HouseCard house={house} />
    </HouseWrapper>
  );
};

export default AuthHouse;

const HouseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  margin: 5rem 0;
`;
