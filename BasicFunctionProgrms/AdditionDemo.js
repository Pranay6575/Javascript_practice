var value = prompt("enter no"),
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

alert((sum));
