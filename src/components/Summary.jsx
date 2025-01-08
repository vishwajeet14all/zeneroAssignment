import { Card, Typography, Grid, Box } from "@mui/material";

const Summary = ({ data }) => {
  const totalClients = data.length;
  const totalOpportunityValue = data
    .filter(client => client.status === "Active")
    .reduce((sum, client) => sum + client.opportunityValue, 0);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Total Clients */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ whiteSpace: 'nowrap' }}>
              Total Clients: {totalClients}
            </Typography>
          </Card>
        </Grid>

        {/* Total Opportunity Value */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ whiteSpace: 'nowrap' }}>
              Total Opportunity Value: {totalOpportunityValue}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;
