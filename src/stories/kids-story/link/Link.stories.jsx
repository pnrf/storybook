import { Link } from './Link';

export default {
  title: 'Kids story/Link',
  component: Link,
  tags: ['autodocs'], // Автоматически добавляет в меню файл Docs
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
};

/**
 * Ссылка по умолчанию. Используется для тестирования в Storybook.
 */
export const defaultLink = {
  args: {
    label: 'Текст ссылки',
    backgroundColor: 'transparent',
    fontColor: '#334155',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px'
  }
};
