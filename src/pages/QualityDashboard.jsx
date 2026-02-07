function QualityDashboard() {
  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Quality Dashboard</h1>

      <div className="tableau-container">
        <iframe
          src="https://public.tableau.com/views/RetailChainDashboard1/QualityDashboard?:showVizHome=no&:embed=true"
          title="Quality Dashboard"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default QualityDashboard;
