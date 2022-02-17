
window.onload = main

function main(){
    const doc = document.getElementById("rootNotas")
    doc.innerHTML=""
    fetch("http://localhost:4000/notas/all")
    .then(data=>data.json())
    .then(notas=>{
        console.log(notas)
        notas.forEach(nota => {
            doc.innerHTML+=`
            <div class="nota">
                <h3>${nota.titulo}</h3>
                <b class="nombre">${nota.name}</b>
                <p>${nota.nota}</p>
                <b>${nota.expiracion}</b>
                <button onClick="deleteNota(${nota.idNotas})">Delete</button>
            </div>
            `
            
        })
        
    })

}

const deleteNota=(idNotas)=>{
    fetch(`http://localhost:4000/notas/delete/${idNotas}`,{
        method:"DELETE"
    })
    .then(main())
}



const crearNotas =(e)=>{
    const doc = document.getElementById("rootNotas")
    e.preventDefault()
    const {id,date,nota,titulo} = e.target
    console.log(date.value)
    if(!(id.value && date.value && nota.value && titulo.value)) return alert("Debe Completar todos los campos")

    fetch("http://localhost:4000/notas/crear",{
        headers:{
            "content-type":"application/json"
        },
        method:"POST",
        body:JSON.stringify({
            idUser:id.value,
            expiracion:date.value ,
            nota:nota.value,
            titulo:titulo.value
        })
    })
    .then(res=>res.json())
    .then(res => {
        console.log(res)
        if(!res.success) return alert("no se pudo crear")
        return   doc.innerHTML+=`
            <div class="nota">
                <h3>${titulo.value}</h3>
                <p>User: ${id.value}</p>
                <p>${nota.value}</p>
                <p>${date.value}</p>

            </div>
            `
    })

}

