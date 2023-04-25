import { ArgTypes, Canvas, Controls, Meta, Source, Stories, Story, Subtitle, Title } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';
import {signUpButton1, signUpButton2, signUpButton3, signUpButton4, signUpButton5, signUpButton6} from './Button.stories';

export const renderButtonsBySize = (Story, ButtonStories) => {

  const buttonsObj = {
    signUpButton1, signUpButton2, signUpButton3, signUpButton4, signUpButton5, signUpButton6
  };

  const makeNewButtonObj = () => {
    const newButtonsObj = {};

    for (let key in buttonsObj) {
    newButtonsObj[key] = buttonsObj[key]['args']['buttonSize'];
  };

    return newButtonsObj;
  };


  const createSizesArr = () => {
    const sizesArr = Object.values(makeNewButtonObj());
    let sortedSizesArr = sizesArr.filter((element, index, self) => {
      return index === self.indexOf(element);
    });

    return sortedSizesArr;
  };

  const sortButtonsBySize = () => {
    const newButtonsObj = makeNewButtonObj();
    const sortedSizesArr = createSizesArr();

    const sortedButtonsArr = [];

    for (let size in sortedSizesArr) {
      for (let element in newButtonsObj) {
        if (sortedSizesArr[size] === newButtonsObj[element]) {
          sortedButtonsArr.push(element);
        };
      };
    };

    return sortedButtonsArr;
  };


  const arr = sortButtonsBySize();

  arr.forEach(element => {
    return (
      <Story of={ButtonStories.element}/>
    );
  });
};

console.log('ooo', Story, ButtonStories, renderButtonsBySize(Story, ButtonStories));

