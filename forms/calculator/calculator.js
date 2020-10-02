function addTwo(n1,n2) {
  return Number(n1) + Number(n2)
  }
function multiplyTwo(n1,n2) {
  return n1 * n2
  }
let calculator1 = 0


btnAdd.onclick=function(){
  lblcalculator1.value = addTwo(inptNumber.value,inptNum2.value)
}

btnmultiply.onclick=function(){
  lblcalculator1.value = multiplyTwo(inptNumber.value,inptNum2.value)
}

btnclear.onclick=function(){
  lblcalculator1.value = ""
}