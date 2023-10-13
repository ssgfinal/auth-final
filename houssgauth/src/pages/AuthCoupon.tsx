import { useEffect, useState } from "react";
import CouponCard from "../components/CouponCard";
import { CouponProps } from "../types/coupon";
import api from "../api/api";
import { mapUrl } from "../assets/constant/urlConst";

const AuthCoupon = () => {
  const [coupon, setCoupon] = useState<CouponProps[]>([]);

  const getCoupon = async () => {
    try {
      const resp = await api.get(mapUrl.mapCoupon);
      return setCoupon(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoupon();
  }, []);

  return (
    <>
      <CouponCard coupon={coupon} />
    </>
  );
};

export default AuthCoupon;
