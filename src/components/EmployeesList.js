import React, { Fragment } from "react";
import { Container, Typography } from "@mui/material";
import { fetchEmployees } from "../API";
import useFetchData from "../hooks/useFetchData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const EmployeesList = () => {
  const { fetchedData: employees } = useFetchData(() => {
    return fetchEmployees();
  });

  return (
    <Container>
      <Typography mb={5} variant="h5" fontWeight={"bold"}>
        Employees List
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {employees?.response?.map((employee) => (
          <Fragment>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <AccountCircleIcon color="action" fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                primary={employee.name}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`${employee.deparment} Department`}
                    </Typography>

                    <Typography>{`Address:  ${employee.address.street}, ${employee.address.city}, ${employee.address.country}`}</Typography>
                    <Typography>
                      {employee?.address?.subAddresses?.map(
                        (address) =>
                          `Sub-Address: ${address.street}, ${address.city}, ${address.country}`
                      )}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
          </Fragment>
        ))}
      </List>
    </Container>
  );
};

export default EmployeesList;
