var canvas = new Percept.Canvas(document.getElementById('canvas'));

var middle = new Percept.View.Rectangle('middle', new Percept.Vector2(canvas.width / 2, canvas.height / 2), 70, 30, {
    fill: true,
    fillColor: '#cc99ff',
    outline: true,
    outlineColor: '#3385ff',
    shadowColor: '#d2ff4d',
    shadowBlur: 5
});
middle.on('mouseenter', () => {
    middle.props.fillColor = 'red';
    middle.childs.forEach((child) => {
        child.position.addInPlace(50);
    });
});
middle.on('mouseexit', () => {
    middle.props.fillColor = '#cc99ff';
    middle.childs.forEach((child) => {
        child.position = Percept.Vector2.Zero();
    });
});
var text = new Percept.View.Text('caption', middle.position.subtract(0, 40), 'Hover over me', {
    font: '12px Arial'
});

for (var i = 0 ; i < 10 ; i++) {
    var movingCirc = new Percept.View.Ellipse('movingCirc' + i, Percept.Vector2.Zero(), 5, 5, {
        fill: true,
        fillColor: Percept.Color.Random(),
        shadowColor: 'black',
        shadowBlur: 3
    });
    movingCirc.rotation = i * 36;
    movingCirc.on('update', (view) => {
        view.rotation += 1;
    });

    movingCirc.parent = middle;
}

var drawing = new Percept.Drawing(canvas);
drawing.add(middle);
drawing.add(text);
canvas.draw(drawing);