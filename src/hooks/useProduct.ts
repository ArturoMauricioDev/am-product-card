import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: Props) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);
  // console.log(initialValues?.count, isMounted.current, value, counter);

  const increaseBy = (value: number) => {
    let newValue: number = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    // if (counter + value <= 0) {
    //   newValue = 0;
    // } else if (initialValues?.maxCount) {
    //   newValue = Math.min(counter + value, initialValues?.maxCount);
    // } else {
    //   newValue = counter + value;
    // }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  // useEffect(() => {
  //   isMounted.current = true;
  // }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,

    increaseBy,
    reset,
  };
};
