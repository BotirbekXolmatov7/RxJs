const { fromEvent } = rxjs;
const { map } = rxjs.operators;


const button = document.getElementById('myButton');
const countDisplay = document.getElementById('count');

const clickStream = fromEvent(button, 'click');

clickStream.pipe(
  map(() => parseInt(countDisplay.textContent) + 1)
).subscribe(count => {
  countDisplay.textContent = count;
});