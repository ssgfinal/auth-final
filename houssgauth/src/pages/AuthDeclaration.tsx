import styled from "styled-components";
import DeclarationCard from "../components/DeclarationCard";
import api from "../api/api";
import { useEffect, useState } from "react";
import { mapUrl } from "../assets/constant/urlConst";
import { ReviewProps } from "../types/review";

const AuthDeclaration = () => {
  const [review, setReview] = useState<ReviewProps[]>([]);

  const getReview = async () => {
    try {
      const resp = await api.get(mapUrl.mapReview);
      return setReview(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <DeclarationWrapper>
      <DeclarationCard review={review} />
    </DeclarationWrapper>
  );
};

export default AuthDeclaration;

const DeclarationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  margin: 5rem 0;
`;
