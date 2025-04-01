import { useState } from "react";
import axios from "axios";

function App() {
  const [response, setResponse] = useState("");

  const getPara = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/generate", {
        message: "Write a one-sentence bedtime story about a unicorn.",
      });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    }
  };

  return (
    <div>
      <h1 onClick={getPara}>Click to Generate Story</h1>
      <p>{response}</p>
    </div>
  );
}

export default App;
