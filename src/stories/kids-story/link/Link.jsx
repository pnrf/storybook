import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

/**
 * Вариации ссылок, использованных в дизайн-макете.
 */
export const Link = ({
  label,
  backgroundColor,
  fontColor,
  fontWeight,
  fontSize,
  lineHeight,
  ...props }) => {

  return (
    <a
      className={['link'].join(' ')}
      style={{
        role: 'button',
        href: '#',
        tabIndex: '_blank',
        rel: "noopener noreferrer",
        ariaLabel: "Личный кабинет",
        title: "Перейти к авторизации в личный кабинет",
        backgroundColor: `${backgroundColor && backgroundColor}`,
        color: `${fontColor && fontColor}`,
        fontWeight: `${fontWeight && fontWeight}`,
        fontSize: `${fontSize && fontSize}`,
        lineHeight: `${lineHeight && lineHeight}`,
      }}
      {...props}
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['400', '500', '600', '700']),
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
}

Link.defaultProps = {
  label: 'Текст ссылки',
  backgroundColor: 'transparent',
  fontColor: '#334155',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '24px'
};
