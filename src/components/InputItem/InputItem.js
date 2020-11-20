import React from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonInput from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    inputLabel: 'Новая задача',
  };

 onButtonClick = () => {

  if (this.state.inputValue ==='') {
    this.setState({inputLabel:<span className={styles.error}> ошибка: пустое поле </span>});
  } else {

    if (this.state.inputValue.length > 30) {
      this.setState({inputLabel:<span className={styles.error}>максимум 30 символов</span>,inputValue:''});
    } else {

      if (this.props.todoItem.some(i => i.value === this.state.inputValue.toLowerCase())) {
        this.setState({inputLabel:<span className={styles.error}>задача уже создана</span>,inputValue:''});
      } else {
        this.setState({ inputValue: ''});
        this.props.onClickAdd(this.state.inputValue.toLowerCase());
      }
    }
  }
};
  render() {

    return (
      <div className={styles.add_task}>
        <form action="">
          <TextField
            id="standard-basic"
            label={this.state.inputLabel}
            value={this.state.inputValue}
            onClick={() => this.setState({inputLabel: 'Новая задача'})}
            onChange={event => this.setState({
              inputValue: event.target.value.toUpperCase(),
              inputLabel: 'Новая задача'
              })
            }
          />
          <ButtonInput
            variant="contained"
            color="primary"
            onClick={this.onButtonClick}
            type='submit'
          >
            Добавить
          </ButtonInput>
        </form>
      </div>
    );
  }
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func
};

export default InputItem;
