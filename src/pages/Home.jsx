function Home() {
  return (
    <div className="home-container">
      <img src="./logo.png" alt="Analytics Logo" className="sidebar-logo" />

      <h1 className="home-title">Analytics Portal</h1>

      <p className="home-subtitle">
        Welcome to the Analytics Portal — your centralized platform for
        data-driven insights across sales performance and quality metrics.
      </p>

      <div className="home-cards">
        <div className="card">
          <h3>📊 Sales Insights</h3>
          <p>Track revenue trends, growth metrics, and regional performance.</p>
        </div>

        <div className="card">
          <h3>✅ Quality Metrics</h3>
          <p>Monitor quality KPIs to ensure operational excellence.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
