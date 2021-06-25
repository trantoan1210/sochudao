let dd = " "
let mm = " "
let yyyy= " "
let i=1
while(i<=31){
    dd+='<option value="'
    dd+=i+'">'+i
    dd+='<option>'
    i++
}
for(let j=1;j<=12;j++){
    mm+='<option value="'
    mm+=j+'">'+j
    mm+='<option>'
}
for(let z=1970;z<=2021;z++){
    yyyy+='<option value="'
    yyyy+=z+'">'+z
    yyyy+='<option>'
}
document.getElementById("dd").innerHTML= dd
document.getElementById("mm").innerHTML= mm
document.getElementById("yyyy").innerHTML= yyyy