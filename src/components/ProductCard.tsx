import React, { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[] ;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
}

const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange,
  initialValues,
}: Props) => {
  const {
    counter,
    maxCount,
    increaseBy,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ product, counter, maxCount, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset,
          })}
      </div>
    </Provider>
  );
};

export { ProductCard };
