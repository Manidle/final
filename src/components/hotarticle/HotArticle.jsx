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

const HotArticle = () => {
  return (
    <Card variant="outlined" sx={{ margin: "10px" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight="bold">
            핫한 게시글
          </Typography>
        }
        action={
          <Typography variant="h5" color="#892CDC" fontWeight="bold">
            <Link to="#">더보기</Link>
          </Typography>
        }
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "40px 70px 0 40px",
        }}
      />

      <CardContent>
        <Grid container columnSpacing={5} rowSpacing={3} paddingX={2}>
          {hotArticles.map((article) => (
            <Grid item key={article.article_id} md={6} xs={12}>
              <Box>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      margin: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Typography noWrap color="#892CDC">
                      {article.location}
                    </Typography>
                    <Typography noWrap fontWeight="bold" marginLeft={1}>
                      {article.title}
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      display: "flex",
                      color: "#892CDC",
                      margin: "10px",
                    }}
                  >
                    <FavoriteIcon />
                    <Typography>{article.likes}</Typography>
                  </div>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HotArticle;
