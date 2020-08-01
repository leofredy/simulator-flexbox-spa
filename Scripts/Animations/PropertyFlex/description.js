const displayElement = document.querySelectorAll('.option-flex')
displayElement.forEach(element => {
    element.addEventListener('mouseover', showDescription, false)
    element.addEventListener('mouseleave', disappearDescriptionn, false)
})
function showDescription(event){
    const description = document.querySelector(`.description-propriedades-${event.target.id}`)
    description.style.display = 'block'
}
function disappearDescriptionn(event){
    const description = document.querySelector(`.description-propriedades-${event.target.id}`)
    description.style.display = 'none'
}
