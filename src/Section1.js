import pic1 from './pic1.jpg';
import './App.css';

function Section1() {
  return (
    <div className="Section1">
      <div className="sec1-flex-container">
        <div className="sec1-flex-item-left">
          <h1>Transcosmos Ecommerce</h1>
          <h3>Buy 1 Get 2</h3>
          </div>
        <div className="sec1-flex-item-right">
        <img src={pic1} className="App-cosmos-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
