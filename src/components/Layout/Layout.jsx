import "./Layout.css";

function Layout({ children }) {
  return (
    <main className="layout">
      <div className="layout-container">
        {children}
      </div>
    </main>
  );
}

export default Layout;