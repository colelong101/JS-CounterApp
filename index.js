const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// initialize the count to zero
let count = 0;

// add event listeners to the buttons
incrementBtn.addEventListener('click', () => {
  // increment the count by 1
  count++;
  // update the count displayed on the page
  countEl.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  // decrement the count by 1
  count--;
  // update the count displayed on the page
  countEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
  // reset the count to zero
  count = 0;
  // update the count displayed on the page
  countEl.textContent = count;
});