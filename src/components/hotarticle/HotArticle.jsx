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

const hotArticles = [
  {
    article_id: "1",
    location: "경주",
    title: "맛있는 매운탕 코스",
    likes: 345,
  },
  {
    article_id: "2",
    location: "경주",
    title: "100일 기념으로 다녀온 경주 여행!",
    likes: 345,
  },
  {
    article_id: "3",
    location: "경주",
    title: "이틀동안 술만 먹은 코스ㅋㅋ",
    likes: 89,
  },
  {
    article_id: "4",
    location: "경주",
    title: "맛있는 매운탕 코스",
    likes: 345,
  },
  {
    article_id: "5",
    location: "경주",
    title: "빈티지 카페 투어 2탄",
    likes: 124,
  },
  {
    article_id: "6",
    location: "경주",
    title: "형들 담주 경주갈건데 코디 추천 좀 봐줘",
    likes: 345,
  },
];

const HotArticle = ({ handleRoute }) => {
  return (
    <CardContent>
      <Grid container columnSpacing={5} rowSpacing={3} paddingX={2}>
        {hotArticles.map((article) => (
          <Grid item key={article.article_id} md={6} xs={12}>
            <HotPost article={article} handleRoute={handleRoute} />
          </Grid>
        ))}
      </Grid>
    </CardContent>
  );
};

export default HotArticle;
