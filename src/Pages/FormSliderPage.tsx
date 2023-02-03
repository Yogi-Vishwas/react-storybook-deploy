import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import Form from 'Components/Forms/Form';
import FormSlider from 'Components/Forms/FormSlider';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import TableOfContent from 'Components/TableOfContent/TableOfContent';

const submitHandler = () => {
  return null;
};

const FormSliderPage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
        <PagePaper
          title="FormSlider"
          description="FormSlider component provides with a hassle free way to manage state of your formik sliders. This component uses Formik internally to manage state for your sliders."
        >
          <ComponentViewer
            title="Default FormSlider"
            code={`
        import Form from 'Components/Forms/Form';
        import FormSlider from 'Components/Forms/FormSlider';

            <Form initialValues={{slider: 1}} onSubmit={() => {}}>
              <FormSlider id="slider" label="Brightness" min={1} max={10} />
            </Form>
                `}
          >
            <Box sx={{width: 200}}>
              <Form initialValues={{slider: 4}} onSubmit={submitHandler}>
                <FormSlider id="slider" label="Brightness" min={1} max={10} />
              </Form>
            </Box>
          </ComponentViewer>

          <ComponentViewer
            title="Discrete FormSlider"
            code={`
        import Form from 'Components/Forms/Form';
        import FormSlider from 'Components/Forms/FormSlider';

            <Form initialValues={{slider: 3}} onSubmit={() => {}}>
              <FormSlider id="slider" label="Brightness" marks min={1} max={10} />
            </Form>
                `}
          >
            <Box sx={{width: 200}}>
              <Form initialValues={{slider: 3}} onSubmit={submitHandler}>
                <FormSlider id="slider" label="Brightness" marks min={1} max={10} />
              </Form>
            </Box>
          </ComponentViewer>

          <ComponentViewer
            title="Range FormSlider"
            code={`
        import Form from 'Components/Forms/Form';
        import FormSlider from 'Components/Forms/FormSlider';

            <Form initialValues={{slider: [30, 50]}} onSubmit={() => {}}>
              <FormSlider id="slider" label="Temperature" marks min={1} max={10} />
            </Form>
                `}
          >
            <Box sx={{width: 500}}>
              <Form initialValues={{slider: [30, 50]}} onSubmit={submitHandler}>
                <FormSlider id="slider" label="Temperature" marks min={1} max={100} />
              </Form>
            </Box>
          </ComponentViewer>

          <Table
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for form slider'},
              {name: 'label', type: 'string', desc: 'Label for form slider'},
              {name: 'other props', type: 'SliderProps', desc: 'Accepts all the other props of MUI Slider'},
            ]}
          />
        </PagePaper>
      </Box>
      <TableOfContent />
    </Stack>
  );
};

export default FormSliderPage;