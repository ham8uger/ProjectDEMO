document.body.style.background = "red"

setTimeout(() => document.body.style.background="",1000)
// setTimeout(() => {document.getElementById("container").setAttribute("style","background-color: red;width: 200px;height: 200px;")},2000)
// setAttribute 会覆盖原有的属性值导致失去宽和高

setTimeout(()=> {document.getElementById("container").style.backgroundColor = "black"},2000)


for(let i = 0;i<document.body.childNodes.length;i++) {
    alert(document.body.childNodes[i])
}