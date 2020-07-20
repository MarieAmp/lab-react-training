import React from 'react';

const CreditCard = (props) => {
  var num = String(props.number).slice(-4);

  var year = String(props.expirationYear).slice(-2);
  var month;
  if (props.expirationMonth < 10) {
    month = `0${props.expirationMonth}`;
  } else {
    month = props.expirationMonth;
  }
  var typeOfCard;
  if (props.type === 'Visa') {
    typeOfCard = '/img/visa.png';
  } else {
    typeOfCard = '/img/master-card.svg';
  }

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: `${props.bgColor}`, color: `{props.color}` }}
    >
      <div className="logoDisp">
        <img className="logo" src={typeOfCard} alt="logo" />
      </div>
      <div className="number">•••• •••• •••• {num}</div>
      <div className="expDate">
        Expires {month}/{year}
      </div>
      <div className="bank">{props.bank}</div>
      <div className="name">{props.owner}</div>
      <div className="cbDisp"></div>
    </div>
  );
};

export default CreditCard;
