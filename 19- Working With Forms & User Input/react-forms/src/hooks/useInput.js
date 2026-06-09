import { useState } from "react";

export function useInput(defaultValue , validationFunction ) {
      const [enteredValue, setEnteredValue] = useState(defaultValue);
      const [didEdit , setDidEdit] = useState(false);

      const valueIsValid = validationFunction(enteredValue);

      function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
      }

    function handleInputBlur() {
      setDidEdit(true);
    }

    function validate() {
      setDidEdit(true);
      return valueIsValid;
    }

     return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: !valueIsValid && didEdit,
        isValid: valueIsValid,
        validate,
     }

}