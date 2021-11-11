---
order: 0
---
# Prerequisites

These prerequisites should apply to most or all facets of working with Zephyr and Zephyr Plugins

## Installation with [SDKMAN](https://sdkman.io)
1. Follow the directions for [installing SDKMan](https://sdkman.io/install)
2. Install a [JDK](https://sdkman.io/jdks) (We like Zulu JDK 11)
3. Install Maven by running:
   1. `sdk list maven`.  You should see something like:
       ```
      ================================================================================
      ================================================================================
      Available Maven Versions
      ================================================================================
      3.8.3                                                                      
      3.8.2                                                                      
      3.8.1
      ```
   2. Select your version (e.g. `3.8.3`) and run `sdk install maven `\<version>`
   3. Verify the installation by running `maven -v`.  You should see something like:
      ```
       ➜  zephyr git:(dependencies/dependency-order) ✗ mvn -v
       Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
       Maven home: /home/josiah/.sdkman/candidates/maven/current
       Java version: 11.0.11, vendor: Azul Systems, Inc., runtime: /home/josiah/.sdkman/candidates/java/11.0.11-zulu
       Default locale: en_US, platform encoding: UTF-8
       OS name: "linux", version: "4.19.0-18-amd64", arch: "amd64", family: "unix"
      ```
      
4. Install Gradle by running `sdk list gradle`.  Zephyr currently uses builds compatible
   with Gradle version 7+. 
   1. Run `sdk install gradle \<version>` where `\<version>` is a 7.x.x listed in the output.
   2. Verify your gradle installation by running `gradle --version`.  You should see output
      like 
      ```
      ------------------------------------------------------------
      Gradle 7.0.2
      ------------------------------------------------------------

      Build time:   2021-05-14 12:02:31 UTC
      Revision:     1ef1b260d39daacbf9357f9d8594a8a743e2152e

      Kotlin:       1.4.31
      Groovy:       3.0.7
      Ant:          Apache Ant(TM) version 1.10.9 compiled on September 27 2020
      JVM:          11.0.11 (Azul Systems, Inc. 11.0.11+9-LTS)
      OS:           Linux 4.19.0-18-amd64 amd64
      ```
      
### Install Git

Install Git as described below

   
## Manual Installation

Follow this process if you know what you're doing or would like greater control over
your developer configuration.
### Install Java

1. Navigate to [Adoptium](https://adoptium.net/)
2. Select your Java JDK version.  Zephyr is currently tested against Java 11
3. Select your platform
4. Follow the installation instructions.  Ensure that `Java` is on your `PATH` environment variable
   by executing `java --version` in your console.  You should see something like:
   ```
    ➜  zephyr git:(dependencies/dependency-order) ✗ java -version
    openjdk version "11.0.11" 2021-04-20 LTS
    OpenJDK Runtime Environment Zulu11.48+21-CA (build 11.0.11+9-LTS)
    OpenJDK 64-Bit Server VM Zulu11.48+21-CA (build 11.0.11+9-LTS, mixed mode)
   ``` 


### Install Git

1. Navigate to the [Git Site](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Download the appropriate installation package for your operating system 
3. Ensure Git is available on your `PATH` by executing `git --version`.  You should see something like
   ```
    ➜  zephyr git:(dependencies/dependency-order) ✗ git --version
    git version 2.20.1
   ```

### Install Maven 
1. Navigate to [Maven](https://maven.apache.org/install.html)
2. Download the appropriate package
3. Unzip the package to your desired directory. Your `MAVEN_HOME` will be a directory containing the subdirectory `bin` 
   We recommend something like `$HOME/dev/tools/maven`.
4. Ensure `$MAVEN_HOME` is on your path.  Validate your installation by executing `mvn -v`.  You should
   see something like:
   ```
   ➜  zephyr git:(dependencies/dependency-order) ✗ mvn -v
    Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
    Maven home: /home/josiah/.sdkman/candidates/maven/current
    Java version: 11.0.11, vendor: Azul Systems, Inc., runtime: /home/josiah/.sdkman/candidates/java/11.0.11-zulu
    Default locale: en_US, platform encoding: UTF-8
    OS name: "linux", version: "4.19.0-18-amd64", arch: "amd64", family: "unix"
   ```
   

