import "../css/right.css";
import { Input } from "./InputComp";
import React, { useState, useEffect } from "react";

export const RightSide = (props) => {
  // name and card code verification
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expDateMonth, setExpDateMonth] = useState("");
  const [expDateYear, setExpDateYear] = useState("");
  const [cvc, setCvc] = useState("");

  let regexName = new RegExp(/^[a-zA-Z\s]*$/);
  let regexNumber = new RegExp(/^[0-9]+$/);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const hendleChangeCode = (event) => {
    setNumber(event.target.value);
  };
  const hendleChangeExpDate = (event) => {
    if (event.target.value.length < 3) {
      setExpDateMonth(event.target.value);
    }
  };
  const hendleChangeExpYear = (event) => {
    if (event.target.value.length < 3) {
      setExpDateYear(event.target.value);
    }
  };
  const hendleChangeCvc = (event) => {
    if (event.target.value.length < 4) {
      setCvc(event.target.value);
    }
  };

  const isValidName = name === "" || regexName.test(name);
  const isValidCode = number === "" || regexNumber.test(number);

  // left side card values
  useEffect(() => {
    props.setSaxeli(name);
    props.setCardNumber(number);
    props.setExpirationMonth(expDateMonth);
    props.setExpirationYear(expDateYear);
    props.setCvcCode(cvc);
  });

  return (
    <div className="rightSideParent">
      <Input
        placeholder={"e.g. Jane Appleseed"}
        label={"Cardholder Name"}
        span={"Wrong format, letters only"}
        onChange={handleChangeName}
        style={{
          border:
            isValidName && name.length >= 2
              ? "solid 2px #6348FE"
              : isValidName
              ? ""
              : "solid 2px #FF5050",
        }}
        spanStyle={{
          visibility:
            isValidName && name.length >= 2
              ? "hidden"
              : isValidName
              ? "hidden"
              : "visible",
        }}
      />

      <Input
        id={"numberInput"}
        type="text"
        maxLength={16}
        placeholder={"e.g. 1234 5678 9123 0000"}
        label={"Card Number"}
        span={"Wrong format, numbers only"}
        onChange={hendleChangeCode}
        style={{
          border:
            isValidCode && number.length === 16
              ? "solid 2px #6348FE"
              : isValidCode
              ? ""
              : "solid 2px #FF5050",
        }}
        spanStyle={{
          visibility:
            isValidCode && number.length === 16
              ? "hidden"
              : isValidCode
              ? "hidden"
              : "visible",
        }}
      />

      <div className="dateInputsParent">
        <div className="labelParent">
          <label className="dateLabel">Exp. Date (MM/YY)</label>
          <label className="cvcLabel">CVC</label>
        </div>
        <div className="dateInputParent">
          <div className="twoDates">
            <input
              className="dateFirst"
              placeholder="MM"
              type="number"
              value={expDateMonth}
              onChange={hendleChangeExpDate}
              style={{
                border:
                  expDateMonth && expDateMonth.length > 1
                    ? "solid 2px #6348FE"
                    : "",
              }}
            />
            <input
              className="dateSecond"
              placeholder="YY"
              type="number"
              value={expDateYear}
              onChange={hendleChangeExpYear}
              style={{
                border:
                  expDateYear && expDateYear.length > 1
                    ? "solid 2px #6348FE"
                    : "",
              }}
            />
          </div>
          <input
            className="dateThree"
            type="number"
            placeholder="e.g. 123"
            value={cvc}
            onChange={hendleChangeCvc}
            style={{ border: cvc && cvc.length > 2 ? "solid 2px #6348FE" : "" }}
          />
        </div>
      </div>
    </div>
  );
};
