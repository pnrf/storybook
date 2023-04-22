import { Button } from './Button';

export default {
  title: 'Kids story/Button',
  component: Button,
  tags: ['autodocs'], // Автоматически добавляет в меню файл Docs
  argTypes: {
    buttonType: { control: 'select'},
    customBackgroundColor: { control: 'color' },
    customFontColor: { control: 'color' },
    isUppercase: { control: 'boolean' },
    fontWeight: { control: 'select'},
    fontSize: { control: 'select'},
  },
};

/**
 * Кнопка по умолчанию. Используется для тестирования в Storybook.
 */
export const defaultButton = {
  args: {
    label: 'Кнопка',
    buttonType: 'button',
    buttonSize: 'large',
    backgroundColor: 'transparent',
    fontColor: '#334155',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: true,
  }
};

/**
 * Кнопка применяется в `Header` десктопной версии сайта. Переход на страницу `Контакты`. В верстке она сделана через ссылку `<a>`
 */
export const signUpButton1 = {
  args: {
    label: 'Записаться на экскурсию',
    buttonType: 'button',
    buttonSize: 'extra-small',
    backgroundColor: '#8081BD',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    isUppercase: false,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в `Header` мобильной версии сайта. Переход на страницу `Контакты`. В верстке она сделана через ссылку `<a>`
 */
export const signUpButton2 = {
  args: {
    label: 'Записаться на экскурсию',
    buttonType: 'button',
    buttonSize: 'medium',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    isUppercase: false,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в выпадающием меню (бургер в мобильной версии). Переход на страницу `Контакты`. Сверстана через ссылку `<a>`
 */
export const signUpButton3 = {
  args: {
    label: 'Записаться на экскурсию',
    buttonType: 'button',
    buttonSize: 'extra-small',
    backgroundColor: '#FFF',
    fontColor: '#334155',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    isUppercase: false,
    border: true,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в секции `About` на странице `О центре`. Переход на страницу `Контакты`. Сверстана через ссылку `<a>`
 */
export const signUpButton4 = {
  args: {
    label: 'Записаться на первый урок',
    buttonType: 'button',
    buttonSize: 'large',
    backgroundColor: '#8081BD',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в секции `Intro` на главной странице. Отправляет данные формы на сервер.
 */
export const signUpButton5 = {
  args: {
    label: 'Записаться',
    buttonType: 'submit',
    buttonSize: 'large',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в форме `Запишитесь на персональную экскурсию` на странице `Контакты`. Отправляет данные формы на сервер.
 */
export const signUpButton6 = {
  args: {
    label: 'Записаться',
    buttonType: 'submit',
    buttonSize: 'xxxl',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в `Footer` мобильной версии сайта. Открывает `Dropdown navbar`.
 */
export const menuButton = {
  args: {
    label: 'Меню сайта',
    buttonType: 'button',
    buttonSize: 'medium',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в секции `Feedback` на разных страницах. Отправляет данные формы на сервер.
 */
export const feedbackFormButton1 = {
  args: {
    label: 'Отправить',
    buttonType: 'submit',
    buttonSize: 'large',
    backgroundColor: '#F6B31F',
    fontColor: '#334155',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в секции `Feedback` на разных страницах. Отправляет данные формы на сервер.
 */
export const feedbackFormButton2 = {
  args: {
    label: 'Отправить',
    buttonType: 'submit',
    buttonSize: 'large',
    backgroundColor: '#F6B31F',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в секции `Feedback` на разных страницах. Отправляет данные формы на сервер.
 */
export const feedbackFormButton3 = {
  args: {
    label: 'Отправить',
    buttonType: 'submit',
    buttonSize: 'large',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в карточке с отзывами на странице `Отзывы`.
 */
export const sourceButton1 = {
  args: {
    label: 'Источник',
    buttonType: 'button',
    buttonSize: 'extra-large',
    backgroundColor: '#FFF',
    fontColor: '#334155',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: true,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в карточке с отзывами на странице `Отзывы`.
 */
export const sourceButton2 = {
  args: {
    label: 'Источник',
    buttonType: 'button',
    buttonSize: 'extra-large',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в карточке с отзывами на странице `Отзывы`. Для мобильной версии сайта.
 */
export const sourceButton3 = {
  args: {
    label: 'Источник',
    buttonType: 'button',
    buttonSize: 'medium',
    backgroundColor: '#FFF6D1',
    fontColor: '#334155',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в карточке с отзывами на странице `Отзывы`. Для мобильной версии сайта.
 */
export const sourceButton4 = {
  args: {
    label: 'Источник',
    buttonType: 'button',
    buttonSize: 'medium',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в попапе на странице `Отзывы`. Для мобильной версии сайта.
 */
export const sourceButton5 = {
  args: {
    label: 'Источник',
    buttonType: 'button',
    buttonSize: 'small',
    backgroundColor: '#FDDC4E',
    fontColor: '#334155',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в попапе на странице `Новости`.
 */
export const moreButton1 = {
  args: {
    label: 'Подробнее',
    buttonType: 'button',
    buttonSize: 'large',
    backgroundColor: '#FFF',
    fontColor: '#334155',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
    isUppercase: true,
    border: true,
    onClick: undefined
  }
};

/**
 * Кнопка применяется в попапе на странице `Новости`.
 */
export const moreButton2 = {
  args: {
    label: 'Подробнее',
    buttonType: 'button',
    buttonSize: 'large',
    backgroundColor: '#EA5D4A',
    fontColor: '#FFF',
    customBackgroundColor: null,
    customFontColor: null,
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};






// export const bgrColor = {
//   args: {
//     type: 'button',
//     size: 'large',
//     label: 'Записаться',
//     bgrColor: '#EA5D4A',
//     fontColor: '#FFF',
//     backgroundColor: null,
//     color: null,
//     isUppercase: 'true',
//     fontWeight: '700',
//     fontSize: '16px',
//     lineHeight: '20px',
//     onClick: undefined,
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
