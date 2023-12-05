function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    document.getElementById('clock').textContent = timeString;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();