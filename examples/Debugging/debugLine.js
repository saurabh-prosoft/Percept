var canvas = new Percept.Canvas(document.getElementById('canvas'));

var rect1 = new Percept.View.Rectangle('rect1', new Percept.Vector2(canvas.width / 2, canvas.height / 2), 40, 40, {
    fill: true,
    fillColor: 'red'
});
var rect2 = new Percept.View.Rectangle('rect2', new Percept.Vector2(100, 0), 20, 20, {
    fill: true,
    fillColor: 'green'
});
var rect3 = new Percept.View.Rectangle('rect3', new Percept.Vector2(50, 0), 10, 10, {
    fill: true,
    fillColor: 'blue'
});

rect3.parent = rect2;
rect2.parent = rect1;

var drawing = new Percept.Drawing(canvas, () => {
    rect2.rotation += 1;
    rect3.rotation += 2;

    Percept.Debug.debugLine('debug1', drawing, rect1.absolutePosition, rect2.absolutePosition, {color: 'black'});
    Percept.Debug.debugLine('debug2', drawing, rect2.absolutePosition, rect3.absolutePosition, {color: 'black'});
});

drawing.add(rect1);
drawing.add(rect2);
drawing.add(rect3);

canvas.draw(drawing);