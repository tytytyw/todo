import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

class Item extends React.Component {

  render() {
    const { value, index, isDone, onClickDone } = this.props;

    return (
      <span
      onClick={() => onClickDone(index)}
      className={
        classnames({
          [styles.content]: true,
          [styles.done]: isDone
        })
      }>
        { value }
      </span>
    );
  }
}

Item.propTypes = {
  index: PropTypes.number,
  isDone: PropTypes.bool,
  value: PropTypes.string,
  onClickDone: PropTypes.func
};

export default Item;
