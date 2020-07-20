import React from 'react';

const Greetings = (props) => {
  var language = (lang) => {
    if (lang === 'fr') {
      return <span> Bonjour </span>;
    } else if (lang === 'de') {
      return <span> Hallo </span>;
    } else if (lang === 'es') {
      return <span> Hola </span>;
    } else {
      return <span> Hello </span>;
    }
  };
  return (
    <div>
     
      <div className="greetings">
        {language(props.lang)} {props.children}
      </div>
      
    </div>
  );
};

export default Greetings;
