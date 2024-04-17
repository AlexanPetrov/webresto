// Tests

const request = require("supertest");
const app = require("../index");

describe("GraphQL API Tests", () => {
  describe("Query getMenuItems", () => {
    // Verifies that querying for appetizers returns exactly five items
    // with correct properties (name, description, price) and that the
    // first item matches expected values, ensuring data consistency and correctness.
    it("should fetch appetizers with correct properties", (done) => {
      const query = `
        query {
          getMenuItems(category: "appetizers") {
            name
            description
            price
          }
        }
      `;

      request(app)
        .post("/graphql")
        .send({ query })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          const { data } = res.body;
          expect(data.getMenuItems).toHaveLength(5);
          expect(data.getMenuItems[0]).toHaveProperty("name");
          expect(data.getMenuItems[0]).toHaveProperty("description");
          expect(data.getMenuItems[0]).toHaveProperty("price");
          expect(data.getMenuItems[0].name).toEqual(
            "Iceberg Wedge Salad with House Cured Bacon"
          );
          expect(data.getMenuItems[0].price).toBeGreaterThan(0);
          done();
        });
    });
    // Ensures that the query for entrees returns four items as expected
    // and checks that the last item is "Sesame Shrimp", confirming that
    // specific entries are retrieved accurately from the data set.
    it("should fetch entrees correctly", (done) => {
      const query = `
          query {
            getMenuItems(category: "entrees") {
              name
              description
              price
            }
          }
        `;

      request(app)
        .post("/graphql")
        .send({ query })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          const { data } = res.body;
          expect(data.getMenuItems).toHaveLength(4);
          expect(data.getMenuItems[3].name).toEqual("Sesame Shrimp");
          done();
        });
    });
    // Tests the API's robustness by requesting an invalid category
    // ('desserts') and verifying that it returns an empty array,
    // demonstrating the API's graceful handling of non-existent data categories.
    it("should handle invalid categories gracefully", (done) => {
      const query = `
          query {
            getMenuItems(category: "desserts") {
              name
              description
              price
            }
          }
        `;

      request(app)
        .post("/graphql")
        .send({ query })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          const { data } = res.body;
          expect(data.getMenuItems).toEqual([]);
          done();
        });
    });
  });
});
