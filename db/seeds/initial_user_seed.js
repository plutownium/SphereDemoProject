exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("testusers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("testusers").insert([
        {
          first_name: "Tom",
          last_name: "Bombadil",
          email: "tom@bombadil.io",
          country: "CA",
        },
        {
          first_name: "Eddie",
          last_name: "Van Halen",
          email: "eddie@playguitar.com",
          country: "CA",
        },
        {
          first_name: "Amos",
          last_name: "Burton",
          email: "engineer@rocinante.space",
          country: "US",
        },
        {
          first_name: "Luke",
          last_name: "Skywalker",
          email: "1withthaforce@starwars.com",
          country: "CA",
        },
      ]);
    });
};
