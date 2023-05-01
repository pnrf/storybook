import { Link } from './Link';

export default {
  title: 'Kids story/Components/Link',
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

/**
 * Применяется в `Header`. При клике -- переход на страницу `Контакты`.
 */
export const locationAddress = {
  args: {
    label: 'Москва, ул. Муравская д.38, к.1',
    backgroundColor: null,
    fontColor: '#EA5D4A',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17px'
  }
};

/**
 * Применяется в `Header`. При клике -- переход на страницу `Контакты`.
 */
export const locationOffice = {
  args: {
    ...locationAddress.args,
    label: 'ЖК Мир Митино',
  }
};

/**
 * Применяется в `Header`. При клике -- переход на страницу `Контакты`.
 */
export const locationSubway = {
  args: {
    ...locationAddress.args,
    label: 'М. Пятницкое шоссе',
    fontColor: '#0E95D3',
  }
};

/**
 * Применяется в `Header`. При клике -- переход на страницу `Контакты`.
 */
export const callbackOrderLink = {
  args: {
    ...locationAddress.args,
    label: 'Заказать обратный звонок',
    fontWeight: '700',
    fontSize: '10px',
    lineHeight: '12px'
  }
};

