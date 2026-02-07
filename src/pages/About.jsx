function About() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>

      <section>
        <h2>Project Overview</h2>
        <p>
          The Analytics Portal is a front-end web application built using React
          to provide interactive insights through embedded Tableau dashboards.
          The portal enables users to quickly analyze sales performance and
          quality metrics in a centralized, easy-to-use interface.
        </p>
      </section>

      <section>
        <h2>Data Sources</h2>
        <p>
          The dashboards are powered by data sourced from internal operational
          systems, including sales transactions and quality tracking records.
          The data is published to Tableau Public for visualization and
          reporting purposes.
        </p>
      </section>

      <section>
        <h2>Assumptions</h2>
        <ul>
          <li>Data is accurate and regularly updated at the source.</li>
          <li>Users have read-only access to dashboard insights.</li>
          <li>Metrics and KPIs are defined consistently across dashboards.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
