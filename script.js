function reserved(){
    var name = document.Form.name.value;
    var tel = document.Form.time.value;
    var date = document.Form.date.value;
    var time = document.Form.name.value;
    var time2 = document.Form.name.value;
    var number = document.Form.name.value;
    var date2 = document.Form.name.value;
    var password = document.Form.date2.value;
    if ((name == null || name == "") && (tel == null || tel == "") && (date == null || date == "") && (time == null || time == "")&& (time2 == null || time2 == "")&& (number == null || number == "")&& (date2 == null || date2 == "")&& (password == null || password == "")) {
    alert("Пожалуйста заполните все поля.");
    }
    else{
    window.location.href='#close'
    alert("Вы забронировали место на парковке.");
    }
  }
function reviewed(){
  alert("Вы оставили отзыв, спасибо.")
}