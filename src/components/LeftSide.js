import "../css/left.css";
import desktop from "../images/desktopMain.png";

export const LeftSide = (props) => {
  return (
    <div className="leftParent">
      <div className="leftSideFigure">
        <figure className="sideImgFigure">
          <img src={desktop} className="sideMainImg" alt="" />
        </figure>

        <div className="cardFrontSide">
          <input
            className="cardNumber"
            value={props.cardNumber}
            placeholder="0000 0000 0000 0000"
            readOnly
          />
          <div className="nameAndDate">
            <input
              className="leftNameSpan"
              placeholder="JANE APPLESEED"
              value={props.saxeli}
              readOnly
            />
            <span className="leftExpDateSpan">
              {props.expirationMonth ? props.expirationMonth : "00"} /{" "}
              {props.expirationYear ? props.expirationYear : "00"}
            </span>
          </div>
        </div>

        <div className="cardBackSide">
          <input
            className="cvcCardBack"
            placeholder="000"
            value={props.cvcCode}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
