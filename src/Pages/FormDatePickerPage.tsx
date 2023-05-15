import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import Form from 'Components/Forms/Form';
import FormDatePicker from 'Components/Forms/FormDatePicker';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import TableOfContent from 'Components/TableOfContent/TableOfContent';

const submitHandler = () => {
  return null;
};

const FormDatePickerPage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
        <PagePaper
          title="FormDatePicker"
          description="FormDatePicker component provides with a hassle free way to manage state of your date pickers. This component uses Formik internally to manage state for your date pickers."
        >
          <ComponentViewer
            title="Default FormDatePicker"
            code={`
        import Form from 'Components/Forms/Form';
        import FormSlider from 'Components/Forms/FormDatePicker';

            <Form initialValues={{date: new Date('2023-01-27')}} onSubmit={() => {}}>
              <FormDatePicker id="date" label="D.O.B" />
            </Form>
                `}
          >
            <Box sx={{width: 200}}>
              <Form initialValues={{date: new Date('2023-01-27')}} onSubmit={submitHandler}>
                <FormDatePicker id="date" label="D.O.B" />
              </Form>
            </Box>
          </ComponentViewer>

          <PropsTable
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for input field'},
              {name: 'label', type: 'string', desc: 'Label for input field'},
              {name: 'value', type: 'string | number'},
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
              {name: 'helperText', type: 'string', desc: 'Display text below input field'},
              {
                name: 'errorMessage',
                type: 'string',
                desc: (
                  <>
                    Displays error message if <b>isTouched</b> is true
                  </>
                ),
              },
              {
                name: 'onChange',
                type: 'func',
                desc: 'Callback fired when the value is changed',
              },
            ]}
          />
        </PagePaper>
      </Box>
      <TableOfContent />
    </Stack>
  );
};

export default FormDatePickerPage;
