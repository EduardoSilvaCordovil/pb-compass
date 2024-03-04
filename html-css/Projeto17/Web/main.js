function changeBackgroundColor() {
    let colors = ['red', 'orange', 'pink']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
}