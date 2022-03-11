import React from 'react';
import axios from 'axios';
import Dialogform from '../../components/Dialogform';
import Pagination from '../../components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, TextField, Typography, Button, Divider } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import Masonry from '@mui/lab/Masonry';

function Image_GIF({ open, close, maxWidth, setImage }) {
  const [gifs, setGifs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const results = await axios('https://api.giphy.com/v1/gifs/trending', {
          params: {
            api_key: 'XxX3x09HDBNVWLAGVGLndWDiXNmw42gO',
            limit: 25,
          },
        });

        console.log(results);
        setGifs(results.data.data);
      } catch (err) {
        toast.error(
          <Typography>
            Unable to get Gifs, please try again in a few minutes.
          </Typography>,
          {
            position: 'top-right',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          }
        );
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const results = await axios('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'XxX3x09HDBNVWLAGVGLndWDiXNmw42gO',
          q: search,
          limit: 25,
        },
      });
      setGifs(results.data.data);
    } catch (err) {
      toast.error(
        <Typography>
          Unable to get Gifs, please try again in a few minutes.
        </Typography>,
        {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
        }
      );
    }

    setIsLoading(false);
  };

  return (
    <>
      <Dialogform open={open} close={close} maxWidth={maxWidth}>
        <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <Box width="100%">
          <Button fullWidth startIcon={<UploadIcon />} vairant="text">
            Upload Image
          </Button>
        </Box>
        <Divider
          children={<Typography children="or" />}
          sx={{ mt: 2, mb: 2 }}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="0.5rem"
        >
          <Box>
            <form>
              <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                size="small"
              />
              <Button
                disableRipple
                type="submit"
                variant="contained"
                sx={{ ml: 1 }}
                children="Go"
                onClick={handleSubmit}
              />
            </form>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ mr: 1, fontWeight: 700, fontSize: '0.8em' }}>
              POWERED BY
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '1.5em' }}>
              GIPHY
            </Typography>
          </Box>
        </Box>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={gifs.length}
        />
        <Box width={700}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Masonry columns={4} spacing={1}>
              {gifs.map((item) => {
                return (
                  <img
                    key={item.id}
                    src={item.images.fixed_width.url}
                    onClick={(item) => {
                      console.log(item.target.src);
                      setImage(item.target.src);
                    }}
                  />
                );
              })}
            </Masonry>
          )}
        </Box>
      </Dialogform>
    </>
  );
}

export default Image_GIF;
