import './app.css'
import React, {useState} from 'react';

import SelectOption from './components/SelectOption/SelectOption';
import InputItem from './components/InputItem/InputItem';

import rectangle from './image/image-form/Rectangle2.png';

function App() {

  const [status, setStatus] = useState("Прежде чем действовать, надо понять")
  const [selectItems, setSelectItems] = useState(false)

  function changeStatus() {
    let result = prompt("ваш новый статус")
    setStatus(result)
  }

  function showSelectItems() {
    setSelectItems(!selectItems)
  }


  return (
    <div className="App">
      <div className="wrapper-main">

        <div className="head">

          <div className="head__wrapper-top">
            <div className="head__hello">Здравствуйте, <span>Человек №3596941</span></div>
            <div onClick={changeStatus} className="head__status">Сменить статус</div>
          </div>

          <div className="head__wrapper-bottom">
            <img height="11px" width="11px" className="head__img" src={rectangle} alt="#" />
            <div className="head__status-text"> <p> {status} </p> </div>
          </div>
          
        </div>

        <form className="form">

          <div className="form__input-wrapper">
            <div className="form__name">Ваш город</div>
              <div onClick={showSelectItems} className="city-list">

                <SelectOption 
                  show={selectItems}
                />

              </div>
          </div>

          <div className="line"></div>

          <InputItem 
            name="Пароль" 
            inputType="password" 
            description="Ваш новый пароль должен содержать не менее 5 символов." 
          />

          <InputItem 
            name="Пароль еще раз" 
            inputType="password" 
            description="Повторите пароль, пожалуйста, это обезопасить вас с нами на случай ошибки." 
          />

          <div className="line"></div>
          
          <InputItem 
            name="Электронная почта" 
            inputType="text" 
            description="Можно изменить адрес, указанный при регистрации." 
          />

          <div className="form__input-wrapper">
            <div className="form__name">Я согласен</div>
            <input className="chekbox" type="checkbox" /> <span className="checkbox-name">принимать актуальную информацию на емейл</span>
          </div>

          <div className="form__button-wrapper">
              <input className="form__button" type="submit" value="Изменить" /> <span className="form__button-description">последние изменения 15 мая 2012 в 14:55:17</span>
          </div>

        </form>

      </div>
    </div>
  );
}

export default App;
