showDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    day = day<10 ? "0"+day : day;
    month = month<10 ? "0"+month : month;
    document.getElementById("showDate").innerHTML = day+":"+month+":"+year;
   }