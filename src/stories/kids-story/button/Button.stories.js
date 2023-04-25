import { Button } from './Button';

export default {
  title: 'Kids story/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    buttonType: { control: 'select'},
    customBackgroundColor: { control: 'color' },
    customFontColor: { control: 'color' },
    isUppercase: { control: 'boolean' },
    fontWeight: { control: 'select'},
    fontSize: { control: 'select'},
  },
};

export const defaultButton = {
  args: {
    label: 'Кнопка',
    buttonType: 'button',
    buttonSize: 'large',
    backgroundColor: 'transparent',
    fontColor: '#334155',
    // customBackgroundColor: null,
    // customFontColor: null,
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
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
    isUppercase: true,
    border: false,
    onClick: undefined
  }
};



// export const renderButtonsBySize = (Story, ButtonStories) => {

//   const buttonsObj = {
//     signUpButton1, signUpButton2, signUpButton3, signUpButton4, signUpButton5, signUpButton6
//   };

//   const makeNewButtonObj = () => {
//     const newButtonsObj = {};

//     for (let key in buttonsObj) {
//     newButtonsObj[key] = buttonsObj[key]['args']['buttonSize'];
//   };

//     return newButtonsObj;
//   };


//   console.log('aaa', makeNewButtonObj());

//   const createSizesArr = () => {
//     const sizesArr = Object.values(makeNewButtonObj());
//     let sortedSizesArr = sizesArr.filter((element, index, self) => {
//       return index === self.indexOf(element);
//     });

//     return sortedSizesArr;
//   };

//   console.log('bbb', createSizesArr());

//   const sortButtonsBySize = () => {
//     const newButtonsObj = makeNewButtonObj();
//     const sortedSizesArr = createSizesArr();

//     const sortedButtonsArr = [];

//     for (let size in sortedSizesArr) {
//       for (let element in newButtonsObj) {
//         if (sortedSizesArr[size] === newButtonsObj[element]) {
//           console.log('success', size, sortedSizesArr[size], newButtonsObj[element], element);
//           sortedButtonsArr.push(element);
//         };
//       };
//     };

//     return sortedButtonsArr;
//   };

//   console.log('ccc', sortButtonsBySize());




//   const arr = sortButtonsBySize();

//   arr.forEach(element => {
//     return (
//       <Story of={ButtonStories.element}/>
//     );
//   });
// };









  // const buttonsArr = [
  //   signUpButton1, signUpButton2, signUpButton3, signUpButton4, signUpButton5, signUpButton6
  // ];

  // const sizesArr = buttonsArr.map(element => element.args.buttonSize).sort();

  // const sortedSizesArr = new Set(sizesArr);

  // const sortButtonsArr = () => {
  //   const sortedButtonsArr = [];

    // sortedSizesArr.forEach(size => {
    //   buttonsArr.forEach(element => {
    //     if(size === element.args.buttonSize) {
    //       sortedButtonsArr.push(element);
    //     };
    //   });
    // });

  //   return sortedButtonsArr;
  // };

  // console.log('aaa', sortButtonsArr());

  // const ButtonList = (Story, ButtonStories) => {
  //   return (
  //     <Story of={ButtonStories.signUpButton1} />
  //   );
  // };





  // const buttonsArr = [
  //   signUpButton1, signUpButton2, signUpButton3, signUpButton4, signUpButton5, signUpButton6
  // ];

  // const sortButtonsArr = (arr, prop) => {
  //   prop = prop.split('.');
  //   const len = prop.lenght;

  //   arr.sort((a, b) => {
  //     let i = 0;
  //     while( i < len ) { a = a[prop[i]]; b = b[prop(i)]; i++; }
  //     if ( a < b ) {
  //       return -1;
  //     } else if ( a > b ) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   return arr;
  // };

  // const newArr = sortButtonsArr(buttonsArr, 'args.buttonSize');



