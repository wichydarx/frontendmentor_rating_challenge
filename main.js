const ratingBtn = document.querySelector("#show_rating_page")
const showcase1 = document.querySelector("#cont_1");
const showcase2 = document.querySelector("#cont_2");
const alert = document.querySelector("#alert");
const sub = document.querySelector("#submit")
// const label = document.getElementsByName("radios").checked;
ratingBtn.addEventListener("click",(e)=>{
    showcase1.style.display ="block";
    ratingBtn.style.display ="none"
})
const label = document.getElementsByName("radios");
console.log(label)
// const result=()=>{
//     // for (i = 0; i < label.length; i++) {
//     //     if (label[i].checked=true) {
//     //         alert(label[i].value);
//     //     }
//     // }
//     let se=Array.from(label).find(radio=>radio.checked);
//     console.log(se.value);
// }
sub.addEventListener("click",(el)=>{
    sub.style.backgroundColor = "white";
    sub.style.color = "#fb7413";
    let checked = Array.from(label).find((radio) => radio.checked);
    const checkedNum = parseInt(checked.value);
    if (checkedNum > 0 && checkedNum <= 5) {
        showcase2.style.display = "block";
        showcase1.style.display = "none";
        const p2=document.createElement("p")
        p2.setAttribute("id", "p_2");
        p2.innerText = `You selected ${checkedNum} out of ${label.length}`;
        showcase2.appendChild(p2)
        showcase2.insertBefore(p2, showcase2.children[1])
    }
    
})