rs.initiate({
  _id: "rs-configs",
  configsvr: true,
  version: 1,
  members: [
    { _id: 0, host: "configs01:27017" },
    { _id: 1, host: "configs02:27017" },
    { _id: 2, host: "configs03:27017" },
  ],
});

