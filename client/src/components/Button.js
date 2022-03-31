import React from 'react';
import CusButton from '@mui/material/Button';

function Button({
  content,
  variant,
  startIcon,
  backgroundColor,
  color,
  hoverColour,
  fullWidth,
  borderRadius,
  borderColor,
  ...rest
}) {
  return (
    <>
      <CusButton
        disableRipple
        fullWidth={fullWidth}
        variant={variant}
        startIcon={startIcon}
        children={content}
        {...rest}
      ></CusButton>
    </>
  );
}

export default Button;
