window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

console.log('vinculado con exito')

let $ = (e) => document.querySelector(e)

const funcValidate = (obj) => {
    let arr = Object.values(obj)
    console.log(arr);
    if (!arr.includes(false)) {
        btn.disabled = false
        btn.style.backgroundColor = '#198754'
    }else{
        btn.disabled = true
        btn.style.backgroundColor = 'blue'
    }
}
let form = $('#form')
let errores = $('#errores')
let inputTitulo = $('#title')

let rating = $('#rating')
let awards = $('#awards')
let release = $('#release_date')
let duracion = $('#length')
let genre = $('#genre_id')


let btn = $('#btn-agregar')

inputTitulo.focus()

inputTitulo.addEventListener('blur', (e) => {
    let error = "<li id='titleError'> Debes escribir un titulo </li>"
    if(!inputTitulo.value) {
        inputTitulo.classList.add('is-invalid')
        inputTitulo.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.titulo = false
    }else {
        inputTitulo.classList.remove('is-invalid')
        inputTitulo.classList.add('is-valid')
        $('#titleError').innerHTML = ""
        errores.classList.remove('alert-warning')
        validate.titulo = true
    }
    funcValidate(validate)
}) 
rating.addEventListener('blur', (e) => {
   
    let error = "<li id='titleError'> Debes escribir el rating </li>"
    if(!rating.value) {
        rating.classList.add('is-invalid')
        rating.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        $('#ratingError') ? null : errores.innerHTML += error
        validate.rating = false
    }else if (rating.value <= 0 || rating.value > 10){
        rating.classList.add('is-invalid')
        rating.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        $('#ratingError') ? $('#ratingError').innerText = "La puntuacion debe estar entre 1 y 10" : errores.innerHTML += error
        validate.rating = false
    }else {
        rating.classList.remove('is-invalid')
        rating.classList.add('is-valid')
        errores.removeChild($('#ratingError'))

        validate.rating = true
    }
    funcValidate(validate)
}) 
awards.addEventListener('blur', (e) => {
    let error = "<li id='titleError'> Debes escribir los premios </li>"
    if(!awards.value) {
        awards.classList.add('is-invalid')
        awards.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.awards = false
    }else if (awards.value <= 0 || awards.value > 10){
        awards.classList.add('is-invalid')
        awards.classList.remove('is-valid')
        validate.awards = false
    }else {
        awards.classList.remove('is-invalid')
        awards.classList.add('is-valid')
        validate.awards = true
    }
    funcValidate(validate)
}) 
release.addEventListener('blur', (e) => {
    let error = "<li id='titleError'> Debes escribir la fecha de creacion </li>"
    if(!release.value) {
        release.classList.add('is-invalid')
        release.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.release = false
    }else {
        release.classList.remove('is-invalid')
        release.classList.add('is-valid')
        validate.release = true
    }
    funcValidate(validate)
}) 
duracion.addEventListener('blur', (e) => {
    let error = "<li id='titleError'> Debes escribir la duracion </li>"
    if(!duracion.value) {
        duracion.classList.add('is-invalid')
        duracion.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.duracion = false
    }else if (duracion.value <= 59 || duracion.value > 360){
        duracion.classList.add('is-invalid')
        duracion.classList.remove('is-valid')
        validate.duracion = false
    }else {
        duracion.classList.remove('is-invalid')
        duracion.classList.add('is-valid')
        validate.duracion = true
    }
    funcValidate(validate)
    
}) 
genre.addEventListener('blur', (e) => {
    let error = "<li id='titleError'> Debes escribir el genero </li>"
    if(!genre.value) {
        genre.classList.add('is-invalid')
        genre.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.genre = false
    }else {
        genre.classList.remove('is-invalid')
        genre.classList.add('is-valid')
        validate.genre = true
    }
    funcValidate(validate)
}) 
btn.addEventListener('click', () => {
    window.alert('La película se guardó satisfactoriamente')
})

const validate = {
    titulo : false,
    rating : false, 
    awards : false,
    release : false,
    duracion : false,
    genre : false
}
funcValidate(validate)


}