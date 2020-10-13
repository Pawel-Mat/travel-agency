import React  from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
 
const OrderOptionDate = ({currentValue, setOptionValue}) => {
  return (
    <DatePicker 
      selected={currentValue} 
      onChange={setOptionValue}
      className={styles.input} />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;