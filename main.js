var btn = document.getElementById('clk')
var inp_weight = document.getElementById('weight')
var inp_height = document.getElementById('height')
var all_res = document.getElementById('all_res')
var res_place = document.getElementById('res_place')
var classification = document.getElementById('classification')

btn.addEventListener('click', () => {
    var total = Number(inp_weight.value) / Number((Math.pow(inp_height.value, 2)))


    res_place.innerHTML = total

    if (inp_weight.value != '' && inp_height.value != '') {
        all_res.style.display = 'block'
    } else {
        alert('pleae fill all inputs!!')
    }

    // this is cases for app
    if (total < 18) {
        classification.innerHTML = 'نحافة'
    } else if (total >= 18 && total <= 24.9) {
        classification.innerHTML = 'وزن مثالى'
    } else if (total >= 25 && total <= 29.9) {
        classification.innerHTML = 'وزن زائد'
    } else if (total >= 30 && total <= 34.9) {
        classification.innerHTML = 'سمنة درجة أولى'
    } else if (total >= 35 && total <= 39.9) {
        classification.innerHTML = 'سمنة درجة ثانية'
    } else if (total >= 40) {
        classification.innerHTML = 'سمنة خطيرة'
    }


})




