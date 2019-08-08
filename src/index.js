console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => renderImages(json));
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => renderBreeds(json));
}

function renderBreeds(json) {
    const breedsContainer = document.getElementById('dog-breeds')
    Object.keys(json.message).forEach(breed => {
        const aBreed = document.createElement("li")
        aBreed.setAttribute("id", breed)
        aBreed.textContent = breed
        breedsContainer.appendChild(aBreed)
    })
    breedsContainer.addEventListener("click", function (e) {
        e.target.style.color = "red"
    })

    const breedDropDown = document.getElementById('breed-dropdown')
    breedDropDown.addEventListener("change", function (e) {
        const breedsContainer = document.getElementById('dog-breeds')
        const individualBreed = breedsContainer.children
        const breedsArray = [...individualBreed]
        breedsArray.forEach(breed => {
            if (breed.id[0] === e.target.value) {
                breed.style.display = null
            } else {
                breed.style.display = "none"
            }


        })

    })


}

function renderImages(json) {
    const imagesContainer = document.getElementById('dog-image-container')
    json.message.forEach(image => {
        const picture = document.createElement('img')
        picture.setAttribute('src', `${image}`)
        picture.setAttribute('width', "200")
        picture.setAttribute('height', "200")
        imagesContainer.appendChild(picture)
    })
}


