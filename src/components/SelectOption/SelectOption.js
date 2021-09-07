import './SelectOption.css'
import React, {useState} from 'react';
import arrow from './image/arrow.png'


export default function SelectOption (props) {
  let clas = props.show ? "city-list__item" : "city-list__item--none"

  let sityList = ["moscow", "kazan"]

  const [namesity, setNameSity] = useState("Красноярск")

  function changeNameSity() {
    setNameSity("12")
  }

  return (
    <div>

      <div className="city-list__wrapper-top">
        <div className="city-list__name">{namesity}</div>
        <img className="city-list__img-button" width="14" height="7" src={arrow} alt="" />
      </div>
      
      {/* список городов */}
      <div onClick={changeNameSity} className={clas}>
        <div className="city-list__name">гор список 1</div>
      </div>

      <div className={clas}>
        <div className="city-list__name">гор список 2</div>
      </div>
      
      <div className={clas}>
        <div className="city-list__name">гор список 3</div>
      </div>
      
      <div className={clas}>
        <div className="city-list__name">гор список 4</div>
      </div>
      {/* конец списка городов */}

    </div>
  )
}