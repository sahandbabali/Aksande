import React from "react";
import "./searchbox.css";
import logo1 from '../../pics/pexels-logo-7e4af4630e66b6b786567041874586aeb1b5217589035c70a0def15aacd0f11a.png';
import logo2 from '../../pics/5cb4839d5f1b6d3fbadece7c.png';
import logo3 from '../../pics/Pixabay_new_logo.svg.png';

function searchbox({ changeterm, getdata }) {
  const handlesub = event => {
    event.preventDefault();
    getdata();
  };

  return (
    <div className="searchbox">
      <div className="sbt gerdak">
        <h3>موتور جستجوی عکس های رایگان و قانونی</h3>
        <p>
          عکسنده کلمه مورد نظر شما را در بین هزاران عکس جستجو میکند که به صورت
          کاملا رایگان و قانونی می توانید در پروژه های خود استفاده کنید.
        </p>
      </div>

      <div className="inputbox gerdak">
        <input id="dok" type="submit" value="بسرچ" onClick={getdata} />
        
        <form  onSubmit={handlesub}>
          <input id="formak" type="search" name="term" id="term" onChange={changeterm} />
        </form>

        <div className="logobox">
          <img src={logo1} alt=""/>
          <img src={logo2} alt=""/>
          <img src={logo3} alt=""/>

        </div>
      
       
      </div>
    </div>
  );
}

export default searchbox;
