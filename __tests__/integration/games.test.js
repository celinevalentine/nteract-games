process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../../app");
const db = require("../../db");

let testGame;

beforeEach(async () => {
  const result = await db.query(
    `INSERT INTO game VALUES (1, 'meetup','www.meetup.com') returning *`,
  );
  testGame = result.rows[0];
});

afterEach(async () => {
  await db.query("DELETE FROM game");
});

afterAll(async () => {
  await db.end();
});

describe("GET /games", function () {
  test("Get a list with one game", async function () {
    const resp = await request(app).get("/api/v1/games");
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual([testGame]);
  });
});
describe("GET /games/:id", function () {
  test("Gets one game", async function () {
    const resp = await request(app).get(`/api/v1/games/${testGame.id}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      game_name: "meetup",
      icon_url: "www.meetup.com",
      id: 1,
      task: [],
    });
  });
  test("Responds with 404 for invalid id", async () => {
    const res = await request(app).get(`/api/v1/games/0`);
    expect(res.statusCode).toBe(404);
  });
});

describe("POST /games", () => {
  test("creates a new game", async function () {
    const resp = await request(app).post("/api/vi/games").send({
      id: 100,
      game_name: "mixer",
      icon_url: "mixer.com",
    });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      id: 100,
      game_name: "mixer",
      icon_url: "mixer.com",
    });
  });
});

describe("PUT /api/v1/games/:id", () => {
  test("updates a single game", async function () {
    const resp = await request(app)
      .put(`/api/v1/games/1`)
      .send({ game_name: "MeetUp", icon_url: "www.meetup.com" });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      game_name: "MeetUp",
      icon_url: "www.meetup.com",
      id: 1,
    });
  });
  test("Responds with 404 if id invalid", async function () {
    const resp = await request(app)
      .put(`/api/v1/games/0`)
      .send({ game_name: "MeetUp", icon_url: "www.meetup.com" });
    expect(resp.statusCode).toBe(404);
  });
});

describe("DELETE /games/:id", () => {
  test("deletes a single a game", async function () {
    const resp = await request(app).delete`/api/v1/games/1`;
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "The game was deleted." });
  });
});
