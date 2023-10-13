import styled from "styled-components";
import DeleteCard from "../components/DeleteCard";
import { useState, useEffect } from "react";
import api from "../api/api";
import { mapUrl } from "../assets/constant/urlConst";
import { HouseProps } from "../types/house";

const AuthDelete = () => {
  const [deletehouse, setDeletehouse] = useState<HouseProps[]>([]);

  const getDeleteHouse = async () => {
    const resp = await api.get(mapUrl.mapDelete);
    return setDeletehouse(resp.data);
  };

  useEffect(() => {
    getDeleteHouse();
  }, []);

  return (
    <DeleteWrapper>
      <DeleteCard deletehouse={deletehouse} />
    </DeleteWrapper>
  );
};

export default AuthDelete;

const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  margin: 5rem 0;
`;
