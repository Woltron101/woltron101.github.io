var sliderTop = document.getElementById('slider_top');
noUiSlider.create(sliderTop, {
    start: [0.50],
    step: 0.01,
    range: {
        'min': [0.50],
        'max': [8]
    },
    format: wNumb({
        decimals: 2,
        thousand: ''
    })
});
var inputTop = document.getElementById('input_top');

sliderTop.noUiSlider.on('update', function(values, handle) {
    inputTop.value = values[handle];
});

inputTop.addEventListener('change', function() {
    sliderTop.noUiSlider.set(this.value);
});

var sliderBot = document.getElementById('slider_bot');
noUiSlider.create(sliderBot, {
    start: [0.50],
    step: 0.01,
    range: {
        'min': [0.50],
        'max': [8]
    },
    format: wNumb({
        decimals: 2,
        thousand: ''
    })
});
var inputBot = document.getElementById('input_bot');

sliderBot.noUiSlider.on('update', function(values, handle) {
    inputBot.value = values[handle];
});

inputBot.addEventListener('change', function() {
    sliderBot.noUiSlider.set(this.value);
});



var sliderRight = document.getElementById('slider_right');
noUiSlider.create(sliderRight, {
    start: [0.50],
    step: 0.01,
    orientation: "vertical",
    // direction: 'rtl',
    range: {
        'min': [0.50],
        'max': [8]
    },
    format: wNumb({
        decimals: 2,
        thousand: ''
    })
});
var inputRight = document.getElementById('input_right');

sliderRight.noUiSlider.on('update', function(values, handle) {
    inputRight.value = values[handle];
});

inputRight.addEventListener('change', function() {
    sliderRight.noUiSlider.set(this.value);
});
var sliderLeft = document.getElementById('slider_left');

noUiSlider.create(sliderLeft, {
    start: [0.50],
    step: 0.01,
    orientation: "vertical",
    // direction: 'rtl',

    range: {
        'min': [0.50],
        'max': [8]
    },
    format: wNumb({
        decimals: 2,
        thousand: ''

    })
});
var inputLeft = document.getElementById('input_left');

sliderLeft.noUiSlider.on('update', function(values, handle) {
    inputLeft.value = values[handle];
});

inputLeft.addEventListener('change', function() {
    sliderLeft.noUiSlider.set(this.value);
});

