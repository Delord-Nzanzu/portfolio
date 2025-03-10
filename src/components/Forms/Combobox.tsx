import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import Select, { SingleValue, MultiValue } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface ComboboxProps {
  icons?: ReactNode;
  data?: OptionType[];
  placeholder?: string;
  value?: SingleValue<OptionType> | MultiValue<OptionType>;
  onChange?: (selected: SingleValue<OptionType> | MultiValue<OptionType>) => void;
  label?: string;
  isMulti?: boolean;
}

const Combobox: React.FC<ComboboxProps> = ({
  icons,
  data,
  placeholder = "Sélectionner...",
  value,
  onChange,
  label,
  isMulti = false,
}) => {
  return (
    <Box width="100%" sx={{ display: "flex", alignItems: "flex-end", mt: 0 }}>
      {icons}
      <Stack direction="row" spacing={0} sx={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          {label && (
            <Typography sx={{ fontFamily: "Courier Prime", fontSize: 14, color: "#fff" }}>
              {label}
            </Typography>
          )}
          <Select
            options={data}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            isSearchable
            isMulti={isMulti}
            styles={{
              option: (styles) => ({
                ...styles,
                color: "#000",
                backgroundColor: "#FFF",
                fontFamily: "Courier Prime",
              }),
            }}
          />
        </div>
      </Stack>
    </Box>
  );
};

export default Combobox;
