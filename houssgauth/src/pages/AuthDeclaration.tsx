import styled from "styled-components";
import { reviews } from "../assets/constant/dummyData";
import { color } from "../assets/theme";
import hourClock from "../utils/hourClock";

const AuthDeclaration = () => {
  // auth/review 신고당한 리뷰 목록 요청(post)

  const onReviewDelete = () => {
    // TODO: review/delete 리뷰 삭제(delete)
  };

  return (
    <div>
      <>
        {reviews.map((reviews, index) => (
          <ReviewContainer key={index}>
            <ManagerContainer>
              <span>신고자</span>&nbsp;
              {reviews.managerId}
              <p>
                {reviews.accomName}({reviews.accomNumber})
              </p>
            </ManagerContainer>
            <br />

            <UserReviewContainer>
              <ReviewNumberBox>
                리뷰번호&nbsp;[{reviews.reviewNumber}]
              </ReviewNumberBox>
              <NicknameBox>{reviews.nickname}</NicknameBox>
              <CreationTimeBox>
                {hourClock(reviews.reviewCreationTime)}
              </CreationTimeBox>
              <CategoryBox>{reviews.roomCategory}</CategoryBox>
              <RatingBox>⭐{reviews.reviewRating}</RatingBox>
              {reviews.img ? (
                <>
                  <ImgBox src={reviews.img}></ImgBox>
                  <ImgContentBox>{reviews.reviewContent}</ImgContentBox>
                </>
              ) : (
                <NonImgContentBox>{reviews.reviewContent}</NonImgContentBox>
              )}
            </UserReviewContainer>
            <CommentContainer>
              {reviews.reviewCommentTime ? (
                <>
                  <TitleBox>💌숙소 답변</TitleBox>
                  <CommentTime>
                    {hourClock(reviews.reviewCommentTime)}
                  </CommentTime>
                  <CommentBox>{reviews.reviewComment}</CommentBox>
                </>
              ) : (
                <></>
              )}
            </CommentContainer>
            <ReviewDeleteBtn onClick={onReviewDelete}>삭제하기</ReviewDeleteBtn>
          </ReviewContainer>
        ))}
      </>
    </div>
  );
};

export default AuthDeclaration;

const ReviewContainer = styled.div`
  width: 35%;
  margin: auto;
  margin-bottom: 5rem;
  padding: 2rem;
  border: 2px solid ${color.color1};
  border-radius: 0.5rem;
  img {
    margin: auto;
    width: 90%;
  }
  span {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const ManagerContainer = styled.div`
  text-align: left;
  p {
    color: ${color.darkGrayColor};
  }
`;

const ReviewDeleteBtn = styled.button`
  cursor: pointer;
  border: 1px solid ${color.red};
  border-radius: 0.5rem;
  background-color: ${color.backColor};
  margin: 1rem;
  align-self: right;
  font-size: 1.2rem;
  color: ${color.red};
  &:hover {
    color: ${color.backColor};
    background-color: ${color.red};
  }
`;

const UserReviewContainer = styled.div`
  background-color: ${color.unSelectColor};
  padding: 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: flex-start;
`;

const ReviewNumberBox = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: left;
  font-weight: bold;
  color: ${color.color1};
  font-size: large;
`;

const NicknameBox = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  text-align: left;
  font-weight: bold;
`;

const CreationTimeBox = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: right;
  font-weight: bold;
`;

const CategoryBox = styled.div`
  text-align: left;
  font-weight: bold;
`;
const RatingBox = styled.div`
  text-align: right;
  font-weight: bold;
`;

const ImgBox = styled.img`
  border-radius: 0.5rem;
`;

const ImgContentBox = styled.div`
  text-align: left;
`;

const NonImgContentBox = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: left;
`;

const CommentContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  padding: 1rem;
  grid-gap: 1rem;
  border: 1px solid ${color.darkGrayColor};
  border-radius: 0.5rem;
`;

const TitleBox = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
`;

const CommentTime = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: right;
`;

const CommentBox = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: left;
`;
