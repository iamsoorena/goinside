# Goinside
*goinside* is a command line tool that helps you run bash inside docker containers easily.

## Installation
Install package globally on your system:
```
npm i goinside -g
```
Or if you prefer yarn:
```
yarn global install goinside
```
## Usage
Let's say you have a docker container that has `bash` installed in it.
```
docker run -d  --name test_container ubuntu tail -F nothing
```
Now you can open up a terminal inside your container([with proper size](https://stackoverflow.com/questions/38786615/docker-number-of-lines-in-terminal-changing-inside-docker)):
```
goinside test_container
```
### dlist
Also this package comes with a modified version of `docker ps` command named `dlist`, you can use this one simpley by typing:
```
dlist
```
