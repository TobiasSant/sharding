rs.initiate({
  _id: "rs-configs",
  configsvr: true,
  version: 1,
  members: [{ _id: 0, host: "configs01:27017" }],
});
