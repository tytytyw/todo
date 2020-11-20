import React from 'react';
import styles from './Constacts.module.css';
import instagram from './img/inst.png';
import github from './img/gh.png';
import telegram from './img/t.png';
import linkedin from './img/in.png';
import email from './img/mail.png';
import vk from './img/vk.png';

const Contacts = () => {
  const age = Math.floor((new Date() - new Date(1989, 9, 11)) / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Contacts</h1>
      <header>
        <div className={styles.avatar}></div>
        <div className={styles.about}>
          <span className={styles.about__name_title}>name:</span>
          <span className={styles.about__name}>Kolesnikov Dmitriy</span>
          <span className={styles.about__name_title}>имя:</span>
          <span className={styles.about__name}>Колесников Дмитрий</span>
          <span className={styles.about__age_title}>age / возраст:</span>
          <span className={styles.about__age}>{age}</span>
          <span className={styles.about__city_title}>city / город:</span>
          <span className={styles.about__city}>Moscow / Москва</span>
        </div>
      </header>
      <div className={styles.links}>
        <div className={styles.links__item}>
          <a
            target="_blank"
            href="https://vk.com/tytytyw"
          >
            <img src={vk} alt="VK"></img>
          </a>
        </div>

        <div className={styles.links__item}>
          <a
            target="_blank"
            href="https://instagram.com/tytytyw"
          >
            <img src={instagram} alt="instagram"></img>
          </a>
        </div>

        <div className={styles.links__item}>
          <a
            target="_blank"
            href="https://github.com/tytytyw"
          >
            <img src={github} alt="github"></img>
          </a>
        </div>

        <div className={styles.links__item}>
          <a
           target="_blank"
            href="https://t.me/tytytyw"
          >
            <img src={telegram} alt="telegram"></img>
          </a>
        </div>

        <div className={styles.links__item}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tytytyw/"
          >
            <img src={linkedin} alt="in"></img>
          </a>
        </div>
        
        <div className={styles.links__item}>
          <a
            target="_blank"
            href="mailto:nonameFOX@yandex.ru"
          >
            <img src={email} alt="email"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
