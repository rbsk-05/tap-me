import './App.css';

function App() {

  const addTap = () => {
    const tapCount = document.getElementById('tap-count');
    let currentTap = parseInt(tapCount.innerText);
    currentTap += 1;
    tapCount.innerText = currentTap;
    console.log(currentTap);
  }

  const refreshTap = () => {
    const tapCount = document.getElementById('tap-count');
    tapCount.innerText = 0;
  }

  return (
    <>
      <div id="div-header">TAP ME!</div>
      <p id="sub-header">My First Tapping Project</p>

      <div id="tap-header">
        <div>Total Taps</div>
        <div id="tap-count">0</div>
      </div>
      
      <div id="div-button-header">
         <button id="tap-button" onClick={addTap}>TAP HERE</button>
      <button id="tap-refresh-button" onClick={refreshTap}>TAP FRESH</button>
      </div>

      <div id="div-footer">
        <p>💛 Made by Darshan | RBSK</p>
        <img src="darshan.jpg" alt="My photo"></img>
      </div>
    </>
  );
}

export default App;