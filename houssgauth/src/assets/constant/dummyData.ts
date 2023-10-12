import { reviewImg } from "../images/index";

export const coupons = [
  {
    couponNumber: "abc12345",
    couponName: "10월 한글날 이벤트",
    discount: 50000,
    expirationDate: "2023-10-09",
    expirationStatus: 1,
  },
  {
    couponNumber: "sss12345",
    couponName: "12월 크리스마스 쿠폰 등록",
    discount: 50000,
    expirationDate: "2023-12-31",
    expirationStatus: 0,
  },
];

export const reviews = [
  {
    reviewNumber: 1,
    reviewContent: "요끠 완죤 별룽 the love쓥니드ㅏ",
    reviewRating: 1.5,
    reviewCreationTime: "2023-10-11 18:00:00",
    reviewComment: "님 신고",
    reviewCommentTime: "2023-10-11 20:00:00",
    managerId: "메롱월드",
    reportStatus: 1,
    reservationNumber: 123456789,
    roomNumber: 1234,
    accomNumber: 12,
    img: reviewImg,
    roomCategory: "패밀리룸",
    accomName: "메롱월드호텔",
    nickname: "나는야 앗성유저",
  },
  {
    reviewNumber: 2,
    reviewContent: "요끠 완죤 별룽 the love쓥니드ㅏ!씌기 구ㅣchan씁nida",
    reviewRating: 2,
    reviewCreationTime: "2023-10-11 18:00:00",
    reviewComment: "님 신고",
    reviewCommentTime: "2023-10-11 20:00:00",
    managerId: "메롱월드",
    reportStatus: 1,
    reservationNumber: 123456789,
    roomNumber: 1234,
    accomNumber: 12,
    img: null,
    roomCategory: "패밀리룸",
    accomName: "메롱월드호텔",
    nickname: "나는야 앗성유저",
  },
];

export const house = [
  {
    accomNumber: 11,
    accomName: "T Hotel",
    accomAddress: "강원도 영월군 무릉도원면 명마동길 44-37",
    teleNumber: "0212345678",
    accomCategory: "호텔",
    accomDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab magni velit incidunt nam ducimus esse quia reprehenderit sed molestiae, harum eaque adipisci saepe recusandae voluptas repellat laudantium, architecto at!",
    checkIn: "10:00",
    checkOut: "15:00",
    businessNumber: "141-81-18585",
    img: reviewImg,
    service: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    avgRating: 0,
    minPrice: 110000,
    reviewCount: 0,
    ownerId: "tmanager123",
  },
];

export const deletehouse = [
  {
    accomNumber: 12,
    accomName: "A Hotel",
    accomAddress: "경기도 가평군 가평읍 태봉두밀로 441",
    teleNumber: "01012345678",
    accomCategory: "호텔",
    accomDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab magni velit incidunt nam ducimus esse quia reprehenderit sed molestiae, harum eaque adipisci saepe recusandae voluptas repellat laudantium, architecto at!",
    checkIn: "10:00",
    checkOut: "15:00",
    businessNumber: "141-81-18585",
    img: reviewImg,
    service: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    avgRating: 3.0,
    minPrice: 110000,
    reviewCount: 100,
    ownerId: "amanager123",
  },
];
