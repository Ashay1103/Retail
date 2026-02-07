function SalesDashboard() {
  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Sales Dashboard</h1>

      <div className="tableau-container">
        <iframe
          src="https://public.tableau.com/views/RetailChainDashboard_17704799250340/SalesDashboard?:showVizHome=no&:embed=true"
          title="Sales Dashboard"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default SalesDashboard;
