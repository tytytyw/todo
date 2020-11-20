import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from './Todo.module.css';
import PropTypes from 'prop-types';
// localStorage.clear()
class Todo extends React.Component {
  state = {
    items: JSON.parse(localStorage.getItem('items')) || [
      {
        value: 'открыть холодильник',
        isDone: true,
        index: 0,
      }, 
      {
        value: 'вытащить слона',
        isDone: false,
        index: 1,
      }, 
      {
        value: 'положить оленя',
        isDone: false,
        index: 2,
      }, 
      {
        value: 'закрыть холодильник',
        isDone: false,
        index: 3,
      },
    ],
  };

  filter(items, filter) {
   switch(filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter( item => !item.isDone);
    case 'done':
      return items.filter( item => item.isDone);           
    default:
    return items;
   }
}
 
  render () {
    const { items, filter } = this.state;
    const visibleItems = this.filter(items, filter);

    const onClickFilter = filter => {
      this.setState({ filter });
    };

    const onClickDelete = index => {
      const newItemList = this.state.items.filter(item => item.index !== index);
      newItemList.forEach(item => {

        if (item.index > index) {
          item.index--;
        }
      });
      this.setState({items: [...newItemList]});
      localStorage.setItem('items', JSON.stringify(newItemList));
    };

    const onClickDone = index => {
      const newItemList = this.state.items.map(item => {
        const newItem = {...item};

        if (item.index === index) {
          newItem.isDone = !item.isDone;
        }

        return newItem;
      });
      localStorage.setItem('items', JSON.stringify(newItemList));
      this.setState({items: JSON.parse(localStorage.getItem('items'))});
    };

    const onClickAdd = value => {
      const newItemList = [
        ...items,
        {
          value,
          isDone: false,
          index: this.state.items.length,
        }
      ];

      localStorage.setItem('items', JSON.stringify(newItemList));
      this.setState(state => ({
        items:[...newItemList]
      }));};

    const selectedDelete = () => {
      const newItemList = [...this.state.items];
        let count = 0;
        newItemList.forEach(item => {

          if (item.isDone === true) {
            count++;
          }
          item.index-=count;
      });
        localStorage.setItem('items', JSON.stringify(newItemList.filter(item => item.isDone !== true)));
        this.setState({items: JSON.parse(localStorage.getItem('items'))});
    };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        Список дел:
      </h1>
      <InputItem onClickAdd={onClickAdd} todoItem={this.state.items} />
      <ItemList
        todoItem={visibleItems}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete} 
      />
      <Footer
        onClickFilter={onClickFilter}
        selectedDelete={selectedDelete}
        count={items.filter(item => item.isDone === false).length}
        countAll={items.length}
        countDone={items.filter(i => i.isDone === true).length}
      /> 
    </div>
  );}
}

export default Todo;

Todo.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object)
};
