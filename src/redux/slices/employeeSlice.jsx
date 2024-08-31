import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    {
      "firstName": "Alice",
      "lastName": "Smith",
      "birthDate": "2005-04-15",
      "startDate": "2022-05-01",
      "department": "Finance",
      "street": "456 Elm",
      "city": "Centerville",
      "state": "CA",
      "zipCode": "90210"
    },
    {
      "firstName": "Bob",
      "lastName": "Johnson",
      "birthDate": "1990-09-23",
      "startDate": "2019-11-15",
      "department": "Engineering",
      "street": "789 Oak",
      "city": "Greendale",
      "state": "TX",
      "zipCode": "75001"
    },
    {
      "firstName": "Carol",
      "lastName": "Williams",
      "birthDate": "1985-07-30",
      "startDate": "2018-08-20",
      "department": "Marketing",
      "street": "321 Maple",
      "city": "Riverside",
      "state": "FL",
      "zipCode": "32003"
    },
    {
      "firstName": "David",
      "lastName": "Miller",
      "birthDate": "1978-12-05",
      "startDate": "2015-03-10",
      "department": "Human Resources",
      "street": "102 Pine",
      "city": "Springfield",
      "state": "IL",
      "zipCode": "62704"
    },
    {
      "firstName": "Eve",
      "lastName": "Davis",
      "birthDate": "1982-01-20",
      "startDate": "2020-06-01",
      "department": "Sales",
      "street": "654 Birch",
      "city": "Fairview",
      "state": "CO",
      "zipCode": "80020"
    },
    {
      "firstName": "Frank",
      "lastName": "Garcia",
      "birthDate": "1995-11-11",
      "startDate": "2021-10-25",
      "department": "Customer Support",
      "street": "789 Cedar",
      "city": "Lakeview",
      "state": "NV",
      "zipCode": "89431"
    },
    {
      "firstName": "Grace",
      "lastName": "Harris",
      "birthDate": "1989-08-19",
      "startDate": "2017-04-13",
      "department": "Legal",
      "street": "123 Walnut",
      "city": "Hillside",
      "state": "OR",
      "zipCode": "97034"
    },
    {
      "firstName": "Henry",
      "lastName": "Martinez",
      "birthDate": "1992-03-15",
      "startDate": "2023-02-18",
      "department": "Product Management",
      "street": "567 Poplar",
      "city": "Sunrise",
      "state": "AZ",
      "zipCode": "85001"
    },
    {
      "firstName": "Ivy",
      "lastName": "Clark",
      "birthDate": "1983-10-10",
      "startDate": "2016-09-05",
      "department": "Design",
      "street": "890 Chestnut",
      "city": "Brookfield",
      "state": "GA",
      "zipCode": "30301"
    },
    {
      "firstName": "Jack",
      "lastName": "Lopez",
      "birthDate": "1975-05-27",
      "startDate": "2014-12-22",
      "department": "Operations",
      "street": "345 Ash",
      "city": "Mountain View",
      "state": "WA",
      "zipCode": "98033"
    },
    {
      "firstName": "Kathy",
      "lastName": "Robinson",
      "birthDate": "1987-11-29",
      "startDate": "2021-01-10",
      "department": "IT",
      "street": "901 Spruce",
      "city": "Mapleton",
      "state": "NY",
      "zipCode": "10001"
    },
    {
      "firstName": "Leo",
      "lastName": "Rodriguez",
      "birthDate": "1998-07-18",
      "startDate": "2022-07-01",
      "department": "Research and Development",
      "street": "678 Redwood",
      "city": "Lakewood",
      "state": "NV",
      "zipCode": "89406"
    },
    {
      "firstName": "Mia",
      "lastName": "Walker",
      "birthDate": "2001-02-09",
      "startDate": "2018-05-20",
      "department": "Quality Assurance",
      "street": "234 Cypress",
      "city": "Bayview",
      "state": "CA",
      "zipCode": "94016"
    },
    {
      "firstName": "Nathan",
      "lastName": "Young",
      "birthDate": "1970-06-17",
      "startDate": "2012-08-15",
      "department": "Sales",
      "street": "345 Fir",
      "city": "Haven",
      "state": "TX",
      "zipCode": "75074"
    },
    {
      "firstName": "Olivia",
      "lastName": "King",
      "birthDate": "1993-12-31",
      "startDate": "2023-04-12",
      "department": "Finance",
      "street": "456 Elmwood",
      "city": "Meadow",
      "state": "PA",
      "zipCode": "19103"
    }
  ],
};


const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    }
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
