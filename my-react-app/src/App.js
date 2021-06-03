import { useState } from "react";
import "./styles.css";
import Modal from "./Modal";

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      {status && (
        <Modal closeModal={() => setStatus(false)}>
          <p>Menu content</p>
        </Modal>
      )}
      <div className="container">
        <h2>Page content</h2>
        <button onClick={() => setStatus(true)}>Open</button>
      </div>
    </div>
  );
}
