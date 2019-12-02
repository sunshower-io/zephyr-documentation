# Installation

## Installing the Kernel
To install Zephyr on your local system, you will require git, Maven 3+ and Gradle 6. [The repository](https://github.com/sunshower-io/zephyr) can be cloned from `git@github.com:sunshower-io/zephyr.git`.

Run `mvn clean install -f bom && gradle clean assemble build sA` to install all the dependencies and execute the tests.

Building from master should always build successfully. The build is set up to use both PMD and SpotBugs, so if the build fails you may get a listing of errors from those programs as well as any test failures.


## Running the Kernel


## Installing a Module


## Installing a Plugin