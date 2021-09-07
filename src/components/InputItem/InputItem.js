import './InputItem.css'

export default function InputItem (props) {
  return (
    <div className="form__input-wrapper">
      <div className="form__name">{props.name}</div>
      <input type={props.inputType} />
      <div className="form__description">{props.description}</div>
    </div>
  )
}