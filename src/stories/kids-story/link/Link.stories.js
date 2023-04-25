import { Link } from './Link';

export default {
  title: 'Kids story/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
};

export const defaultLink = {
  args: {
    label: 'Текст ссылки',
    backgroundColor: 'transparent',
    fontColor: '#8081BD',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px'
  }
};

export * from './Link.stories.js';