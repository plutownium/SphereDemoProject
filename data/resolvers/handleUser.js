async function getUser(args, context) {
  const { id, email } = args;
  const { knex } = context;

  const payload = /@/.test(email) ? { email } : { id: +id };

  const userRecord = await knex("testusers").where(payload);

  return userRecord[0];
}

async function getUsers(context) {
  const { knex } = context;

  return await knex("testusers");
}

module.exports = { getUser, getUsers };
