function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Background Image */}
      <img
        src="/hero-bg.jpg"
        alt="Komorebi House"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#f3f4f6",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      ></div>

      {/* Content - centered */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div style={{ textAlign: "center", padding: "0 16px" }}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "24px",
            }}
          >
            Komorebi House
          </h1>
          <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.9)" }}>
            Where sunlight dances through the leaves
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
