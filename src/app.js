const originalCont = document.querySelector(".original-container")
const copyCont = document.querySelector(".copy-container")
const deleteElem = document.querySelector(".copies")


function copySection(evt) {
        const copyElem = evt.target.cloneNode(true)    
        copyCont.insertAdjacentElement("afterbegin", copyElem)
}

function deleteSection() {
        while (copyCont.hasChildNodes()) {
                copyCont.firstChild.remove()
        }     
}

originalCont.addEventListener("click", copySection)
deleteElem.addEventListener("click", deleteSection)


