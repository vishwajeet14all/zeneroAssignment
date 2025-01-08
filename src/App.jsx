import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";  // Import Grid and Container from Material-UI
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import Chart from "./components/Chart";
import DataTable from "./components/Table";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  // Fetching the API
  useEffect(() => {
    axios.get("http://localhost:5000/crm-data")
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(() => setError("Failed to fetch data"));
  }, []);

  const handleStatusFilter = (status) => {
    setFilteredData(data.filter(client => status === "All" || client.status === status));
  };

  const handleValueFilter = ([min, max]) => {
    setFilteredData(data.filter(client => client.opportunityValue >= min && client.opportunityValue <= max));
  };

  // Calculate active and inactive clients
  const activeClients = filteredData.filter(client => client.status === "Active").length;
  const inactiveClients = filteredData.filter(client => client.status === "Inactive").length;

  if (error) return <div>{error}</div>;

  return (
    <Container maxWidth="xl"> {/* Container for responsive layout */}
      <Grid container spacing={2}>
        {/* Filters Section */}
        <Grid item xs={12} md={3}>
          <Filters data={data} onStatusChange={handleStatusFilter} onValueChange={handleValueFilter} />
        </Grid>

        {/* Summary Section */}
        <Grid item xs={12} md={9}>
          <Summary data={filteredData} />
        </Grid>

        {/* Chart Section */}
        <Grid item xs={12} md={6}>
          <Chart activeClients={activeClients} inactiveClients={inactiveClients} />
        </Grid>

        {/* DataTable Section */}
        <Grid item xs={12} md={6}>
          <DataTable data={filteredData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
