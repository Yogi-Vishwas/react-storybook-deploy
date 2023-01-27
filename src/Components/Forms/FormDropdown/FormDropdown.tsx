import Dropdown, {DropdownProps} from 'Components/Dropdown/Dropdown';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  [x: string]: string;
};

const FormDropdown: React.FC<DropdownProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id] && touched[id] && !disabled;
  const handleChange = useCallback((val: any) => setFieldValue(id, val), [id, setFieldValue]);

  return (
    <Dropdown
      id={id}
      value={values[id]}
      errorMessage={isError ? errors[id] : ''}
      onChange={handleChange}
      disabled={disabled}
      {...rest}
    />
  );
};

export default FormDropdown;
