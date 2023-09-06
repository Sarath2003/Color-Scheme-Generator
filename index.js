function render(){
    let inputColorHex = document.getElementById('custom-color').value
    console.log(inputColorHex)
    const inputColorScheme = document.getElementById('color-scheme').value
    const colorCount = 5
    inputColorHex = inputColorHex.substr(1)
    getColors(inputColorHex, inputColorScheme, colorCount)
}

function getColors(hex, mode, count){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        const colorsArray = data.colors
        for(let i=0; i<count; i++){
            const newColorHex = colorsArray[i].hex.value
            document.getElementById(`color-${i}`).style.background = newColorHex
            document.getElementById(`color-hex-${i}`).innerHTML = `<span>${newColorHex}</span>`
        }
    })
}

render()

/* generate color palette button click */
const getColorPaletteBtn = document.getElementById('generate-colors-btn')
getColorPaletteBtn.addEventListener('click', () => render())

/* copy hex when clicked */
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
      let copyText = event.target.textContent;
      navigator.clipboard.writeText(copyText);
    }
});


