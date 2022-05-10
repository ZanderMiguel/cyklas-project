import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'

import {
    Box,
    Typography,
    Avatar,
    Button,
    Divider,
    Input,
  } from '@mui/material';
  import ReactScrollableFeed from 'react-scrollable-feed';
  import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
  import {
    BorderColorOutlined,
    DeleteOutlineOutlined,
  } from '@mui/icons-material';


function CommentArea({socket,commentId,activityID}) {
    const [activityComment, setActivityComment] = useState(null);
    const [commentContent, setCommentContent] = useState('')
    

   useEffect(()=>{
    axios.post('http://localhost:5000/activity/get/comment', {activityID}).then((res) => {
        setActivityComment(res.data)
      })
      .catch((err) => console.log(err.message));
   },[commentId])

   const handleComment = () => {

    if (commentContent !== '') {
    axios
      .put('http://localhost:5000/activity/create/comment', {
        activityID,
        commentObj: {
          author: {
            name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
              JSON.parse(localStorage.userData).data.user.lastName
            }`,
            userID: JSON.parse(localStorage.userData).data.user._id,
            avatar: JSON.parse(localStorage.userData).data.user.image,
          },
          content: commentContent,
          commentDate: Date.now(),
        },
      })
      .then((res) => 
      {setCommentContent('')
      socket.emit('create-comment')})
      .catch((err) => console.log(err))}
  };


  return (
    <Box
    className="Student-container"
    sx={{
      height: 'auto',
      width: 'relative',
      marginBottom: '1em',
      borderRadius: '0.3em 0.3em 0em 0em',
      padding: '0.3em 0em 1em 0em',
      backgroundColor: 'white',
      '&: hover': {
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderBottom: '4px solid #007FFF',
        transition: 'all 250ms',
      },
    }}
  >
    <Typography
      sx={{
        height: 'max-content',
        fontSize: '15px',
        fontWeight: '600',
        textTransform: 'Uppercase',
        color: '#6D6B85',
        width: 'auto',
        flexGrow: 1,
        margin: '0.5em 0em 0em 0em',
        padding: '0em 1.5em',
      }}
    >
      Comment Area
    </Typography>

    <Typography
      sx={{
        height: 'max-content',
        fontSize: '0.7em',
        fontWeight: '500',
        textTransform: 'none',
        color: '#8E8E8E',
        width: 'auto',
        flexGrow: 1,
        margin: '0em 0em 1.5em 0em',
        padding: '0em 2em',
      }}
    >
      {JSON.parse(localStorage.userData).data.user.userType === 'Professor' ? "See your student's concerns about the activity." : "Send your concerns here about this activity"}
    </Typography>

    <Box
      className="View-comments"
      sx={{
        borderTop: '1px solid #DBDBDB',
        backgroundColor: '#FCFCFC',
        height: 'auto',
        width: 'relative',
        padding: '0em 1.5em',
        display: 'flex',
        gap: '8px',
      }}
    >
      <Typography
        noWrap
        sx={{
          height: 'max-content',
          width: 'max-content',
          color: '#3F3D56',
          fontSize: '12px',
          padding: '1px 0px',
          margin: '5px 0px',
        }}
      >
        {activityComment && activityComment.length}
      </Typography>
      <Typography
        noWrap
        sx={{
          height: 'max-content',
          width: 'max-content',
          color: '#3F3D56',
          fontSize: '12px',
          padding: '1px 0px',
          margin: '5px 0px',
        }}
      >
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
       {activityComment && activityComment.map((items, index)=> {
         return (
          <div key={index}>
          <Box
            className="User"
            sx={{
              padding: '7px 15px',
              gap: '13px',
              display: 'flex',
              width: 'relative',
              height: 'auto',
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={items.author.avatar}
              sx={{
                margin: '1px 0px',
                height: '40px',
                width: '40px',
              }}
            />

            <Box className="User-date" sx={{ margin: '3px 0px' }}>
              <Box>
                <Typography
                  noWrap
                  sx={{
                    fontSize: '14px',
                    color: '#3F3D56',
                    fontWeight: '600',
                  }}
                >
                  {items.author.name}
                </Typography>

                <Box
                  className="date"
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  <Typography
                    sx={{
                      width: 'max-content',
                      fontSize: '10px',
                      color: '#8E8E8E',
                      fontWeight: '500',
                      fontStyle: 'Italic',
                    }}
                  >
                   {moment(items.commentDate).format('LL')}
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
                {items.content}
              </Box>

              <Box
                className="actions"
                sx={{
                  marginTop: '0.3em',
                  display: 'flex',
                  gap: '1em',
                }}
              >
                <Box
             
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

                  <Typography
                    sx={{
                      fontSize: '0.5em',
                      fontWeight: '400',
                      color: '#3F3D56',
                    }}
                  >
                    Edit comment
                  </Typography>
                </Box>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    margin: '0.2em 0em',
                  }}
                />

                <Box
           
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

                  <Typography
                    sx={{
                      fontSize: '0.5em',
                      fontWeight: '400',
                      color: '#3F3D56',
                    }}
                  >
                    Delete comment
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
         )})}
      </ReactScrollableFeed>
    </Box>

    <Divider sx={{ mb: 2 }} />

    <Box
      className="write-comment"
      sx={{
        padding: '0px 15px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: 'relative',
        height: 'auto',
      }}
    >
      <Avatar alt="Remy Sharp" src={JSON.parse(localStorage.userData).data.user.image} />

      <Input
        placeholder="Write a comment..."
        disableUnderline
        value={commentContent}
        onChange={(event) => setCommentContent(event.target.value)}
        sx={{
          border: '1px solid #DBDBDB',
          borderRadius: '0.3em',
          color: '#3F3D56',
          fontSize: '0.9em',
          padding: '0.3em 0.8em',
          width: '100%',
          '&: hover': {
            border: '1px solid #007FFF',
            transition: 'all 300ms',
          },
        }}
      />

      <Button
        children="Send"
        onClick={handleComment}
        variant="contained"
        sx={{
          fontWeight: '600',
          boxShadow: 'none',
        }}
      />
    </Box>
  </Box>
  )
}

export default CommentArea