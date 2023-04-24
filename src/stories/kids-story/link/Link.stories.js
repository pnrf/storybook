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

/**
 * ### HTML-синтаксис:
 * ```HTML
 *<a class="link" role="button" href="#" tabIndex="_blank" rel="noopener noreferrer" ariaLabel="Личный кабинет" title="Перейти к авторизации в личный кабинет">Личный кабинет</>
 *```
 *
 * ### Внешний вид:
 */
export const defaultLink = {
  args: {
    label: 'Текст ссылки',
    backgroundColor: 'transparent',
    fontColor: '#8081BD',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px'
  },
  parameters: {

  }
};

export * from './Link.stories.js';
