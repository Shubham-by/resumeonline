document.addEventListener("DOMContentLoaded",() => {
let page = document.querySelector(".page");
page.style.display = "none";
let name = document.getElementById("name");
let passion = document.getElementById("passion");
let contactP = document.getElementById("contactP");
let contactA = document.getElementById("contactA");
let mailP = document.getElementById("mailP");
let mailA = document.getElementById("mailA");
let addP = document.getElementById("addP");
let addA = document.getElementById("addA");
let summaryP = document.getElementById("summaryP");
let skills = document.querySelector(".skills");
let hobbies = document.querySelector(".hobbies");
let languages = document.querySelector(".languages");
let edudegree = document.getElementById("edudegree");
let univercity = document.getElementById("univercity");
let passyr = document.getElementById("passyr");
let cources = document.getElementById("cources");
let maindiv= document.querySelector(".right");







let root = document.createElement("div");
root.setAttribute("id","root");
document.body.appendChild(root);

let myform = document.createElement("form");
myform.setAttribute("id","form");
root.appendChild(myform);

let nameinph = document.createElement("h4");
nameinph.innerHTML = "Name: ";
myform.appendChild(nameinph);

let nameinp = document.createElement("input");
nameinp.type="text";
nameinp.placeholder  = "Enter ur name";
nameinp.setAttribute("id","nameinp");
myform.appendChild(nameinp);

let passplh = document.createElement("h4");
passplh.innerHTML = "passion: ";
myform.appendChild(passplh);

let passioninp = document.createElement("input");
nameinp.type="text";
passioninp.placeholder = "enter passion";
passioninp.setAttribute("id","passioninp");
myform.appendChild(passioninp);

let amnoplh = document.createElement("h4");
amnoplh.innerHTML = "contact no.: ";
myform.appendChild(amnoplh);

let inpamno = document.createElement("input");
inpamno.type="number";
inpamno.placeholder ="enter contact no";
inpamno.setAttribute("id","inpamno");
myform.appendChild(inpamno);

let amailplh = document.createElement("h4");
amailplh.innerHTML = "Email.: ";
myform.appendChild(amailplh);

let inpamail = document.createElement("input");
inpamail.type="text";
inpamail.placeholder ="enter ur mail";
inpamail.setAttribute("id","inpamail");
myform.appendChild(inpamail);

let aaddplh = document.createElement("h4");
aaddplh.innerHTML = "Address: ";
myform.appendChild(aaddplh);

let inpaadd = document.createElement("input");
inpaadd.type="text";
inpaadd.placeholder ="enter ur address";
inpaadd.setAttribute("id","inpaadd");
myform.appendChild(inpaadd);

let image = document.createElement("h4");
image.innerHTML = "profile URL: ";
myform.appendChild(image);

let proimage = document.createElement("input");
proimage.type="file";
proimage.accept="image/*";
proimage.placeholder ="place profile url";
proimage.setAttribute("id","proimage");
myform.appendChild(proimage);

let sumplh = document.createElement("h4");
sumplh.innerHTML = "Summary: ";
myform.appendChild(sumplh);

let inpsummary = document.createElement("input");
inpsummary.type="text";
inpsummary.placeholder ="say about yourself";
inpsummary.setAttribute("id","inpsummary");
myform.appendChild(inpsummary);

let lidiv = document.createElement("div");
lidiv.classList.add("skilllidiv");
myform.appendChild(lidiv);

let myskills = document.createElement("h4");
myskills.innerHTML = "SKILLS: ";
lidiv.appendChild(myskills);

let inpskill = document.createElement("input");
inpskill.type = "number";
inpskill.placeholder = "how much skills u have";
lidiv.appendChild(inpskill);

let skillbtn = document.createElement("button");
skillbtn.innerHTML = "ok";
skillbtn.style.backgroundColor = "blue";
lidiv.appendChild(skillbtn);

skillbtn.addEventListener("click",(e) => {
     e.preventDefault();

     let num = Number(inpskill.value);
    for(let i =0;i<num;i++){
    let skillsli = document.createElement("input");
    skillsli.type = "text";
    skillsli.placeholder = `Enter your ${i+1} skill`;
        skillsli.classList.add("skillsli");
    lidiv.appendChild(skillsli);
    lidiv.appendChild(document.createElement("br"));
    }   
     skillbtn.remove();

})

let lihobbydiv = document.createElement("div");
lihobbydiv.classList.add("hobbylidiv");
myform.appendChild(lihobbydiv);

let myhobby = document.createElement("h4");
myhobby.innerHTML = "HOBBY: ";
lihobbydiv.appendChild(myhobby);

let inphobby = document.createElement("input");
inphobby.type = "number";
inphobby.placeholder = "how much intresting facts";
lihobbydiv.appendChild(inphobby);

let hobbybtn = document.createElement("button");
hobbybtn.innerHTML = "ok";
hobbybtn.style.backgroundColor = "blue";
lihobbydiv.appendChild(hobbybtn);

hobbybtn.addEventListener("click",(e) => {
     e.preventDefault();

     let num = Number(inphobby.value);
    for(let i =0;i<num;i++){
    let hobbyli = document.createElement("input");
    hobbyli.type = "text";
    hobbyli.placeholder = `Enter your ${i+1} hobby`;
        hobbyli.classList.add("hobbyli");
    lihobbydiv.appendChild(hobbyli);
    lihobbydiv.appendChild(document.createElement("br"));
    }   
     hobbybtn.remove();

})

let lilangdiv = document.createElement("div");
lilangdiv.classList.add("langlidiv");
myform.appendChild(lilangdiv);

let mylang = document.createElement("h4");
mylang.innerHTML = "LANGUAGES: ";
lilangdiv.appendChild(mylang);

let inplang = document.createElement("input");
inplang.type = "number";
inplang.placeholder = "how many languages u know";
lilangdiv.appendChild(inplang);

let langbtn = document.createElement("button");
langbtn.innerHTML = "ok";
langbtn.style.backgroundColor = "blue";
lilangdiv.appendChild(langbtn);

langbtn.addEventListener("click",(e) => {
     e.preventDefault();

     let num = Number(inplang.value);
    for(let i =0;i<num;i++){
    let langli = document.createElement("input");
    langli.type = "text";
    langli.placeholder = `Enter your ${i+1} lang`;
    langli.classList.add("langli");
    lilangdiv.appendChild(langli);
    lilangdiv.appendChild(document.createElement("br"));
    }   
     langbtn.remove();

})

let myeducation = document.createElement("h4");
myeducation.innerHTML = "EDUCATION: ";
myform.appendChild(myeducation);

let inpmyedu = document.createElement("input");
inpmyedu.type="text";
inpmyedu.placeholder ="enter ur education";
inpmyedu.setAttribute("id","inpeducation");
myform.appendChild(inpmyedu);


let Univercity = document.createElement("h4");
Univercity.innerHTML = "UNIVERCITY: ";
myform.appendChild(Univercity);

let inpmyeduuniver = document.createElement("input");
inpmyeduuniver.type="text";
inpmyeduuniver.placeholder ="enter ur education Univercity";
inpmyeduuniver.setAttribute("id","inpeducationuniver");
myform.appendChild(inpmyeduuniver);

let myeducationyr = document.createElement("h6");
myeducationyr.innerHTML = "EDUCATION Year: ";
myform.appendChild(myeducationyr);

let inpmyeduyr = document.createElement("input");
inpmyeduyr.type="text";
inpmyeduyr.placeholder ="enter ur education";
inpmyeduyr.setAttribute("id","inpeducation");
myform.appendChild(inpmyeduyr);

let mycource = document.createElement("h6");
mycource.innerHTML = "Relevant Cources: ";
myform.appendChild(mycource);

let inpmycource = document.createElement("input");
inpmycource.type="text";
inpmycource.placeholder ="enter relevent cources";
inpmycource.setAttribute("id","inpcource");
myform.appendChild(inpmycource);

let expdivf = document.createElement("div");
expdivf.classList.add("expdivf");
myform.appendChild(expdivf);

let myexperience = document.createElement("h4");
myexperience.innerHTML = "EXPERIENCE: ";
expdivf.appendChild(myexperience);

let expinpno = document.createElement("input");
expinpno.type = "number";
expinpno.placeholder = "how much experience";
expdivf.appendChild(expinpno);

let expbtn = document.createElement("button");
expbtn.innerHTML = "ok";
expbtn.style.backgroundColor = "blue";
expdivf.appendChild(expbtn);

expbtn.addEventListener("click",(e) => {
     e.preventDefault();

     let num = Number(expinpno.value);
    for(let i =0;i<num;i++){
    let expli = document.createElement("input");
    expli.type = "text";
    expli.placeholder = `Enter your ${i+1} experience`;
    expli.classList.add("experienceli");
    expdivf.appendChild(expli);
    expdivf.appendChild(document.createElement("br"));
    }   
     expbtn.remove();

})

let submitbtn =document.createElement("button");
submitbtn.type = "submit";
submitbtn.innerHTML = "submit";
myform.appendChild(submitbtn);

submitbtn.addEventListener("click",(inp) =>{
     inp.preventDefault();
     
     let nameval= nameinp.value;
      name.innerHTML = nameval;
    
    let passionval = passioninp.value;
    passion.innerHTML = passionval
     
    let mobile = inpamno.value;
    contactA.href = `tel:+91${mobile}`;
    contactP.innerHTML = mobile;

    let gmail = inpamail.value;
    mailA.href = `mailto:${gmail}`;
    mailP.innerHTML = gmail;

    let Address = inpaadd.value;
    addA.href = Address;
    addP.innerHTML = Address;

    let file = proimage.files[0];
    if(file){
     let img = document.querySelector(".profile-pic img");
     img.src = URL.createObjectURL(file);
     }
    
   let about = inpsummary.value;
   summaryP.innerHTML = about;

   let skillsval = document.querySelectorAll(".skillsli");
   skills.innerHTML = "";
   skillsval.forEach(s=>{
     let skillli = document.createElement("li");
skillli.innerHTML = s.value;
skills.appendChild(skillli);

   })

   let hobbyval = document.querySelectorAll(".hobbyli");
   hobbies.innerHTML = "";
   hobbyval.forEach(s=>{
 let hobbyli = document.createElement("li");
hobbyli.innerHTML = s.value;
 hobbies.appendChild(hobbyli);
   })

   let langval = document.querySelectorAll(".langli");
   languages.innerHTML = "";
   langval.forEach(s=>{
     let langli = document.createElement("li");
     langli.innerHTML = s.value;
     languages.appendChild(langli);
   })

let eduval = inpmyedu.value;
edudegree.innerHTML = eduval;
let univerval = inpmyeduuniver.value;
univercity.innerHTML = univerval;
let passyrval = inpmyeduyr.value;
passyr.innerHTML = passyrval;
let courceval = inpmycource.value;
cources.innerHTML = courceval;


 
let expval = document.querySelectorAll(".experienceli");
let expContainer = document.getElementById("expContainer");
if(!expContainer){
     expContainer = document.createElement("div");
     expContainer.id = "expContainer";
     maindiv.appendChild(expContainer);
}
expContainer.innerHTML= "";
expval.forEach((e,i) => {
let p = document.createElement("p");
p.innerHTML= `${i+1}. ${e.value}`;
expContainer.appendChild(p);
})
myform.reset();
root.style.display = "none";
page.style.display = "block";

})

})
