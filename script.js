function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade era de <strong>${vel}km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você será <strong>multado</strong> por excesso de velocidade!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}