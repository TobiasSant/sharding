# Sharding mongodb :four_leaf_clover:

Proof of concept of performance.
Three-node sharding with replication and data persistence

This example uses sharding to have several distributed microDBs and from a central node access to all the information. Only the central node has visibility of all the data, while the miniDBs only see their information.
Sharding is not being applied for horizontal growth and scalability of the system with chunk balancing.
 
Tag **[From a Shard Key Range](https://www.mongodb.com/docs/v3.2/tutorial/administer-shard-tags/#tag-a-shard)** is allocated to a small space without maintaining scalability.

- **Diagram of the docker to be deployed and its characteristics:** 
![Diagram of the docker to be deployed and its characteristics](/info/mongo-cluster-example.drawio.png)

- **Diagram of an example application and its operation:**

    This example has the same characteristics as the previous diagram but changes the docker locations. With this it is possible to have isolated control systems with data redundancy.
    ![Diagram of an example application and its operation](/info/mongo-cluster-apply.drawio.png)

## Environment configuration
> If you do not install the following programs, please install them only once 	:crossed_fingers:

- [Install docker :whale2:](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

Optional:
> To view and enter data in the db in a more user-friendly mode
> 
> [Install robo3t :robot:](https://snapcraft.io/install/robo3t-snap/ubuntu)


## Use	:dna:		

* Open a terminal in `cd persist/` and run:
```
bash hola.sh
```

> Note: You can view the docker containers with 
>
>```
>docker ps -a
>```

* Close run:
```
docker-compose down
```

* Kill and delete run:
```
docker-compose down -v --rmi all --remove-orphans
```

* View the data:
Open robo3t and connect to a specific port listed in `docker ps -a`

## Pipeline files


    ├── minimize
    │   ├── docker-compose.yml
    │   ├── hola.sh
    │   └── scripts
    │       └── ...
    ├── note
    │   └── ...
    ├── persist
    │   ├── docker-compose.yml
    │   ├── hola.sh
    │   └── scripts
    │       └── ...
    └── README.md


<hr>

## :pushpin: Basic operations

* In the mongos containers run:
```
sh.status()
```

* In the rs-shard containers run:
```
rs.status()
```

### :bomb::bomb::bomb: