import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
  Link,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HotPost from "./HotPost";

const hotPosts = [
  {
    postId: 1,
    title: "맛있는 매운탕 코스",
    contents: "test contents",
    likeCount: 1,
    readCount: 1,
    boardName: "서울",
  },
  {
    postId: 2,
    title: "맛있는 매운탕 코스",
    contents: "test contents",
    likeCount: 15,
    readCount: 1,
    boardName: "경주",
  },
  {
    postId: 3,
    title: "맛있는 매운탕 코스",
    contents: "test contents",
    likeCount: 111,
    readCount: 1,
    boardName: "부산",
  },
  {
    postId: 4,
    title: "맛있는 매운탕 코스",
    contents: "test contents",
    likeCount: 133,
    readCount: 1,
    boardName: "인천",
  },
  {
    postId: 5,
    title: "맛있는 매운탕 코스",
    contents: "test contents",
    likeCount: 123,
    readCount: 1,
    boardName: "대구",
  },
  {
    postId: 5,
    title: "맛있는 매운탕 코스",
    contents: "test contents",
    likeCount: 123,
    readCount: 1,
    boardName: "광주",
  },
];

const HotPostCardView = ({ handleRoute }) => {
  return (
    <CardContent>
      <Grid container columnSpacing={5} rowSpacing={3} paddingX={2}>
        {hotPosts.map((post) => (
          <Grid item key={post.postId} md={6} xs={12}>
            <HotPost post={post} handleRoute={handleRoute} />
          </Grid>
        ))}
      </Grid>
    </CardContent>
  );
};

export default HotPostCardView;
