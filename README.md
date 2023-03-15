# readme

```bash
# get container id
$ docker ps -a | grep "backend" | awk '{print $1}'
# get into container
$ docker exec -it <container_id> bash
# create test dir
$ mkdir /tmp/test && cd /tmp/test
# add 3 files: package.json, http1.js, http2.js
$ npm i
$ node http1.js
$ node http2.js
```
