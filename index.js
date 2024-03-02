document.getElementById('demoTime').innerHTML = new Date();

let count = localStorage.getItem('visitorCount');
if (!count) {
  count = 0;
}
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('visitorCount').innerHTML = `Number of visitors: ${count}`;
