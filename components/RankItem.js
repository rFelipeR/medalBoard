import style from './RankItem.module.css';

export default function RankItem(props) {
  return (
    <div className={style.item}>
      <div>
        <div className={style.rank}>{props.item.Rank}</div>
      </div>
      <div className={style.country}>
        <img
          className={style.imgflag}
          // src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQVhwOar0FyOb_mmItcTAQFv1O4k8S_ZUEAI45O7dYC2rXRUWD-nWJwOQWJS2va8krELcDtY0JEVdQabkDkEdo"
          src={`https://olympics.com/tokyo-2020/olympic-games/resCOMMON/img/flags/${
            props.item.NOC
          }.png`}
          alt="flag"
        />
        {props.item.Team}
      </div>
      <div>{props.item.GoldMedals}</div>
      <div>{props.item.SilverMedals}</div>
      <div>{props.item.BronzeMedals}</div>
      <div>{props.item.Total}</div>
    </div>
  );
}
