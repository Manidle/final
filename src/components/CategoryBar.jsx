import { ThemeProvider, Box, createTheme, Tabs, Tab, AppBar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react'

const CategoryBar = () => {
    const theme = createTheme({
        palette: {
            primary: {
                // 가장 어두운 보라
            main: '#52057B',
            },
            secondary: {
                // 가장 밝은 보라
            main: '#BC6FF1',
            },
            info:{
                // 중간 보라
                main: '#892CDC',
            },
        },
    });
    
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <Tabs value={value} onChange={handleChange} textColor='secondary' indicatorColor='secondary' centered >
                    <Tab label="STAY" {...a11yProps(0)} />
                    <Tab label="ATTRACTION" {...a11yProps(1)} />
                    <Tab label="TRAIN" {...a11yProps(2)} />
                    <Tab label="RENTCAR" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                STAY 검색창
            </TabPanel>
            <TabPanel value={value} index={1}>
                ATTRACTION 검색창
            </TabPanel>
            <TabPanel value={value} index={2}>
                TRAIN 검색창
            </TabPanel>
            <TabPanel value={value} index={3}>
                RENTCAR 검색창
            </TabPanel>
            <TabPanel value={value} index={0}>
                STAY 리스트
            </TabPanel>
            <TabPanel value={value} index={1}>
                ATTRACTION 리스트
            </TabPanel>
            <TabPanel value={value} index={2}>
                TRAIN 리스트
            </TabPanel>
            <TabPanel value={value} index={3}>
                RENTCAR 리스트
            </TabPanel>
        </Box>
    </ThemeProvider>
  )
}

export default CategoryBar