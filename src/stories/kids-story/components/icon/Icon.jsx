import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

/**
 * - На этой странице вы можете протестировать компонент `Icon`.
 * - Пропсы заданы по умолчанию. Вам остается лишь выбрать нужные значения.
 * - Чтобы обнулить значения, кликните по изогнутой стрелке (справа вверху таблицы).
 */
export const Icon = ({
  label,
  backgroundColor,
  fontColor,
  fontWeight,
  fontSize,
  lineHeight,
  ...props }) => {

  return (
    <a
      className={['Icon'].join(' ')}
      style={{
        backgroundColor: `${backgroundColor && backgroundColor}`,
        color: `${fontColor && fontColor}`,
        fontWeight: `${fontWeight && fontWeight}`,
        fontSize: `${fontSize && fontSize}`,
        lineHeight: `${lineHeight && lineHeight}`,
      }}
      role='button'
      href='/'
      tabIndex='_blank'
      rel="noopener noreferrer"
      ariaLabel="Личный кабинет"
      title="Перейти к авторизации в личный кабинет"
      {...props}
    >
      {label}
    </a>
  );
};

Icon.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['400', '500', '600', '700']),
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
}

Icon.defaultProps = {
  label: 'Текст иконки',
  backgroundColor: 'transparent',
  fontColor: '#8081BD',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '24px'
};
