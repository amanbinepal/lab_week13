const originalCont = document.querySelector(".original-container")
const copyCont = document.querySelector(".copy-container")


function copySection(evt) {
        const copyElem = evt.target.cloneNode(true)    
        copyCont.insertAdjacentElement("afterbegin", copyElem)
}


originalCont.addEventListener("click", copySection)


