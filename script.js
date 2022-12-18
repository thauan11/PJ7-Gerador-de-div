var x = 1

while (x <= 1) {
    document.getElementById('flex-justo')
        document.write('<div id="borda"><div id="quadrado"></div><div class="lorem"><section>'+x+' - Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci perspiciatis, asperiores distinctio et blanditiis magni alias eum quos voluptate ab, pariatur fugiat possimus quibusdam cumque architecto at voluptatibus itaque!</section></div></div>')
    x++
}

function addSection() {
    var idFlexJusto = document.getElementById('flex-justo')
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var section = document.createElement('section')
    div.id = 'borda'
    div2.id = 'quadrado'
    div3.className = 'lorem'
    section.textContent = x+' - Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci perspiciatis, asperiores distinctio et blanditiis magni alias eum quos voluptate ab, pariatur fugiat possimus quibusdam cumque architecto at voluptatibus itaque!'
    idFlexJusto.appendChild(div)
    idFlexJusto.lastChild.appendChild(div2)
    idFlexJusto.lastChild.appendChild(div3)
    idFlexJusto.lastChild.lastChild.appendChild(section)
    x++
}

function fixaBarra() {
    document.getElementById('nav-botao').style.backgroundColor = '#1d1d1dc0'
    document.getElementById('nav-botao').style.borderColor = '#f5f5f5c7'
}

function voltaBarra() {
    document.getElementById('nav-botao').style.backgroundColor = '#1d1d1d'
    document.getElementById('nav-botao').style.borderColor = '#whitesmoke'
}