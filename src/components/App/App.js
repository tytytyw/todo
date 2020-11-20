import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo.js';
import About from '../About/About.js';
import Contacts from '../Contacts/Contacts.js';
import styles from './App.module.css';
import promo from './img/promo.png';
import '../../fonts/fonts.css';

const App = () => {

  return (

      <HashRouter basename = '/'>
        <div className={styles.wraper}>
          <div className={styles.menu}>
            <Link to='/'><div className={styles.item}>Обо мне</div></Link>
            <Link to='/todo'><div className={styles.item}>Дела</div></Link>
            <Link to='/contacts'><div className={styles.item}>Контакты</div></Link>
          </div>
          <div className={styles.content}>
            <Route path='/' exact component={About} />
            <Route path='/todo' component={Todo} />
            <Route path='/contacts' component={Contacts} />
          </div>
          <div className={styles.promo}>
            Выполнено в
            <img src={promo} alt="Web Hero School">
            </img>
          </div>
        </div>
      </HashRouter>
  );
};

export default App;
