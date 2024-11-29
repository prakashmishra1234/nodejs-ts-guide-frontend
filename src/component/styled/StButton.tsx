import { styled, Button, ButtonProps } from "@mui/material";

export const StButton = styled(
  ({ buttonRef, ...props }: ButtonProps & { buttonRef?: any }) => {
    return (
      <Button variant="contained" size="small" {...props} ref={buttonRef} />
    );
  }
)(({ theme, color }) => ({
  background: "linear-gradient(135deg, #7f00ff, #e100ff, #ff0080, #00dbde)",
  fontWeight: "400",
  transitionProperty: "transform",
  transitionTimingFunction: "ease-in-out",
  backfaceVisibility: "hidden",
  WebkitFontSmoothing: "subpixel-antialiased",
  "&:hover": {
    background: "#7f00ff",
  },
}));
