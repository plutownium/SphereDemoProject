const resolvers = {
  Query: {
    async user(parent, args, context, info) {
      // please note, this isn't cleaning up your code, as much as it is  making it easier for me to process my own mutation
      const { id, email } = args;
      const { knex } = context;

      const payload = /@/.test(email) ? { email } : { id: +id };

      const userRecord = await knex("testusers").where(payload);

      return userRecord[0];
    },
    async users(parent, args, context, info) {
      const { knex } = context;

      return await knex("testusers");
    },
  },
  Mutation: {
    // followed tutorial here as a guideline: https://www.tutorialspoint.com/graphql/graphql_mutation.htm
    changeUserInfo(root, args, context, info) {
      // would turn db.students.create into something more in line with postgreSQL, but I'm unfamiliar with it
      return db.students.create({
        first_name: args.first_name,
        last_name: args.last_name,
        email: args.email,
        country: args.country,
      });
    },
  },
};

module.exports = [resolvers];
