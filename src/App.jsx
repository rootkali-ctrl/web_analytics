import { useAuth } from "./AuthContext";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const { user } = useAuth();

  // user === undefined means still loading Firebase auth state
  if (user === undefined) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0f",
      }}>
        <div style={{
          width: "32px",
          height: "32px",
          border: "2px solid rgba(255,255,255,0.15)",
          borderTop: "2px solid #6c63ff",
          borderRadius: "50%",
          animation: "spin 0.7s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return user ? <Dashboard /> : <AuthPage />;
}

export default App;
