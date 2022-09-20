import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PurpleText from "./PurpleText";
import RoundBox from "./RoundBox";
import WhiteRoundBox from "./WhiteRoundBox";

const LeftSide = ({
  attractionName,
  attractionPrice,
  attractionAddress,
  date,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
      }}
    >
      <Typography
        className="dashBoardTitle"
        fontSize={16}
        fontWeight="bold"
        margin="auto"
        marginBottom="1rem"
      >
        {attractionName}
      </Typography>

      <RoundBox>{attractionAddress}</RoundBox>
      <WhiteRoundBox>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          {date}
          <Avatar
            alt="img"
            src="data:image/png;base64,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"
            sx={{ marginLeft: "1rem", width: 24, height: 24 }}
          />
        </Box>
      </WhiteRoundBox>
      <RoundBox>
        <PurpleText>{attractionPrice} 원</PurpleText>
      </RoundBox>
      <RoundBox>
        <PurpleText>예약하기</PurpleText>
      </RoundBox>
    </Box>
  );
};

export default LeftSide;
