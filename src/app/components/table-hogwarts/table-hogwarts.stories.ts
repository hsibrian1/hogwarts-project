import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { TableHogwartsComponent } from './table-hogwarts.component';
import { BaseData } from 'src/app/interfaces';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  component: TableHogwartsComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, BrowserAnimationsModule],
    }),
  ],
  excludeStories: /.*data$/,
  title: 'Table Hogwarts Component',
} as Meta;

const getInfo = (): BaseData[] => {
  const newArr: BaseData[] = [];

  for (let i = 0; i < 5; i++) {
    newArr.push({
      name: `Example Name (${i + 1})`,
      patronus: `Example Patronus (${i + 1})`,
      age: (i + 3) * 3,
      image: 'https://picsum.photos/200/300',
    });
  }
  return newArr;
};

const DEFAULT_COLUMNS = [
  {
    columnDef: 'name',
    header: 'Nombre',
    textField: 'name',
  },
  {
    columnDef: 'patronus',
    header: 'Patronus',
    textField: 'patronus',
  },
  {
    columnDef: 'age',
    header: 'Edad',
    textField: 'age',
  },
  {
    columnDef: 'image',
    header: 'Foto',
    textField: 'image',
  },
];

const DEFAULT_DISPLAYED_COLUMNS = DEFAULT_COLUMNS.map((v) => v.columnDef);

const Template: Story<TableHogwartsComponent> = (args) => ({
  component: TableHogwartsComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  data: [],
  columns: DEFAULT_COLUMNS,
  displayedColumns: DEFAULT_DISPLAYED_COLUMNS,
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  ...Default.args,
  data: getInfo(),
};
