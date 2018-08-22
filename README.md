# goinside
*goinside* is a command line tool that helps you run bash inside docker containers easily.

# installation
install package globally on your system:
```
npm i goinside -g
```
or if you prefer yarn:
```
yarn global install goinside
```
# usage
let's say you have a docker container that has `bash` installed in it.
```
docker run -d  --name test_container ubuntu tail -F nothing
```
Now you can open up a terminal inside your container([with proper size](https://stackoverflow.com/questions/38786615/docker-number-of-lines-in-terminal-changing-inside-docker)):
```
goinside test_container
```
