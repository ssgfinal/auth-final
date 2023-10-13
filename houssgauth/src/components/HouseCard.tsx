import styled from "styled-components";
import { HouseProps } from "../types/house";
import { houseServiceCategory } from "../assets/constant/serviceList";
import api from "../api/api";
import { authUrl } from "../assets/constant/urlConst";
import { color } from "../assets/theme";

interface House {
  house: HouseProps[];
}

const HouseCard: React.FC<House> = ({ house }) => {
  // 요청 승인하기
  const onApproval = async (accomNumber: number) => {
    console.log(typeof accomNumber);
    console.log(accomNumber);

    await api.patch(authUrl.houseApproval, null, {
      params: { accomNumber: accomNumber },
    });
    return alert("요청이 승인되었습니다.");
  };

  //요청 거절하기
  const onRefuse = async (accomNumber: number) => {
    await api.patch(authUrl.houseRefuse, null, {
      params: { accomNumber: accomNumber },
    });
    return alert("요청이 거절되었습니다.");
  };

  return (
    <>
      {house.length !== 0 ? (
        <>
          {house.map((house, index) => (
            <HouseWrapper key={index}>
              <NameBox>
                ✧&nbsp;{house.accomName}&nbsp;[{house.accomCategory}/
                {house.accomNumber}]&nbsp;✧
              </NameBox>
              <HouseImgBox src={house.img}></HouseImgBox>
              <div>
                <span>사업자번호&nbsp;</span>
                {house.businessNumber}
              </div>
              <div>
                <span>사업자&nbsp;</span>
                {house.id}
              </div>
              <div>
                <span>☎&nbsp;</span>
                {house.teleNumber}
              </div>
              <div>
                <span>주소&nbsp;</span>
                {house.accomAddress}
              </div>
              <div>
                <span>입/퇴실 시간&nbsp;</span>
                {house.checkIn}/{house.checkOut}
              </div>
              <div>
                <span>최저가&nbsp;</span>
                {house.minPrice.toLocaleString()}원~
              </div>
              <span>시설 및 서비스</span>
              <ServiceBox>
                {house.service.length !== 0 ? (
                  <>
                    {house.service.map((services, i) => {
                      if (
                        i >= 0 &&
                        i < houseServiceCategory.length &&
                        services
                      ) {
                        return (
                          <div key={i}>
                            &nbsp;•&nbsp;{houseServiceCategory[i].text}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </>
                ) : (
                  <>미등록</>
                )}
              </ServiceBox>
              <>
                <span>상세설명</span>
                {house.accomDetails}
              </>
              <ButtonBox>
                <RefuseBtn onClick={() => onRefuse(house.accomNumber)}>
                  거절
                </RefuseBtn>
                <ApprovalBtn onClick={() => onApproval(house.accomNumber)}>
                  승인
                </ApprovalBtn>
              </ButtonBox>
            </HouseWrapper>
          ))}
        </>
      ) : (
        <NullBox>승인 요청이 없습니다.</NullBox>
      )}
    </>
  );
};

export default HouseCard;

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

const NullBox = styled.div`
  font-size: 1.5rem;
  color: ${color.darkGrayColor};
  margin: 3rem;
`;
