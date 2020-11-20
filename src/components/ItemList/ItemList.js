import React from 'react';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

class ItemList extends React.Component {

  render () {
  const { todoItem, onClickDone, onClickDelete } = this.props;

    return (
    <ol className={styles.list}>
      {
        todoItem.map(
          item =>
            <li
              className={styles.item}
              key={item.index}
            >
              <Checkbox
                color="primary"
                checked={item.isDone}
                onClick={() => onClickDone(item.index)}
              />
              <Item className={styles.content}
                value={item.value}
                onClickDone={onClickDone}
                index={item.index}
                isDone={item.isDone}
              />
              <IconButton
                className={styles.delete}
                index={item.index}
                onClick={() => onClickDelete(item.index)}
              >
              </IconButton>
            </li>
        )
      }
    </ol>
    );
  }
}

ItemList.propTypes = {
  index: PropTypes.number,
  isDone: PropTypes.bool,
  value: PropTypes.string
};

export default ItemList;
