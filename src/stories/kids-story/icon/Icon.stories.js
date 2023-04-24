import { Icon } from './Icon';

export default {
  title: 'Kids story/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
};

export const defaultIcon = {
  args: {
    label: 'Текст ссылки',
    backgroundColor: 'transparent',
    fontColor: '#8081BD',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px'
  }
};

export * from './Icon.stories.js';
