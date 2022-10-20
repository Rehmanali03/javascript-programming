function addClass() {
    const input = document.querySelector('#inp')
    const heading = document.querySelector('#heading')

    heading.classList.add(input.value)
}
function removeClass() {
    const input = document.querySelector('#inp')
    const heading = document.querySelector('#heading')

    heading.classList.remove(input.value)
}
function toggleClass() {
    const input = document.querySelector('#inp')
    const heading = document.querySelector('#heading')

    heading.classList.toggle(input.value)
}