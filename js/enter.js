function enter(){
    let dd = document.getElementById("dd").value
    let mm = document.getElementById("mm").value
    let yyyy = document.getElementById("yyyy").value
    if(dd==""||mm==""||yyyy==""){
        alert("Hãy nhập đầy đủ thông tin")
    }else{
        //ngày
      DD = dd%10
      Dd = (dd-DD)/10
      //tháng 
      MM = mm%10
      Mm = (mm-MM)/10
      //năm
      YYYY = yyyy%10
      YYYy = (yyyy-YYYY)/10
      YYyy = YYYy%10
      Yyyy = (YYYy-YYyy)/10
      yYYY = Yyyy%10
      yyyY = (Yyyy-yYYY)/10
      //tổng ==>con số chủ đạo
      total = DD+Dd+MM+Mm+YYYY+YYyy+yYYY+yyyY
      if(total==22||total<=11){
          countn=total
      }
      else{
        Total = total%10
        TOtal = (total-Total)/10
        countn = Total + TOtal
      }
      answer(countn)
    }
}