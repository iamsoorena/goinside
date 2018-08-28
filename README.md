# Goinside
*goinside* is a command line tool that helps you run bash inside docker containers easily.
You can look at `goinside` as an alternative for `docker exec -it container_name bash` with some tweaks.

People have problems with going inside docker containers.

like:

* [How do I get into a Docker container?](https://stackoverflow.com/questions/30172605/how-do-i-get-into-a-docker-container)

* [How to get bash or ssh into a running container in background mode?](https://askubuntu.com/questions/505506/how-to-get-bash-or-ssh-into-a-running-container-in-background-mode)

* [How to enter in a Docker container already running with a new TTY](https://stackoverflow.com/questions/20932357/how-to-enter-in-a-docker-container-already-running-with-a-new-tty)

* [How do I run a command on an already existing Docker container?](https://stackoverflow.com/questions/26153686/how-do-i-run-a-command-on-an-already-existing-docker-container)

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
Also this package comes with a modified version of `docker ps` command named `dlist`, you can use this one simply by typing:
```
dlist
```
