const header = document.querySelector('header')
const slider = new Slider(header,500, 500) 
const urls = ['person.webp', 'frog.jpeg', 'home.jpeg']

slider.addImages(...urls)
slider.render()