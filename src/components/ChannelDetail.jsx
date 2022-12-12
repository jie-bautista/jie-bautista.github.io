import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from '@mui/material';

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Purchase from "./Purchase";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      {id === 'user' ?
        <><div style={{
          height: '300px',
          background: 'linear-gradient(90deg, #3E428C 0%, #F2B705 100%, #A904BF 100%)',
          zIndex: 10,
        }} /><Box
          sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '320px' },
            height: '326px',
            margin: 'auto',
            marginTop: '-93px',
          }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
              <CardMedia
                image = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt={channelDetail?.snippet?.title}
                sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
              <Typography variant="h6">
                User
              </Typography>
            </CardContent>
          </Box>
          <Purchase />
          </> :
        <Box>
          <div style={{
            height:'300px',
            background: 'linear-gradient(90deg, #3E428C 0%, #F2B705 100%, #A904BF 100%)',
            zIndex: 10,
          }} />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
      }
      {id === 'user' ?
        <h1>hello</h1> :
        <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} />
        </Box>
      }
    </Box>
  );
};

export default ChannelDetail;
