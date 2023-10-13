interface ReviewProps {
  reviewNumber: number;
  reviewContent: string;
  reviewRating: number;
  reviewCreationTime: string;
  reviewComment?: string;
  reviewCommentTime?: string;
  managerId: string;
  reportStatus: number;
  reservationNumber: number;
  roomNumber: number;
  accomNumber: number;
  img?: string;
  roomCategory: string;
  accomName: string;
  nickname: string;
}
export type { ReviewProps };
