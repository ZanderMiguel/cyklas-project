import React, { useState } from 'react';
import moment from 'moment';
import { Box, Typography, Avatar, Divider, IconButton } from '@mui/material';
import {
  BorderColorOutlined,
  DeleteOutlineOutlined,
} from '@mui/icons-material';
import useStyles from '../Styles/Announce_style';
import ReactScrollableFeed from 'react-scrollable-feed';
import axios from 'axios';

function Comments({ postId, commentId, socket }) {
  const { designs } = useStyles();
  const [data, setData] = useState();

  const handleEditComment = () => {};
  const handleDeleteComment = (_id) => {
    axios
      .delete('https://murmuring-basin-16459.herokuapp.com/comment/delete', {
        data: { commentID: _id },
      })
      .then(() => {
        socket.emit('create-comment');
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .post(
        'https://murmuring-basin-16459.herokuapp.com/comment',
        { announcement: postId },
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        if (!unmounted) {
          setData(res.data);
        }
      })
      .catch((err) => {
        if (!unmounted) {
          if (axios.isCancel(err)) {
            console.log(`request cancelled:${err.message}`);
          } else {
            console.log('another error happened:' + err.message);
          }
        }
      });
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
              const { author, content, createdAt, _id } = items;
              return (
                <div key={index}>
                  <Box className="User" sx={designs.User_Style}>
                    <Avatar
                      alt="Remy Sharp"
                      src={author.avatar}
                      sx={{ margin: '1px 0px', height: '40px', width: '40px' }}
                    />

                    <Box className="User-date" sx={designs.User_Date_Style}>
                      <Box>
                        <Typography
                          noWrap
                          sx={designs.UserName_Typography_Style}
                        >
                          {author.name}
                        </Typography>

                        <Box className="date" sx={designs.Date_Style}>
                          <Typography sx={designs.Date_Typography_Style}>
                            {moment(createdAt).format('MMMM DD YYYY / h:mm a')}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        className="content"
                        fontSize="0.9rem"
                        sx={{
                          margin: '0.5em 0em',
                        }}
                      >
                        {content}
                      </Box>

                      {JSON.parse(localStorage.userData).data.user._id ===
                        author.userID && (
                        <Box className="actions" sx={designs.Actions_Style}>
                          <Box
                            onClick={handleEditComment}
                            sx={{
                              display: 'flex',
                              gap: '0.5em',
                              width: 'auto',
                              height: 'auto',
                              '&: hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <BorderColorOutlined
                              sx={{ color: '#585670', fontSize: '0.9em' }}
                            />

                            <Typography sx={designs.EditComment_Button_Style}>
                              Edit comment
                            </Typography>
                          </Box>

                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={designs.DividerV_Style}
                          />

                          <Box
                            onClick={() => handleDeleteComment(_id)}
                            sx={{
                              display: 'flex',
                              gap: '0.5em',
                              width: 'auto',
                              height: 'auto',
                              '&: hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <DeleteOutlineOutlined
                              sx={{ color: '#585670', fontSize: '0.9em' }}
                            />

                            <Typography sx={designs.DeleteComment_Button_Style}>
                              Delete comment
                            </Typography>
                          </Box>
                        </Box>
                      )}
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
