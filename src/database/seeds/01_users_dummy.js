require('dotenv').config({ path: `${__dirname}/../../.env` });

const faker = require('faker');
const bcrypt = require('bcrypt');

const { usersMax } = require('./seedConfig.json');

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

exports.seed = knex => knex('users')
  .del()
  .then(async () => {
    const plainPassword = 'password';
    const dummyArr = [...Array(usersMax)];
    const usersPromises = dummyArr.map(async (data, index) => {
      const passwordHash = await bcrypt.hash(plainPassword + index, saltRounds);
      const user = {
        email: faker.internet.email(),
        hash: passwordHash,
        fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
      };
      return user;
    });

    return knex('users').insert(await Promise.all(usersPromises));
  });
