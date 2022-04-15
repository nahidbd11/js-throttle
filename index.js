// Import stylesheets
import './style.css';

function throttle(fn, delay) {
  let lasttime = 0;
  return (...args) => {
    const now = new Date().getTime();
    console.log(now - lasttime);
    if (now - lasttime < delay) return;
    fn(...args);
    lasttime = now;
  };
}

function clicklog() {
  console.log('hellow world');
}
document
  .querySelector('button')
  .addEventListener('click', throttle(clicklog, 3000));
