import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    (): boolean => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );
  const isMinZero = useCallback((): boolean => counter === 0, [counter]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={`${styles.buttonMinus} ${isMinZero() &&
          styles.disabledLeft}`}
        disabled={isMinZero()}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
