import { Visibility } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { ChangeEventHandler, KeyboardEventHandler, ReactNode } from "react";

interface ITextFieldInputProps {
  label?: string;
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  multiline?: boolean;
  placeholder?: string;
  type?: string;
  onBlur?: () => void;
  invalid?: boolean;
  error?: string;
  visi?: boolean;
  labelError?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  startIcon?: ReactNode;
  showPassWord?: () => void;
  autoFocus?: boolean;
}

const TextFiels: React.FC<ITextFieldInputProps> = ({
  label,
  id,
  value,
  onChange,
  multiline = false,
  placeholder,
  type = "text",
  onBlur,
  invalid = false,
  error,
  visi = false,
  labelError,
  onKeyDown,
  startIcon,
  showPassWord,
  autoFocus = false,
}) => {
  return (
    <FormControl fullWidth error={invalid || !!error} sx={{ marginBottom: 2 }}>
      {label && (
        <Box
          component="label"
          htmlFor={id}
          sx={{
            color: "gray",
            fontFamily: "Courier Prime",
            display: "block",
          }}>
          {label}
        </Box>
      )}
      <OutlinedInput
        id={id}
        sx={{
          width: "100%",
          bgcolor: "#FFF",
          fontFamily: "Courier Prime",
        }}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        size="small"
        multiline={multiline}
        rows={multiline ? 4.5 : 1}
        type={type}
        placeholder={placeholder}
        startAdornment={
          startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          )
        }
        endAdornment={
          visi &&
          showPassWord && (
            <InputAdornment position="end">
              <IconButton onClick={showPassWord}>
                <Visibility sx={{ color: "#192C56" }} />
              </IconButton>
            </InputAdornment>
          )
        }
        onBlur={onBlur}
      />
      {(invalid || error) && (
        <FormHelperText style={{ marginLeft: -1 }}>{labelError}</FormHelperText>
      )}
    </FormControl>
  );
};

export default TextFiels;
