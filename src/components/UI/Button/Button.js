import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.variant && styles.variant}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
