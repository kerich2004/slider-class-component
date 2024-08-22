class Slider {
  constructor(parent, width, height) {
    this.parent = parent
    this.width = width
    this.height = height
    this.images = []
    this.index = 0
  }

  render() {
    this.parent.innerHTML = html`
      <div class="slider">
        <button>last</button>
        <div class="track">
        </div>
        <button>next</button>
      </div>
    `
    const slider = this.parent.firstElementChild
    slider.style.width = this.width + 'px'
    slider.style.height = this.height + 'px'
    let markup = ''

    for (let i = 0; i < this.images.length; i++) {
      markup += html`<img src="images/${this.images[i]}">`
    }
    this.track = slider.querySelector('.track')
    this.track.innerHTML = markup

    this.assignListeners()
  }

  assignListeners() {
    const [prevBtn, nextBtn] = this.parent.querySelectorAll('button')
    this.prevBtn = prevBtn
    this.nextBtn = nextBtn
    nextBtn.onclick = this.nextImage
    prevBtn.onclick = this.prevImage
    // nextBtn.onclick = this.nextImage.bind(this)
    // nextBtn.onclick = () => this.nextImage()
  }

  addImages(...urls) {
    slider.images.push(...urls)
  }

  nextImage = () => {
    // if (this.index == this.images.length-1) return
    this.index++
    if (this.index == this.images.length) this.index = 0
    this.track.style.left = -this.width * this.index + 'px'
    this.nextBtn.innerText = this.index < this.images.length - 1 ? 'next' : 'first'
    this.prevBtn.innerText = this.index > 0 ? 'prev' : 'last'
  }

  prevImage = () => {
    this.index--
    if (this.index < 0) this.index = this.images.length - 1
    this.track.style.left = -this.width * this.index + 'px'
    this.nextBtn.innerText = this.index < this.images.length - 1 ? 'next' : 'first'
    this.prevBtn.innerText = this.index > 0 ? 'prev' : 'last'
  }
}

const html = String.raw
