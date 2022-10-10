import classNames from "classnames";
import React from "react";
import "./InputText.scss";

interface InputText {
  value?: string;
  isMaterial?: boolean;
  disabled?: boolean;
  placeHolder?: string;
  onChange?: (T: any) => void;
  onEnter?: (T: any) => void;
  onBlur?: (T: any) => void;
  src?: any;
}

function InputText(props: InputText) {
  const {
    value,
    isMaterial,
    disabled,
    placeHolder,
    onChange,
    onEnter,
    onBlur,
    src,
  } = props;

  const [internalValue, setInternalValue] = React.useState<string>("");

  const inputRef: any = React.useRef<HTMLInputElement>(null);
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(event.target.value);
      if (typeof onChange === "function") {
        onChange(event.target.value);
      }
    },
    [onChange]
  );

  const handleClearInput = React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setInternalValue("");
      inputRef.current.focus();
      if (typeof onChange === "function") {
        onChange(null);
        return;
      }
    },
    [onChange]
  );

  const handleKeyPress = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        if (typeof onEnter === "function") {
          onEnter(event.currentTarget.value);
        }
      }
    },
    [onEnter]
  );

  const handleBlur = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (typeof onBlur === "function") {
        onBlur(event.currentTarget.value);
      }
    },
    [onBlur]
  );

  React.useEffect(() => {
    if (value) {
      setInternalValue(value);
    } else {
      setInternalValue("");
    }
  }, [value]);
  return (
    <>
      <div className="input-text__container">
        <input
          type="text"
          value={internalValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onBlur={handleBlur}
          placeholder={placeHolder ? placeHolder : "Nhập dữ liệu..."}
          ref={inputRef}
          disabled={disabled}
          className={classNames("component__input", {
            "component__input--material": isMaterial,
            "component__input--bordered": !isMaterial,
            "disabled-field": disabled,
          })}
        />
        {internalValue ? (
          <>
            {disabled ? (
              <i className="input-icon input-text__icon tio-blocked"></i>
            ) : (
              <i
                className="input-icon input-text__icon tio-clear"
                onClick={handleClearInput}
              ></i>
            )}
          </>
        ) : (
          <>
            {disabled ? (
              <span className={classNames("input-icon", "input-text__icon")}>
                <i className="tio-blocked" />
              </span>
            ) : (
              <span className={classNames("input-icon", "input-text__icon")}>
                {src !== undefined ? (
                  <>
                    <img alt="" width={15} height={15} className="mb-1" />
                  </>
                ) : (
                  <img alt="" width={15} height={15} className="mb-1" />
                )}
              </span>
            )}
          </>
        )}
      </div>
    </>
  );
}

InputText.defaultProps = {
  isMaterial: false,
  disabled: false,
  className: "",
};

export default InputText;
