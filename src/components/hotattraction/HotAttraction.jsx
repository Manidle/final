import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
  Link,
} from "@mui/material";
import ContentCard from "./ContentCard";

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
  {
    attraction_id: "5",
    src: "https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg",
    location: "양평",
    title: "치명적인 관광지",
  },
];

const HotAttraction = ({ handleRoute }) => {
  return (
    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
      {HotAttractions.map((attraction) => (
        <ContentCard attraction={attraction} handleRoute={handleRoute} />
      ))}
    </CardContent>
  );
};

export default HotAttraction;
