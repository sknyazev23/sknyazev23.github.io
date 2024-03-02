const currentDate = new Date();
document.getElementById('demoTime').innerHTML = `Visit time:  ${currentDate}`;

let count = localStorage.getItem('visitorCount');
if (!count) {
  count = 0;
}
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('visitorCount').innerHTML = `Number of visitors:  ${count}`;
