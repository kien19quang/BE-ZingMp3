const homeRouter = require("./home");
const albumRouter = require("./album");
const top100Router = require("./top100");
const chartRouter = require("./chart");
const artistRouter = require("./artist");
const songRouter = require("./song");
const authRouter = require("./auth");
const userRouter = require("./user");
const searchRouter = require("./searchSong");
const playlistFavoriteRouter = require("./playlistFavorite");

function route(app) {
  app.use("/album", albumRouter);
  app.use("/top100", top100Router);
  app.use("/zing-chart", chartRouter);
  app.use("/artist", artistRouter);
  app.use("/song", songRouter);
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/favorite", playlistFavoriteRouter);
  app.use("/search", searchRouter);
  app.use("/", homeRouter);
}

module.exports = route;
