import styles from '../styles/Home.module.css';
import style from './index.module.css';
import RankItem from './../components/RankItem';
// import Country from './../components/Country';
// import Medals from './../components/Medals';
import data from './medalboard.json';
import React, { useState, useEffect } from 'react';

import { FaMedal } from 'react-icons/fa';

export default function Home() {
  const [list, setList] = useState(data);

  return (
    <div>
      <main /* className={style.allcontent} */>
        <div>
          <h2>Quadro de Medalhas</h2>
          <h2>Resultado: {list.length}</h2>
          <input type="search" />
        </div>
        <div /* className={style.boxApp} */>
          <div>#</div>
          <div>Country</div>
          <div className={style.gold}>
            <FaMedal />
          </div>
          <div className={style.silver}>
            <FaMedal />
          </div>
          <div className={style.bronze}>
            <FaMedal />
          </div>
          <div>Total</div>
        </div>
        {list.map(item => {
          return (
            <>
              <RankItem item={item} />
              {/* <Country item={item} /> */}
              {/* <Medals item={item} /> */}
            </>
          );
        })}
      </main>
    </div>
  );
}
