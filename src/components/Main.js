import "../css/App.css";
import React, { useState } from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { ThankYou } from "./thankYou";

export const Main = () => {
  const [saxeli, setSaxeli] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  const handleThanks = () => {
    setShowThanks(true);
  };

  const handleContinue = () => {
    setShowThanks(false);
  };

  return (
    <div className="formParent">
      <LeftSide
        saxeli={saxeli}
        cardNumber={cardNumber}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        cvcCode={cvcCode}
      />

      {/* <ThankYou /> */}
      {showThanks ? (
        <ThankYou handleContinue={handleContinue} />
      ) : (
        <form className="theForm">
          <RightSide
            setSaxeli={setSaxeli}
            setCardNumber={setCardNumber}
            setExpirationMonth={setExpirationMonth}
            setExpirationYear={setExpirationYear}
            setCvcCode={setCvcCode}
          />
        </form>
      )}
      <div className="formSubmitButtonParent">
        <button
          className="submitButton"
          type="submit"
          onClick={handleThanks}
          style={{ display: showThanks ? "none" : "block" }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
