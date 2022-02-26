import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  TextField,
  Container,
  Box,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccAva from '../assets/Images/avatar_male.png';


function createData(ava,name, cls, sect) {
  return {ava, name, cls, sect };
}

const rows = [
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Paul Rudd', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Tom Holland', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Mang Boy', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Rey Paner', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Narrion Putik', 'Student', 'BSCS3A'),
];