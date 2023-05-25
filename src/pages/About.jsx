import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    window.history.pushState(null, "", "/");
  }, []);

  return (
    <div className="App">
      <main>
        <h1>About</h1>
        <button
          onClick={() => {
            // window.location.pathname = "/change";
            window.history.pushState(null, "", "/");
          }}
        >
          Change
        </button>
      </main>
    </div>
  );
};
