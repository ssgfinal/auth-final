const loginUrl = {
  login: "user/log-in",
};

const authUrl = {
  houseApproval: "accom/approval",
  houseRefuse: "accom/approvalX",
  houseDelete: "auth/accom/del",
  issCoupon: "coupon/issued",
  delReview: "review/delete",
};

const mapUrl = {
  mapApproval: "auth/accom/add/request",
  mapDelete: "auth/accom/del/request",
  mapCoupon: "coupon/get-valid-coupons",
  mapReview: "auth/review",
};

export { loginUrl, authUrl, mapUrl };
