const temperatureC = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
let temperatureF = (9 / 5) * temperatureC + 32;
// temperatureF = Math.round(temperatureF, -1);
temperatureF = temperatureF.toFixed(1);
alert(`Цельсий: ${temperatureC} , Фаренгейт:  ${temperatureF}`);