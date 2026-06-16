import { useAuth } from "../AuthContext";
import "./Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const getInitials = (name) => {
    if (!name) return "U";
    return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dash-blob dash-blob-1" />
      <div className="dash-blob dash-blob-2" />

      <nav className="dash-nav">
        <div className="dash-brand">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Talk
        </div>

        <div className="dash-user">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="avatar" className="dash-avatar" referrerPolicy="no-referrer" />
          ) : (
            <div className="dash-avatar dash-avatar-initials">
              {getInitials(user?.displayName || user?.email)}
            </div>
          )}
          <button className="dash-logout-btn" onClick={logout}>
            Sign Out
          </button>
        </div>
      </nav>

      <main className="dash-main">
        <div className="dash-welcome-card">
          <div className="dash-welcome-icon">🎉</div>
          <h1 className="dash-welcome-title">
            Welcome{user?.displayName ? `, ${user.displayName.split(" ")[0]}` : ""}!
          </h1>
          <p className="dash-welcome-sub">
            You're successfully signed in to Talk.
          </p>
          <div className="dash-user-info">
            <div className="dash-info-row">
              <span className="dash-info-label">Email</span>
              <span className="dash-info-value">{user?.email}</span>
            </div>
            <div className="dash-info-row">
              <span className="dash-info-label">Provider</span>
              <span className="dash-info-value">
                {user?.providerData?.[0]?.providerId === "google.com" ? "Google" : "Email / Password"}
              </span>
            </div>
            <div className="dash-info-row">
              <span className="dash-info-label">UID</span>
              <span className="dash-info-value dash-uid">{user?.uid}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
