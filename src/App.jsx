import './App.scss';
import qr from "../public/image-qr-code.png";

export default function App() {
  return (
    <main>
      <div className="container">
        <img src={qr}></img>
        <div>
          <h1>Improve your front-end skills by buildings projects</h1>
          <p>Scan the QR code to visit FrontEnd Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  )
}
