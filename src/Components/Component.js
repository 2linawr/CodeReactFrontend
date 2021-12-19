import {createRef,useState} from 'react'

function ComponentRegister() {
  const [ValidEmail, setValidEmail] = useState('');
  const [ValidNumber, setValidNumber] = useState('');
  const [ValidName, setValidName] = useState('');
  const TextValidEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;
  const TextValidNumber = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  const TextValidName = /^[a-z A-Z а-я А-ЯёЁ]+$/;
  
  const Name = createRef();
  const Email = createRef();
  const Number = createRef();
  const Button = createRef();
  const Language = createRef();
  const Checked = createRef();


  const hadleChangeEmail = () => {
    var valid = TextValidEmail.test(Email.current.value);
    if (!valid){
      setValidEmail('Введено не корректное значение')
    }
    else{
      setValidEmail('')
    }


    if(Name.current.value !='' && Email.current.value !='' && Number.current.value !='' && Language.current.value !='' && ValidEmail == '' && ValidNumber == '' && ValidName == '' && Checked.current.checked == true){
      Button.current.disabled = false
    
   console.log(Button.current.disabled)
    }
    else{
      
      Button.current.disabled = true
    
   
      console.log(Button.current.disabled) 
    }
  }
  const hadleChangeNumber = () =>{
    var valid = TextValidNumber.test(Number.current.value);
    if (!valid){
      setValidNumber('Введено не корректное значение')
    }
    else{
      setValidNumber('')
    }

    if(Name.current.value !='' && Email.current.value !='' && Number.current.value !='' && Language.current.value !='' && ValidEmail == '' && ValidNumber == '' && ValidName == '' && Checked.current.checked == true){
      Button.current.disabled = false
    
   console.log(Button.current.disabled)
    }
    else{
      
      Button.current.disabled = true
    
   
      console.log(Button.current.disabled) 
    }
  }


  const hadleChangeName = ()=>{

    var valid = TextValidName.test(Name.current.value);
    if (!valid){
      setValidName('Введено не корректное значение')
    }
    else{
      setValidName('')
    }
    if(Name.current.value !='' && Email.current.value !='' && Number.current.value !='' && Language.current.value !='' && ValidEmail == '' && ValidNumber == '' && ValidName == '' && Checked.current.checked == true){
      Button.current.disabled = false
    
   console.log(Button.current.disabled)
    }
    else{
      
      Button.current.disabled = true
    
   
      console.log(Button.current.disabled) 
    }
  }

  const hanldeChangeLanguage = () =>{
    if(Name.current.value !='' && Email.current.value !='' && Number.current.value !='' && Language.current.value !='' && ValidEmail == '' && ValidNumber == '' && ValidName == '' && Checked.current.checked == true){
      Button.current.disabled = false
    
   console.log(Button.current.disabled)
    }
    else{
      
      Button.current.disabled = true
    
   
      console.log(Button.current.disabled) 
    }
  }
  const handleChangeChecked = () =>{
    if(Name.current.value !='' && Email.current.value !='' && Number.current.value !='' && Language.current.value !='' && ValidEmail == '' && ValidNumber == '' && ValidName == '' && Checked.current.checked == true){
      Button.current.disabled = false
    
   console.log(Button.current.disabled)
    }
    else{
      
      Button.current.disabled = true
      console.log(Button.current.disabled) 
    }
  }
  const handleClick =()=>{

  }

  return (
    <div>
    <div id="range1">

<div className="outer">
  <div className="middle">
    <div className="inner">

        <div className="login-wr">
          <h2><b>Регистрация</b></h2>
          <p className="title-botom-register">Уже есть аккаунт? <a href="#">Войти</a> </p>
          <div className="form">
            <label className="signatures">Имя</label>
            <input ref={Name} type="text" onChange={hadleChangeName} placeholder="Пользователь" pattern="[а-яА-ЯёЁ]+"/>
            <div className="error">{ValidName}</div>
            <label className="signatures">Email</label>
            <input ref={Email} onChange={hadleChangeEmail} type="text" placeholder="email"/>
            <div className="error">{ValidEmail}</div>
            <label className="signatures">Номер телефона</label>
            <input ref={Number} onChange={hadleChangeNumber} type="text" placeholder="Номер телефона" maxlength="17"/>
            <div className="error">{ValidNumber}</div>
            <label className="signatures">Язык</label><br/>
            <input ref={Language} type="text" onChange={hanldeChangeLanguage} name="example" list="exampleList" placeholder="Язык"/>
            <datalist id="exampleList">
            <option value="Английский"/>
            <option value="Русский"/>
            <option value="Белорусский"/>
            <option value="Японский"/>
            <option value="Китайский"/>
            <option value="Украинский"/>
            <option value="Татарский"/>
            <option value="Казахский"/>
            <option value="Башкирский"/>
            <option value="Немецкий"/>
            <option value="Португальский"/>
            <option value="Французкий"/>
            </datalist>
            <p><input type="checkbox" ref ={Checked} onChange={handleChangeChecked} name="a"/>Принимаю <a href="#">условия</a> использования</p>
            <button className="ButtonClick" ref={Button} onClick={handleClick} disabled> Зарегистрироватся </button> 
          </div>
        </div>

    </div>
  </div>
</div>

</div>
</div>

  );
}

export default ComponentRegister;