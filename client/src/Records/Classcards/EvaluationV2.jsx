import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import EvaluationRoom from './EvaluationRoom';
import EvaluationRatingKeys from './EvaluationRatingKeys';
import EvaluationTable from './EvaluationTable';
import _ from 'lodash';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function EvaluationV2() {
  const rating = React.useRef({});
  const { evalID } = useParams();
  console.log(evalID);
  const [cc, setCC] = React.useState(null);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/cards/getData', {
        evalID,
      })
      .then((res) => {
        setCC(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <Container maxWidth="lg" sx={{ padding: '2em 0em' }}>
      <Grid container item xs={12}>
        <Grid item xs={12} sx={{ marginBottom: '1em' }}>
          <Typography
            children="How would you evaluate this Professor?"
            sx={{
              width: 'relative',
              height: 'max-content',
              textAlign: 'center',
              fontSize: '1.5em',
              fontWeight: '600',
              color: '#3F3D56',
            }}
          />
        </Grid>

        {cc && <EvaluationRoom cc={cc} />}

        <EvaluationRatingKeys />

        <EvaluationTable rating={rating} />

        <Grid
          item
          xs={12}
          sx={{ padding: '0.3em', display: 'flex', justifyContent: 'center' }}
        >
          <Button
            onClick={() => {
              axios
                .post('http://localhost:5000/evaluation/create', {
                  rating:
                    Object.values(rating.current).reduce(
                      (prev, el) => parseInt(prev) + parseInt(el)
                    ) / 24,
                  professor: cc.professor,
                  student: cc.student.stdID,
                  classCard: {
                    RoomName: cc.classRecord[0].RoomName,
                    roomID: cc.classRecord[0]._id,
                  },
                })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
            }}
            variant="contained"
            children="Submit"
            sx={{
              textTransform: 'Capitalize',
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              boxShadow: 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EvaluationV2;
