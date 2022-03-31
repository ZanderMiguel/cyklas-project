import React, { useState } from 'react';
import moment from 'moment';
import { Box, Typography, Avatar, Divider, IconButton } from '@mui/material';
import useStyles from '../Styles/Announce_style';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import usePost from '../../customHooks/usePost';
import ReactScrollableFeed from 'react-scrollable-feed';

function Comments({ postId, commentId }) {
  const { designs } = useStyles();
  const { post, data } = usePost();

  React.useMemo(() => {
    post('http://localhost:5000/comment', { announcement: postId });
  }, [commentId]);

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
        <ReactScrollableFeed>
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
                        <Typography
                          noWrap
                          sx={designs.UserName_Typography_Style}
                        >
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

                      <Box className = "actions" sx = {designs.Actions_Style}>
                        <Typography sx = {designs.EditComment_Button_Style}>
                          Edit comment
                        </Typography>

                        <Divider orientation="vertical" flexItem sx = {designs.DividerV_Style} />

                        <Typography sx = {designs.DeleteComment_Button_Style}>
                          Delete comment
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </div>
              );
            })}
        </ReactScrollableFeed>
      </Box>
    </>
  );
}

export default Comments;
