import type { Category, Censorship } from "../../types/Movie.interface";
import styles from "./Tag.module.css";
import classNames from "classnames";


interface TagProps {
  value: Category | Censorship;
}

const tagClassesMap = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.quatorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

const Tag = ({ value }: TagProps) => {
  const classes = classNames(styles.tag, tagClassesMap[value]);

  return <span className={classes}>{value}</span>;
};

export default Tag;
