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

function clicklog(name) {
  console.log(`hellow ${name}`);
}
const logger = throttle(clicklog, 3000);
document
  .querySelector('button')
  .addEventListener('click', () => logger('nahid'));
