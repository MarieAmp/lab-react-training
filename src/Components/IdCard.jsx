import React from 'react';

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="User" />
      <div className="userInfos">
        <p>
          Last Name:<span>{props.lastName}</span>
        </p>

        <p>
          First Name:<span>{props.firstName}</span>
        </p>

        <p>
          Gender:<span>{props.gender}</span>
        </p>

        <p>
          Height:<span>{props.height / 100}m</span>
        </p>

        <p>
          Birth:<span>{props.birth.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default IdCard;
