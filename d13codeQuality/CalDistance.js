
export function calDistance(x1, y1, x2, y2) {
    let xInt = (x2 - x1);
    let yInt = (y2 - y1);
    const dis = Math.sqrt(xInt ** 2 + yInt ** 2);
    return parseInt(dis);
}

console.log(calDistance(0, 0, 5, 5));

