
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"];
let firstName = "";
btnsubmitmember.onclick=function(){
  firstName = Inptfirstname.value
  if(members.includes(firstName))
    lblmembershipform.textContent = 'You are a member!'
  else
    lblmembershipform.textContent = 'You are not a member, let me add you!'
    members.push(firstName);
    console.log(members);
}
 