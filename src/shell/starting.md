---
order: 0
---

# Zephyr Shell
To keep the base Zephyr installation small, the embedded shell for Zephyr is extremely simple and is intended to only ever cover basic functionality. 
We intend to create a more powerful shell as a plugin, but the basic shell should suffice for most users' needs.

## To start the Zephyr server
Start the Zephyr server via `<ZEPHYR_HOME>/bin/kernel-core -s -h <ZEPHYR_HOME>`
## To start the Zephyr client
Once the Zephyr server has been started, run
`<ZEPHYR_HOME>/bin/kernel-core -i` to connect to the running Zephyr server