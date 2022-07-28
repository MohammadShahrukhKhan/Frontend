let sentence = ['Hey', 'my', 'name', 'is', 'shahrukh']

for (i= 0; i < sentence.length; i++){
}

(function loop() {
    sentence.length && (console.log(sentence.shift()), setTimeout(loop, 1000));
})(); //Elements of the " sentence " array are processed one by one.
