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
    attractionId: 360,
    name: "쌍암공원",
    src: "https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg",

    address: "광주광역시 광산구 첨단중앙로182번길 39",
    description:
      "철쭉꽃 숲들과 소나무숲이 있어 상쾌함과 시원함을 더해주는 공원",
    price: 0,
    likeCount: 997,
  },
  {
    attractionId: 170,
    src: "https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg",

    name: "창원단감테마공원",
    address: "경상남도 창원시 의창구 동읍 동읍로 359번길 27",
    description:
      "전국 최초로 단감을 소재로 조성한 테마공원으로 아이들이 뛰어놀 수 있는 드넓은 잔디광장에 대형 데크무대와 단감그네, 바람개비 조형물 등이 설치되어 있어 공원을 찾는 방문객들에게 다양한 즐길거리를 선사한다.",
    price: 2000,
    likeCount: 996,
  },
  {
    attractionId: 68,
    name: "소쇄원",
    src: "https://digital.ihg.com/is/image/ihg/intercontinental-phu-quoc-5630347934-2x1",

    address: "전라남도 담양군 가사문학면 소쇄원길 17",
    description:
      "1983년 7월 20일 사적 제304호로 지정되었다가 2008년 5월 2일 명승 제40호로 변경되었다. 전체 면적은 4,060㎡(지정구역), 118,866㎡(보호구역)이다. 이곳은 물이 흘러내리는 계곡을 사이에 두고 각 건물을 지어 자연과 인공이 조화를 이루는 대표적 정원이다.",
    price: 2000,
    likeCount: 995,
  },
  {
    attractionId: 1,
    name: "안동문화관광지",
    address: "안동시 관광단지로 346-30 (성곡동)",
    src: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=4dbc2549dfba179004f2acdacceb65c7fb501f88823274ceb8397bde485209b7&o=",

    description: "운동.숙박.휴양시설을 갖춘 체류형복합문화단지",
    price: 1000,
    likeCount: 994,
  },
  {
    attractionId: 105,
    name: "옹기테마공원",
    address: "서울특별시 신내로21길 116",
    description:
      "다양한 전통문화 체험프로그램 참여가 가능한 옹기를 테마로 조성된 공원",
    src: "https://pix10.agoda.net/hotelImages/66178/0/a6814d8a47dd5b7870c568bd159033d1.jpg?ca=0&ce=1&s=1024x768",

    price: 2000,
    likeCount: 993,
  },
];

const HotAttraction = ({ handleRoute }) => {
  return (
    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
      {HotAttractions.map((attraction) => (
        <ContentCard
          attraction={attraction}
          handleRoute={() => handleRoute(attraction.attractionId)}
        />
      ))}
    </CardContent>
  );
};

export default HotAttraction;
