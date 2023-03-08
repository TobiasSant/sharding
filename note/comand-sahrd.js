// Enable sharding for database `MyDatabase`
sh.enableSharding("MyDatabase")



// Setup shardingKey hashed for collection `MyCollection`
db.adminCommand( { shardCollection: "MyDatabase.MyCollection", key: { shId: "hashed",}} )
//Balancer off
sh.setBalancerState(false)
sh.enableBalancing("MyDatabase.MyCollection")



// Setup shardingKey zones for collection `MyCollection`
sh.addShardToZone("rs-shard01", "shard01")
sh.addShardToZone("rs-shard02", "shard02")
sh.addShardToZone("rs-shard03", "shard03")

sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: "10" }, { zipcode: "20" }, "shard01")
sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: "20" }, { zipcode: "30" }, "shard02")
sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: "30" }, { zipcode: "40" }, "shard03")

db.adminCommand( { shardCollection: "MyDatabase.MyCollection", key: {zipcode: 1} } )


// Setting the priority of the members of the replica set.
cfg = rs.conf()
cfg.members[0].priority = 1
cfg.members[1].priority = 0.5
cfg.members[2].priority = 0
rs.reconfig(cfg)


/***
 * mongodb://localhost:27122/MyDatabase?directConnection=true&replicaSet=rs-shard-01&retryWrites=true
 * 
 * mongodb://localhost:27122,localhost:27123,localhost:27124/MyDatabase?directConnection=true&replicaSet=rs-shard-01&retryWrites=true
 * 
 */
