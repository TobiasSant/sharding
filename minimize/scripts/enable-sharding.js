sh.enableSharding("MyDatabase")
sh.setBalancerState(false)

sh.addShardToZone("rs-shard01", "shard01")
sh.addShardToZone("rs-shard02", "shard02")
sh.addShardToZone("rs-shard03", "shard03")

sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: MinKey() }, { zipcode: "10" }, "shard01")
sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: "10" }, { zipcode: "20" }, "shard01")
sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: "20" }, { zipcode: "30" }, "shard02")
sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: "30" }, { zipcode: "40" }, "shard03")
db.adminCommand( { shardCollection: "MyDatabase.MyCollection", key: {zipcode: 1} } )
sh.updateZoneKeyRange("MyDatabase.MyCollection", { zipcode: "40" }, { zipcode: MaxKey() }, "shard01")