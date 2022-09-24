import React from "react";
import "./featured.css";
import Carousel from "react-material-ui-carousel";

const Featured = () => {
  // 캐러셀 이미지 모음
  const images = [
    {
      src: "https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg",
    },
    {
      src: "https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg",
    },
    {
      src: "https://t1.daumcdn.net/cfile/tistory/99128B3E5AD978AF20",
    },
  ];

  return (
    <>
      <div className="carouselContainer">
        <div className="carouselWrapper">
          <Carousel
            indicators={true}
            animation="fade"
            autoPlay={true}
            navButtonsAlwaysVisible={true}
            sx={{
              paddingBottom: "5rem",
            }}
          >
            {images.map((image, i) => (
              <div
                style={{
                  width: "80%",
                  height: "30vw",
                  maxHeight: "400px",
                  marginLeft: "10%",
                  marginRight: "10%",
                }}
              >
                <img
                  src={image.src}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    minHeight: "200px",
                    maxHeight: "400px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Featured;
