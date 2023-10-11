import styled from "styled-components";
import { useEffect, useRef } from "react";
// import { useState } from "react";
import { color } from "../assets/theme";
// import { CouponList } from "../types/coupon";
import { coupons } from "../assets/constant/dummyData";

const AuthCoupon = () => {
  // const [coupons, setCoupons] = useState<CouponList[]>([]);
  const issuName = useRef<HTMLInputElement | null>(null);
  const issDiscount = useRef<HTMLInputElement | null>(null);
  const issExpirationDate = useRef<HTMLInputElement | null>(null);

  const couponList = () => {
    // TODO: 쿠폰 리스트 요청coupon/get-valid-coupons(get)
  };

  useEffect(() => {
    couponList();
  }, []);

  const onIssued = () => {
    const couponName = issuName.current?.value;
    const couponDiscount = issDiscount.current?.value;
    const couponExpirationDate = issExpirationDate.current?.value;
    console.log(couponName, couponDiscount, couponExpirationDate);
    //TODO: 쿠폰 등록 요청 coupon/issued(post)
  };

  return (
    <>
      <IssuedContainer>
        <div>
          <span>쿠폰명&nbsp;</span>
          <input type="text" ref={issuName} maxLength={15}></input>
        </div>
        <div>
          <span> 할인가&nbsp;</span>
          <input type="number" ref={issDiscount}></input>
        </div>
        <div>
          <span>유효기간&nbsp;</span>
          <input type="date" ref={issExpirationDate}></input>
        </div>
        <button onClick={onIssued}>등록</button>
      </IssuedContainer>
      <br />
      <hr />
      <div>
        {coupons.map((coupon, index) => (
          <CouponListContainer key={index}>
            <ContentsBox>
              {coupon.couponName}({coupon.couponNumber})
            </ContentsBox>
            <ContentsBox>{coupon.discount.toLocaleString()}원</ContentsBox>
            <ContentsBox>{coupon.expirationDate}</ContentsBox>
            <ContentsBox>
              {coupon.expirationStatus === 1 ? "행사완료" : "행사중"}
            </ContentsBox>
          </CouponListContainer>
        ))}
      </div>
    </>
  );
};

export default AuthCoupon;

const IssuedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 1rem;

  input {
    outline: none;
    border: 1px solid ${color.darkGrayColor};
    padding: 0.2rem;
    border-radius: 0.5rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    border: none;
    color: ${color.backColor};
    background-color: ${color.color1};
    border-radius: 0.5rem;
  }

  button:hover {
    background-color: ${color.color3};
  }
`;

const CouponListContainer = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  border-bottom: 1px solid ${color.unSelectColor};
`;

const ContentsBox = styled.p`
  padding-left: 85px;
  text-align: left;
`;
