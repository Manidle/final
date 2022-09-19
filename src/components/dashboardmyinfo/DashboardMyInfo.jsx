import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardMyInfo = () => {
  const navigate = useNavigate();

  function handler(props) {
    navigate(`/user/${props}`);
  }

  return (
    <Box sx={{ padding: "5px" }}>
      <div className="dashBoardContainer">
        <div className="dashBoardWrapper">
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuIcon />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "#F2E2FC",
              minWidth: "200px",
              padding: "20px 10px 20px 40px",
              borderRadius: 10,
            }}
          >
            <Stack className="dashBoardTitleContainer">
              <Typography
                className="dashBoardTitle"
                fontSize={22}
                fontWeight="bold"
                paddingBottom={1}
              >
                DASH BOARD
              </Typography>
            </Stack>
            <Stack className="dashBoardSubTitle" margin="10px 0px 0px 0px">
              <Typography
                className="dashBoardTitle"
                fontWeight="lighter"
                fontSize={14}
              >
                USER INFO
              </Typography>
              <Stack className="dashBoardMyInfoDetail">
                <Typography
                  color="#892CDC"
                  className="dashboardDetail"
                  onClick={() => {
                    handler("profile");
                  }}
                >
                  INFO
                </Typography>
                <Typography
                  className="dashboardDetail"
                  onClick={() => {
                    handler("update");
                  }}
                >
                  EDIT
                </Typography>
                <Typography
                  className="dashboardDetail"
                  onClick={() => {
                    handler("myposts");
                  }}
                >
                  MY POST
                </Typography>
                <Typography
                  className="dashboardDetail"
                  onClick={() => {
                    handler("mylikes");
                  }}
                >
                  MY POST LIKE
                </Typography>
                <Typography
                  className="dashboardDetail"
                  onClick={() => {
                    handler("myreply");
                  }}
                >
                  MY REPLY
                </Typography>
              </Stack>
            </Stack>
            <Stack className="dashBoardSubTitle" margin="10px 0px 0px 0px">
              <div className="dashBoardTravel">
                <Typography
                  className="dashBoardSubtitle"
                  fontWeight="lighter"
                  fontSize={14}
                >
                  LIKES
                </Typography>
              </div>
              <Stack className="dashBoardTravelDetail">
                <Typography className="dashboardDetail">STAY</Typography>
                <Typography className="dashboardDetail">ATTRACTION</Typography>
                <Typography className="dashboardDetail">TRAIN</Typography>
                <Typography className="dashboardDetail">RENTCAR</Typography>
              </Stack>
            </Stack>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default DashboardMyInfo;
