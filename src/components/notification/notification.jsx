import s from './notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <p className={s.notification}>{message}</p>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
