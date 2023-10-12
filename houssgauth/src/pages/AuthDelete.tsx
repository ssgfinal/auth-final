import { houseServiceCategory } from "../assets/constant/serviceList";
import styled from "styled-components";
import { color } from "../assets/theme";
import { deletehouse } from "../assets/constant/dummyData";

const AuthDelete = () => {
  return (
    <div>
      {deletehouse.map((deletehouse, index) => (
        <HouseWrapper key={index}>
          <NameBox>
            ✧&nbsp;{deletehouse.accomName}&nbsp;[{deletehouse.accomCategory}/
            {deletehouse.accomNumber}]&nbsp;✧
          </NameBox>
          <GrayBox>
            별점/리뷰&nbsp;(⭐{deletehouse.avgRating}/ 💌
            {deletehouse.reviewCount.toLocaleString()}개)
          </GrayBox>
          <HouseImgBox src={deletehouse.img}></HouseImgBox>
          <div>
            <span>사업자번호&nbsp;</span>
            {deletehouse.businessNumber}
          </div>
          <div>
            <span>관리자&nbsp;</span>
            {deletehouse.ownerId}
          </div>
          <div>
            <span>☎&nbsp;</span>
            {deletehouse.teleNumber}
          </div>
          <div>
            <span>주소&nbsp;</span>
            {deletehouse.accomAddress}
          </div>
          <div>
            <span>입/퇴실 시간&nbsp;</span>
            {deletehouse.checkIn}/{deletehouse.checkOut}
          </div>
          <div>
            <span>최저가&nbsp;</span>
            {deletehouse.minPrice.toLocaleString()}원~
          </div>
          <span>시설 및 서비스</span>
          <ServiceBox>
            {deletehouse.service.map((services, i) => {
              if (i >= 0 && i < houseServiceCategory.length && services) {
                return (
                  <div key={i}>&nbsp;•&nbsp;{houseServiceCategory[i].text}</div>
                );
              }
              return null;
            })}
          </ServiceBox>
          <ButtonBox>
            <RefuseBtn>거절</RefuseBtn>
            <ApprovalBtn>승인</ApprovalBtn>
          </ButtonBox>
        </HouseWrapper>
      ))}
    </div>
  );
};

export default AuthDelete;

const HouseWrapper = styled.div`
  width: 35%;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  margin: auto;
  padding: 4rem;
  border: 2px solid ${color.color1};
  border-radius: 0.5rem;
  text-align: left;

  span {
    color: ${color.color1};
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const HouseImgBox = styled.img`
  justify-self: center;
  width: 80%;
  border-radius: 0.5rem;
`;

const NameBox = styled.div`
  color: ${color.color1};
  font-size: 1.5rem;
  font-weight: bold;
`;

const GrayBox = styled.div`
  font-size: small;
  color: ${color.darkGrayColor};
`;

const ServiceBox = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const ApprovalBtn = styled.button`
  width: 50%;
  padding: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  color: ${color.backColor};
  background-color: ${color.color1};
  font-size: 1.2rem;
  &:hover {
    background-color: ${color.color3};
  }
`;

const RefuseBtn = styled.button`
  width: 50%;
  padding: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  color: ${color.red};
  background-color: ${color.lightGrayColor};
  font-size: 1.2rem;
  &:hover {
    color: ${color.backColor};
    background-color: ${color.red};
  }
`;
