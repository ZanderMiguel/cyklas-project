import React from 'react';
import moment from 'moment';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import useStyles from '../Styles/Announce_style';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import usePost from '../../customHooks/usePost';

function Comments({ postId }) {
  const { designs } = useStyles();
  const { post, data } = usePost();

  React.useMemo(() => {
    post('http://localhost:5000/comment', { announcement: postId });
  }, []);

  return (
    <>
      <Box className="View-comments" sx={designs.View_Comments_Style}>
        <Typography noWrap sx={designs.View_Comments_Typography_Style}>
          {data && data.length}
        </Typography>
        <Typography noWrap sx={designs.View_Comments_Typography_Style}>
          Comments
        </Typography>
      </Box>
      <Box
        className="comments-wrapper"
        height="auto"
        maxHeight={300}
        overflow="auto"
      >
        {data &&
          data.map((items, index) => {
            const { author, content, createdAt } = items;
            return (
              <div key={index}>
                <Box className="User" sx={designs.User_Style}>
                  <Avatar
                    alt="Remy Sharp"
                    src={AvatarIcon}
                    sx={{ margin: '1px 0px', height: '40px', width: '40px' }}
                  />

                  <Box className="User-date" sx={designs.User_Date_Style}>
                    <Box display="flex" alignItems="center">
                      <Typography noWrap sx={designs.UserName_Typography_Style}>
                        {author.name}
                      </Typography>

                      <Box
                        className="date"
                        sx={(designs.Date_Style, { ml: '0.6em' })}
                      >
                        <Typography sx={designs.Date_Typography_Style}>
                          {moment(createdAt).format('MMMM DD YYYY / h:mm a')}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="content" fontSize="0.9rem">
                      {content}
                    </Box>
                  </Box>
                </Box>
              </div>
            );
          })}
      </Box>
    </>
  );
}

export default Comments;
