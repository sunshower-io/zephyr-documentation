# Zephyr Shell
To keep the base Zephyr installation small, the embedded shell for Zephyr is extremely simple and is intended to only ever cover basic functionality. 
We intend to create a more powerful shell as a plugin, but the basic shell should suffice for most users' needs.


## To start the Zephyr server
Start the Zephyr server via `<ZEPHYR_HOME>/bin/kernel-core -s`

### CLI Arguments

#### Home Directory
To set the home directory, provide `-h` or `--home-directory` and a path. By default, the home directory is `zephyr`. Plugins are installed and logs are written to this directory.

#### Logging Level
The log level specificity is Level.WARNING by default. `-l` or `--log-level` and a level will override this. For example, `-l info` will lower it.


## To start the Zephyr client
Once the Zephyr server has been started, run
`<ZEPHYR_HOME>/bin/kernel-core -i` to connect to the running Zephyr server

## Commands
Commands are grouped by functionality.  The general format is `<function> <command> <arguments>`.  For instance `server start` will
attempt to start the Zephyr server, and `plugin install http://plugin-url http://plugin-url2` will attempt to install the files
at `http://plugin-url and http://plugin-url2`


## Getting Help
Running `help` at the command line displays the list of available commands:
![Help](./img/help.png)

## Plugin Management
The `plugin` command-set contains all of the available actions to perform on plugins.  Plugins may be `start`ed, `stop`ped, `install`ed, `list`ed, or `remove`d.







