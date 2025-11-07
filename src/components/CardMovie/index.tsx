import styles from './CardMovie.module.css'
import Tag from '../Tag'
import type { Movie } from '../../types/Movie.interface';

const CardMovie = (props: Movie) => {
  return (
    <li className={styles.card}>
        <img src={props.src} alt={props.alt} />
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <div className={styles.infos}>
                <div className={styles.line1}>
                    <p>{props.gender}</p>
                    <Tag value={props.category} />
                </div>
                <div className={styles.line1}>
                    <p>{props.duration}</p>
                    <Tag value={props.censorship} />
                </div>
            </div>
        </div>
    </li>
  );
};

export default CardMovie;