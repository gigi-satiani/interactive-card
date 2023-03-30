import "../css/App.css";
import { useState } from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Main = () => {
  const [saxeli, setSaxeli] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvcCode, setCvcCode] = useState("");

  return (
    <div className="formParent">
      <LeftSide
        saxeli={saxeli}
        cardNumber={cardNumber}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        cvcCode={cvcCode}
      />
      <form className="theForm">
        <RightSide
          setSaxeli={setSaxeli}
          setCardNumber={setCardNumber}
          setExpirationMonth={setExpirationMonth}
          setExpirationYear={setExpirationYear}
          setCvcCode={setCvcCode}
        />
      </form>
      <div className="formSubmitButtonParent">
        <button className="submitButton" type="submit">
          Confirm
        </button>
      </div>
    </div>
  );
};
