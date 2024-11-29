import {
  styled,
  Select,
  SelectProps,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

const SelectBox = styled((props: PropsWithChildren<SelectProps>) => (
  <Select
    MenuProps={{
      sx: {
        "& .MuiMenuItem-root": {
          color: (theme) => "black",
        },
      },
    }}
    {...props}
  >
    {props.children}
  </Select>
))(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    textAlign: "left",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `#feb47b`,
  },
  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: `red`,
  },
  borderRadius: "8px",
  color: "#feb47b",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    color: "#feb47b",
  },
  "&  .MuiSelect-icon": {
    color: "#feb47b",
  },
}));

export const StSelect = ({
  required,
  labelId,
  label,
  helperText,
  error,
  ...restProps
}: PropsWithChildren<
  SelectProps & { helperText?: string | false; labelcolor?: string }
>) => {
  return (
    <>
      <FormControl fullWidth error={error}>
        <InputLabel
          required={required}
          size="small"
          sx={{
            background: restProps.labelcolor ?? "#fff",
            px: "5px",
            fontSize: "0.9rem",
            color: (theme) => `#feb47b !important`,
            "&.MuiInputLabel-shrink": {
              padding: "4px",
            },
            padding: 0,
          }}
          error={error}
          id={labelId}
        >
          {label}
        </InputLabel>
        <SelectBox error={error} {...restProps} size="small" fullWidth>
          {restProps.children}
        </SelectBox>
        {helperText && (
          <FormHelperText
            sx={{
              ...(error && { color: (theme) => theme.palette.error.main }),
            }}
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};
