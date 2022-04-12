import Link from "next/link";
import style from "./adcard.module.css";

function AdCard(props) {
  // console.log(props);
  return (
    <Link href={`/ad/${props.props.id}`}>
      <div className={style.card}>
        <div className={style.title}>{props.props.title}</div>
        <div className={style.description}>{props.props.description}</div>
        <div className={style.area}>{props.props.area}</div>
        <div className={style.work}>props.props.work</div>
      </div>
    </Link>
  );
}

export default AdCard;
