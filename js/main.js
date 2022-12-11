let row = document.querySelector(".row1")
let heading1 = document.querySelector(".heading1")
let savat_mass = []


function katalog() {
    row.innerHTML=""
    katalog_massiv.map((item, index) => {

        let col = document.createElement("div")
        col.classList.add("col-4")
        col.setAttribute("onclick",`qosh(${index})`)

        let card = document.createElement("div")
        card.classList.add("card","bg-dark","m-3","text-center")

        let rasm = document.createElement("img")
        rasm.src = item.photo
        rasm.classList.add("rasm")

        let nomi = document.createElement("h2")
        nomi.classList.add("h2","mx-5")
        nomi.textContent = item.name

        let narh = document.createElement("p")
        narh.classList.add("h3","mx-5")
        narh.textContent = item.narx

        

        card.appendChild(rasm)
        card.appendChild(nomi)
        card.appendChild(narh)
        col.appendChild(card)
        row.appendChild(col)
    })
}


function qosh(son){
    let sanoq = 0
    let ushla = 0

    for(let i = 0; i<savat_mass.length;i++){
        if(katalog_massiv[son].name === savat_mass[i].name){
            sanoq++
            ushla = i
        }
    }
    if(sanoq == 1){
        savat_mass[ushla].count = savat_mass[ushla].count + 1
    }else if(sanoq == 0){
        let obj = {
            photo:katalog_massiv[son].photo,
            name:katalog_massiv[son].name,
            narx:katalog_massiv[son].narx,
            count:1
        }
        savat_mass.push(obj)
    }
    
    
}

function savat(){
    row.innerHTML = ""

    let hammasi = 0
    savat_mass.forEach (item =>{
        hammasi+= item.narx * item.count
    })
    heading1.textContent = `Umumiy narx: ${hammasi}$`
    heading1.classList.add("fw-bold","my-5")
    savat_mass.forEach(item =>{
        let col = document.createElement("div")
        col.classList.add("col-12","container")

        let card = document.createElement("div")
        card.classList.add("d-flex","justify-content-between","align-items-center","card1","bg-dark")

        let rasm = document.createElement("img")
        rasm.src = item.photo
        rasm.classList.add("w-25")

        let nomi = document.createElement("h2")
        nomi.classList.add("h2","mx-5")
        nomi.textContent = item.name

        let narh = document.createElement("p")
        narh.classList.add("h3","mx-5")
        narh.textContent = item.narx

        let h_3 = document.createElement("h3")
        h_3.textContent = `Count = ${item.count}`
        

        let h3 = document.createElement("h3")
        h3.textContent = `Umumiy narx: ${item.count * item.narx}$ `
        h3.classList.add("pe-5")

        let yangi_div = document.createElement("div")


        card.appendChild(rasm)
        yangi_div.appendChild(nomi)
        yangi_div.appendChild(narh)
        yangi_div.appendChild(h_3)
        card.appendChild(yangi_div)
        card.appendChild(h3)
        col.appendChild(card)
        row.appendChild(col)
    })
}
