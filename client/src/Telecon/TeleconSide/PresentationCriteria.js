import React from 'react';
import NoContent from '../../assets/ImageJaven/NoContent.png';
import { Box, Typography, Checkbox, Input, Button } from '@mui/material';
import { CoPresent } from '@mui/icons-material';
import ApplyScore from '../../Form_content/ApplyScore';

const dataCriteria = [
  {
    criteriaName: 'Organization',
    criteriaPoints: '15',
    attributes: [
      {
        attributeName: 'Appropriateness',
        attributePoints: '5',
      },
      {
        attributeName: 'In sequence',
        attributePoints: '5',
      },
      {
        attributeName: 'Citations',
        attributePoints: '5',
      },
    ],
  },
  {
    criteriaName: 'Content',
    criteriaPoints: '45',
    attributes: [
      {
        attributeName: 'Attention-getting',
        attributePoints: '5',
      },
      {
        attributeName: 'Well-defined terms',
        attributePoints: '5',
      },
      {
        attributeName: 'Accurate information',
        attributePoints: '10',
      },
      {
        attributeName: 'Relevant of the used materials',
        attributePoints: '10',
      },
      {
        attributeName: 'Points made are reflected well',
        attributePoints: '10',
      },
      {
        attributeName: 'Obvious conclusion',
        attributePoints: '5',
      },
    ],
  },
  {
    criteriaName: 'Presentation',
    criteriaPoints: '40',
    attributes: [
      {
        attributeName: 'Good gestures',
        attributePoints: '5',
      },
      {
        attributeName: 'Clear and audible voice',
        attributePoints: '5',
      },
      {
        attributeName: 'Controlled delivery',
        attributePoints: '5',
      },
      {
        attributeName: 'Good language and pronounciation skills',
        attributePoints: '5',
      },
      {
        attributeName: 'Effectiveness of visual aids',
        attributePoints: '5',
      },
      {
        attributeName: 'Controlled presentation length',
        attributePoints: '5',
      },
      {
        attributeName: 'Well communicated',
        attributePoints: '10',
      },
    ],
  },
];

function PresentationCriteria() {
  const [opendialogApplyScore, setOpenDialogApplyScore] = React.useState(false);

  const handleCreateApplyScore = () => {
    setOpenDialogApplyScore(true);
  };

  const handleCreateCloseApplyScore = () => {
    setOpenDialogApplyScore(false);
  };

  return (
    <div
      style={{
        width: '23.9rem',
        height: '98vh',
      }}
    >
      <Box
        sx={{
          width: 'relative',
          height: '2.5em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8em',
          padding: '0em 1em',
          margin: '0.5em 0.5em 1em 0.5em',
          backgroundColor: '#31353D',
          borderRadius: '0.4em',
          borderBottom: '1px solid #464646',
        }}
      >
        <CoPresent sx={{ fontSize: '1.2em', color: '#DEDEDE' }} />

        <Typography
          children="Presentation Criteria"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '600',
            textAlign: 'center',
            '&: hover': {
              cursor: 'default',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          height: '85vh',
          width: 'relative',
          overflowY: 'auto',
        }}
      >
        <Box
          sx={{
            width: 'relative',
            height: 'auto',
            display: 'flex',
            gap: '0.5em',
            alignItems: 'center',
            padding: '0em 0.5em',
          }}
        >
          <Checkbox sx={{ color: '#DEDEDE' }} />

          <Typography
            children="Exam"
            sx={{
              textTransform: 'Uppercase',
              fontSize: '0.8em',
              fontWeight: '600',
              color: '#DEDEDE',
            }}
          />
        </Box>

        <Typography
          sx={{
            color: '#8E8E8E',
            fontSize: '0.6em',
            fontWeight: '500',
            padding: '0em 1.5em',
            textAlign: 'center',
            marginBottom: '1em',
          }}
        >
          If this is checked, this presentation will be graded as exam.
        </Typography>

        {dataCriteria.map(function (items, index) {
          return (
            <Box
              key={index}
              sx={{
                height: 'auto',
                width: 'relative',
                padding: '0.5em 1em',
                margin: '0em 1.3em 0.5em 1.3em',
                borderRadius: '0.3em',
                backgroundColor: '#22252B',
              }}
            >
              <Box
                sx={{
                  height: 'auto',
                  width: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #464646',
                  marginBottom: '0.5em',
                  paddingBottom: '0.3em',
                }}
              >
                <Typography
                  children={items.criteriaName}
                  sx={{
                    color: '#DEDEDE',
                    fontSize: '0.9em',
                    fontWeight: '600',
                    width: '13em',
                    height: 'max-content',
                  }}
                />

                <Box flexGrow={1} />

                <Typography
                  children={items.criteriaPoints}
                  sx={{
                    color: '#007FFF',
                    fontSize: '0.9em',
                    fontWeight: '600',
                    width: '4em',
                    textAlign: 'center',
                    height: 'max-content',
                  }}
                />
              </Box>

              {items.attributes.map(function (items2, index) {
                return (
                  <Box
                    key={index}
                    sx={{
                      height: 'auto',
                      width: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.3em',
                    }}
                  >
                    <Typography
                      children={items2.attributeName}
                      sx={{
                        color: '#DEDEDE',
                        fontSize: '0.8em',
                        fontWeight: '500',
                        width: '14em',
                        height: 'max-content',
                        paddingBottom: '0.3em',
                      }}
                    />

                    <Box flexGrow={1} />

                    <Input
                      type="number"
                      defaultValue={items2.attributePoints}
                      sx={{
                        border: '1px solid #464646',
                        borderRadius: '0.3em',
                        padding: '0em 0.3em 0em 0.9em ',
                        width: '5em',
                        fontSize: '0.8em',
                        fontWeight: '600',
                        color: 'white',
                        '&: hover': {
                          border: '1px solid #464646',
                        },
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          );
        })}

        <Box
          sx={{
            width: 'relative',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0.8em 0em',
          }}
        >
          <Button
            variant="contained"
            children="Apply Score"
            onClick={handleCreateApplyScore}
            sx={{
              fontSize: '0.8em',
              fontWeight: '600',
              boxShadow: 'none',
              padding: '0.4em 2.5em',
              textTransform: 'Capitalize',
              borderRadius: '0.3em',
            }}
          />

          {opendialogApplyScore && (
            <ApplyScore
              open={opendialogApplyScore}
              close={handleCreateCloseApplyScore}
              maxWidth="sm"
              state={setOpenDialogApplyScore}
            />
          )}
        </Box>
      </Box>
    </div>
  );
}

export default PresentationCriteria;
