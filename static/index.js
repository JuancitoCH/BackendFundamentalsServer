window.onload = main

function main(){
    
    const combo = document.getElementById("selectUsuarios")
    fetch("http://localhost:4000/users")
    .then(data=>data.json())
    .then(users=>{
        console.log(users)
        users.forEach(user=>{
            combo.innerHTML+=`
            <option value="${user.id}">${user.name}</option>
            `
        })
    })
}
function ir(){
    const combo = document.getElementById("selectUsuarios")
    console.log(combo.value)
    window.location.href="http://localhost:4000/notas/user/x"+combo.value
}

function registrarUsuario(e){
    e.preventDefault()
    
    const {name,email,password} = e.target
    if(!(name.value && email.value && password.value)) return alert("Campos sin completar")
    fetch("http://localhost:4000/users/register",{
        headers:{
            "content-type":"application/json"
        },
        method:"POST",
        body:JSON.stringify({
            name:name.value,
            email:email.value,
            password:password.value
        })
    })
    .then(res=>res.json())
    .then(res=>location.reload())
}