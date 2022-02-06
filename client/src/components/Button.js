import React from 'react';
import CusButton from '@mui/material/Button';

function Button({
  content,
  variant,
  startIcon,
  backgroundColor,
  color,
  hoverColour,
  onClick,
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
        onClick={onClick}
        {...rest}
        children={content}
      ></CusButton>
    </>
  );
}

export default Button;
