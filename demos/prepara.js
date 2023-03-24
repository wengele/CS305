
function ethi() {
    let abek = {
        orgin: true,
        expression: function () {
            console.log(this);
        }
    };

    let innerFn = abek.expression;
    innerFn();
    abek.expression();
}
ethi();