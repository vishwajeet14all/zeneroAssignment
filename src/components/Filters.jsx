import { useState } from "react";
import { Slider, MenuItem, Select, FormControl, InputLabel, Grid, Box, Typography } from "@mui/material";

const Filters = ({ onStatusChange, onValueChange }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000); // Adjust based on your data range

  const handleSliderChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
    onValueChange(newValue);
  };

  return (
    <Box sx={{ padding: 2, width: '100%' }}>
      <Grid container spacing={2}>
        {/* Status Filter */}
        <Grid item xs={12} sm={6} md={12}> {/* Responsive item sizes */}
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select defaultValue="All" onChange={(e) => onStatusChange(e.target.value)}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Slider Filter */}
        <Grid item xs={12} sm={6} md={12}>
          <Box sx={{ width: '100%' }}>
            <Slider
              value={[minValue, maxValue]}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={0}
              max={10000} // Adjust based on your data range
            />
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Opportunity Value Range: {minValue} - {maxValue}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
