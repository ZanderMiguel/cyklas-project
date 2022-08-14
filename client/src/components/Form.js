import { Button, TextField, FormControl } from '@mui/material';

function Form({ children, ...attrib }) {
  return <FormControl {...attrib}>{children}</FormControl>;
}

function Textfield({ ...attrib }) {
  return <TextField />;
}
function Buttons({ value, ...attrib }) {
  return (
    <>
      <Button {...attrib}>{value}</Button>
    </>
  );
}

export { Form, Textfield, Button };
