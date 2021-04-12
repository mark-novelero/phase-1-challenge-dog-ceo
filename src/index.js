console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', e => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(e => {
        let dogImage = document.querySelector('div#dog-image-container')
        let picture = document.createElement('img')
        e.message.forEach(e => {picture.src = e.value
        dogImage.append(picture)})
        
    })
})
