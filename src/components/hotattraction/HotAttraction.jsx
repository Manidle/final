import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
} from "@mui/material";

const HotAttractions = [
  {
    attraction_id: "1",
    src: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=4dbc2549dfba179004f2acdacceb65c7fb501f88823274ceb8397bde485209b7&o=",
    location: "양평",
    title: "치명적인 관광지",
  },
  {
    attraction_id: "2",
    src: "https://pix10.agoda.net/hotelImages/66178/0/a6814d8a47dd5b7870c568bd159033d1.jpg?ca=0&ce=1&s=1024x768",
    location: "양평",
    title: "치명적인 관광지",
  },
  {
    attraction_id: "3",
    src: "https://digital.ihg.com/is/image/ihg/intercontinental-phu-quoc-5630347934-2x1",
    location: "양평",
    title: "치명적인 관광지",
  },
  {
    attraction_id: "4",
    src: "https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg",
    location: "양평",
    title: "치명적인 관광지",
  },
];

const HotAttraction = () => {
  return (
    <Card variant="outlined" sx={{ margin: "10px" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight="bold">
            핫한 관광지
          </Typography>
        }
        action={
          <Typography
            display="flex"
            variant="h5"
            color="#892CDC"
            fontWeight="bold"
          >
            <Link to="#">더보기</Link>
          </Typography>
        }
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "40px 70px 0 40px",
        }}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        {HotAttractions.map((attraction) => (
          <Card
            key={attraction.attraction_id}
            sx={{
              width: "250px",
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
              borderRadius: "30px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={attraction.src}
                alt="Hot Posts"
                height="250px"
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  padding: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    variant="h5"
                    color="#52057B"
                    fontWeight="bold"
                    margin={1}
                  >
                    {attraction.location}
                  </Typography>
                  <Typography variant="body2" color="#892CDC" fontWeight="bold">
                    {attraction.title}
                  </Typography>
                </div>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default HotAttraction;
