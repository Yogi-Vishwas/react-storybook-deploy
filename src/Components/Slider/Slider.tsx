import {FormHelperText, Slider as MuiSlider, SliderProps as MuiSliderProps, Typography} from '@mui/material';
import React, {useCallback, memo} from 'react';

export interface SliderProps extends MuiSliderProps {
  id?: string;
  label?: string;
  disabled?: boolean;
  onChange?: (val: any) => void;
  minDistance?: number;
  errorMessage?: string | Array<any>;
  helperText?: string;
}

const Slider: React.FC<SliderProps> = ({
  id,
  label,
  disabled,
  onChange,
  minDistance,
  errorMessage,
  helperText,
  ...restProps
}) => {
  const isError = !!errorMessage;
  const handleChange = useCallback(
    (_event: Event, newValue: number | number[], activeThumb: number) => {
      if (!onChange) return;
      if (!Array.isArray(newValue)) {
        onChange(newValue);
      } else if (newValue[1] - newValue[0] < minDistance!) {
        if (activeThumb === 0) {
          const clamped = Math.min(newValue[0], 100 - minDistance!);
          onChange([clamped, clamped + minDistance!]);
        } else {
          const clamped = Math.max(newValue[1], minDistance!);
          onChange([clamped - minDistance!, clamped]);
        }
      } else {
        onChange(newValue);
      }
    },
    [minDistance, onChange],
  );

  return (
    <>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <MuiSlider id={id} onChange={handleChange} {...restProps} />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </>
  );
};

export default memo(Slider);
