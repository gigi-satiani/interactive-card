import "../css/thanks.css";
import SvgImage from "./svgImg.jsx";

export const ThankYou = ({ handleContinue }) => {
  return (
    <div className="thankYouParent">
      <div className="thankFigureParent">
        <figure className="thanksFigure">
          <SvgImage />
        </figure>
      </div>
      <div className="thankTextParent">
        <span className="thanksSpan">THANK YOU !</span>
        <label className="thanksLabel">we've added your card details</label>
        <button className="thanksButton" onClick={handleContinue}>
          continue
        </button>
      </div>
    </div>
  );
};
