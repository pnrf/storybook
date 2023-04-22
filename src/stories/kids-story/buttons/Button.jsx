import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Вариации кнопок, использованных в дизайн-макете.
 */
export const Button = ({
    label,
    buttonType,
    buttonSize,
    backgroundColor,
    fontColor,
    customBackgroundColor,
    customFontColor,
    fontWeight,
    fontSize,
    lineHeight,
    isUppercase,
    border,
    ...props }) => {

  return (
    <button
      type={buttonType}
      className={['button', `button_size_${buttonSize}`].join(' ')}
      style={
        {
          backgroundColor: `${customBackgroundColor ? customBackgroundColor : backgroundColor}`,
          color: `${customFontColor ? customFontColor : fontColor}`,
          fontWeight: `${fontWeight && fontWeight}`,
          fontSize: `${fontSize && fontSize}`,
          lineHeight: `${lineHeight && lineHeight}`,
          textTransform: `${isUppercase ? 'uppercase' : 'none'}`,
          border: `${border ? '1px solid #8081BD' : 'none'}`
        }
      }
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
  buttonSize: PropTypes.oneOf(['extra-small', 'small', 'medium', 'large', 'extra-large', 'xxxl']),
  /**
  * Эти опции не применяются, если выбран **customBackgroundColor**.
  * Нужно сбросить значения - загнутая стрелка вверху справа таблицы.
  */
  backgroundColor: PropTypes.oneOf(['transparent', '#8081BD', '#EA5D4A', '#F6B31F']),
    /**
  * Эти опции не применяются, если выбран **customFontColor**.
  * Нужно сбросить значения - загнутая стрелка вверху справа таблицы.
  */
  fontColor: PropTypes.oneOf(['#FFF', '#000']),
  customBackgroundColor: PropTypes.string,
  customFontColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['400', '500', '600', '700']),
  fontSize: PropTypes.oneOf(['12px', '14px', '16px', '18px', '20px', '70px']),
  lineHeight: PropTypes.string,
  /**
  * Если *'true'*, то текст кнопки отобразится заглавными буквами.
  */
  isUppercase: PropTypes.bool,
  /**
  * Отобразить или убрать обводку кнопки.
  */
  border: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Текст кнопки',
  buttonType: 'button',
  buttonSize: 'large',
  backgroundColor: 'transparent',
  fontColor: '#334155',
  customBackgroundColor: null,
  customFontColor: null,
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '20px',
  isUppercase: false,
  border: false,
  onClick: undefined,
};
