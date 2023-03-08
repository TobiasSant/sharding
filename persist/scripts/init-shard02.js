rs.initiate({
  _id: "rs-shard02",
  version: 1,
  members: [
    { _id: 0, host: "shard02-a:27017" },
    { _id: 1, host: "shard02-b:27017" },
    { _id: 2, host: "shard02-c:27017" },
  ],
});

cfg = rs.conf()
cfg.members[0].priority = 1
cfg.members[1].priority = 0.5
cfg.members[2].priority = 0
rs.reconfig(cfg)