import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StTextField = styled((props: TextFieldProps) => (
  <TextField size="small" variant="outlined" {...props} />
))(({ theme }) => ({
  borderRadius: "30px",
  fontSize: "0.9rem !important",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
    borderColor: `#feb47b !important`,
    borderWidth: `1px !important`,
  },
  "& .MuiInputLabel-root": {
    color: `#feb47b !important`,
    fontSize: "inherit",
  },
}));
