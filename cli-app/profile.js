#!/usr/bin/env node

const axios = require('axios');
const program = require('commander');

const getDataUserLoggin = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:5000/auth/users',
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });

    const { users } = response.data;

    if (!users) {
      return console.log('no user in database');
    }

    users.forEach((user) => {
      console.log(`${user.name} - ${user.email}`);
    })
  } catch (error) {
    console.log(error);
  }
};

program
  .command('get')
  .description('Get user loggin from server')
  .action(() => {
    getDataUserLoggin();
  });

program.parse(process.argv);
