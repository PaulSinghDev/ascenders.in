import { ChangeEvent, ChangeEventHandler, useState } from "react";

const useSelect = (defaultValue: string, allowDefault?: boolean) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setValue(event.currentTarget.value);
    if (event.currentTarget.value === defaultValue && !allowDefault) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleBlur = () => {
    if (value === defaultValue && !allowDefault) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return {
    value,
    isValid,
    setIsValid,
    handleBlur,
    handleChange,
  };
};

export { useSelect };
