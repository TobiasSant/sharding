# Sharding mongodb

Three-node sharding with replication and data persistence

Proof of concept of performance. Tag **[From a Shard Key Range](https://www.mongodb.com/docs/v3.2/tutorial/administer-shard-tags/#tag-a-shard)** is allocated to a small space without maintaining scalability.


## Environment configuration
> If you do not install the following programs, please install them only once 	:crossed_fingers:

Install docker


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


### :bomb::bomb::bomb: