README – Sales & Quality Dashboard (Tableau)

1. Overview
   This project contains interactive Tableau dashboards designed to analyze Sales Performance and
   Quality Performance across outlets over time. The dashboards help stakeholders monitor KPIs, identify
   trends, compare outlets, and support data-driven decision-making.
   The solution is built using Tableau Desktop and published to Tableau Public.
2. Design Choices
   2.1 Dashboard Structure
   • Two dashboards were created:
   o Sales Dashboard – focuses on revenue, profitability, outlet performance, and time trends.
   o Quality Dashboard – focuses on defect rates, service quality, operational accuracy, and
   resolution efficiency.
   • KPI-first layout:
   o Key KPIs are placed at the top for quick executive insights.
   o Trend charts and outlet-wise comparisons are placed below for deeper analysis.
   2.2 KPI Design
   • Aggregated KPIs (SUM or AVG) are used instead of row-level values to ensure accuracy and
   performance.
   • Direction-aware KPIs are applied:
   o Higher is better (e.g., Quality Score, Audit Compliance, Fulfillment Accuracy).
   o Lower is better (e.g., Defect Rate, Return Rate, Avg Issue Resolution Time).
   2.3 Trend Analysis
   • A Month-Year continuous date is used to ensure proper time-series analysis.
   • Rolling averages and benchmarks are used where applicable to improve trend readability.
   • Trends are designed to avoid clutter by focusing on selected outlets via filters.
   2.4 Filters & Interactivity
   • Global filters are provided for:
   o Outlet Name
   o Location (if applicable)
   o Month / Year
   • Filters are applied across all related worksheets to maintain consistency.
   2.5 Performance & Usability
   • Limited color palette to reduce visual noise.
   • Consistent formatting across dashboards.
   • Minimal tooltips with only relevant information.
3. Assumptions
   The following assumptions were made while designing the dashboards:
   • Data provided in xyz_Sales and xyz_Quality datasets is accurate and pre-cleaned.
   • Percentage fields (e.g., Defect_Rate_pct, Return_Rate_pct) are already calculated at source level.
   • Month and Year fields represent calendar months.
   • Avg_Issue_Resolution_Time_hrs represents average resolution time per outlet per month.
   • No missing or duplicate outlet identifiers.
   • Business benchmarks (acceptable defect rate, resolution time, etc.) are not explicitly provided;
   therefore, overall averages are used as reference points.
4. How to Run the Web App / Dashboard
   Option 1: Using Tableau Desktop (Local)
5. Install Tableau Desktop.
6. Open the provided .twb (Tableau Packaged Workbook) file.
7. Tableau will automatically load all embedded data sources.
8. Navigate between dashboards using the dashboard tabs.
9. Use filters to interact with the data.
   Option 2: Tableau Public and ReactUI (Web)
10. Open the provided Tableau Public URL (1. Sales -
    https://public.tableau.com/app/profile/ashay.dike/viz/RetailChainDashboard_17704799250340/
    SalesDashboard?publish=yes
11. Quality -
    https://public.tableau.com/views/RetailChainDashboard1/QualityDashboard?:language=en
    US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link ).
12. For React UI web page access click on the provided link - https://69877e5e5c1282bcd5b8ab1e-
    melodic-clafoutis-57b2e5.netlify.app/
13. No installation is required.
14. Use filters and interactive elements directly in the browser.
15. Files Included
    • Sales_Quality_Dashboard.twb – Packaged Tableau workbook containing:
    o Sales Dashboard
    o Quality Dashboard
    o Embedded data sources
16. Tools & Technologies
    • Tableau Desktop
    • Tableau Public
    • CSV / Extract-based data sources
17. Author
    Created by Ashay Dike as part of an analytics assignment to demonstrate Tableau dashboard design, KPI
    creation, trend analysis, and data storytelling best practices.
