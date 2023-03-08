rs.initiate({
  _id: "rs-shard03",
  version: 1,
  members: [
    { _id: 0, host: "shard03-a:27017" },
    { _id: 1, host: "shard03-b:27017" },
    { _id: 2, host: "shard03-c:27017" },
  ],
});

cfg = rs.conf()
cfg.members[0].priority = 1
cfg.members[1].priority = 0.5
cfg.members[2].priority = 0
rs.reconfig(cfg)