import {Stack} from '@mui/material';
import Button from 'Components/Button/Button';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';

const ButtonPage = () => {
  return (
    <PagePaper
      title="Button"
      description="Buttons are one of the most common UI elements. They make it possible for users to interact with a system and take action by making selections. 
      Buttons are used on forms, website homepages, dialog boxes, and toolbars. It is important to differentiate between buttons and links."
    >
      <ComponentViewer
        title="Default Button"
        code={`import Button from 'Components/Button/Button';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';

const ButtonPage = () => {
  return (
    <PagePaper title="Button">
      <ComponentPaper>
        <Button>
          Click here
        </Button>
      </ComponentPaper>
    </PagePaper>
  );
};

export default ButtonPage;`}
      >
        <Button>Click here</Button>
      </ComponentViewer>
      <ComponentViewer
        title="Contained Button"
        code={`import Button from 'Components/Button/Button';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';

const ButtonPage = () => {
  return (
    <PagePaper title="Button">
      <ComponentPaper>
        <Button variant="contained">
          Click here
        </Button>
      </ComponentPaper>
    </PagePaper>
  );
};

export default ButtonPage;`}
      >
        <Button variant="contained">Click here</Button>
      </ComponentViewer>
      <ComponentViewer
        title="Outlined Button"
        code={`import Button from 'Components/Button/Button';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';

const ButtonPage = () => {
  return (
    <PagePaper title="Button">
      <ComponentPaper>
        <Button variant="outlined">
          Click here
        </Button>
      </ComponentPaper>
    </PagePaper>
  );
};

export default ButtonPage;`}
      >
        <Button variant="outlined">Click here</Button>
      </ComponentViewer>

      <ComponentViewer
        title="Colors"
        code={`import Button from 'Components/Button/Button';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';

const ButtonPage = () => {
  return (
    <PagePaper title="Button">
      <ComponentPaper>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Click here
          </Button>
          <Button variant="contained" color="secondary">
            Click here
          </Button>
        </Stack>
      </ComponentPaper>
    </PagePaper>
  );
};

export default ButtonPage;`}
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Click here
          </Button>
          <Button variant="contained" color="secondary">
            Click here
          </Button>
        </Stack>
      </ComponentViewer>
      <Table
        data={[
          {name: 'color', type: 'string', desc: 'color of the button'},
          {name: 'isLoading', type: 'bool', defaultVal: 'false', desc: 'loading state of the button'},
          {name: 'variant', type: 'string', defaultVal: 'text', desc: '"text" | "contained" | "outlined"'},
          {name: 'disabled', type: 'bool', defaultVal: 'false'},
        ]}
      />
    </PagePaper>
  );
};

export default ButtonPage;
