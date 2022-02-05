import React from 'react';
import CusButton from '@mui/material/Button';

function Button({
  content,
  variant,
  startIcon,
  colour,
  color,
  hoverColor,
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
        sx={{
          backgroundColor: { colour },
          borderRadius: { borderRadius },
          borderColor: { borderColor },
          color: { color },
          '&:hover': {
            backgroundColor: { hoverColor },
          },
        }}
        onClick={onClick}
        {...rest}
      >
        {content}
      </CusButton>
    </>
  );
}

export default Button;
