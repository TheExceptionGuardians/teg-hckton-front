# Installation Prerequisites

# Index
1. [NodeJS & NPM with admin privileges](#with-admin-privileges)
2. [NodeJS & NPM without admin privileges](#without-admin-privileges)
3. [Proxy Setup](#proxy-setup)

# Prerequisite Installation process

Optional steps: 
 * Install [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (this step is optional. Is used in e2e testing with Protractor)
 * Install [Python 2.7.X.msi](https://www.python.org/downloads/) (This step is optional. Some packages need to be compiled when the npm install is running. If python isn't installed it can cause some Error traces on our installation. In most cases, npm can continue with the installation)
 > If you are working on windows, download and install this .msi [Python 2.7.X.msi](https://www.python.org/downloads/). 
 If you are working on a Unix system, ensure you are super user and follow the next steps:
 ```
 wget http://www.python.org/ftp/python/2.7/Python-2.7.tgz
tar xzf Python-2.7.tgz
cd Python-2.7
./configure --with-pth --with-dec-threads --with-signal-module --prefix=/opt/python-2.7
make
sudo make install
 ```

## With Admin privileges

### NodeJS & NPM

Download NodeJS JavaScript runtime from the [NodeJS portal](https://nodejs.org/en/) and install with admin priviledges.

There are two versión avaliable versión LTS (Long Time Support) and Current versión with the latest features.   
Download LTS version.

If every works as expected, NodeJS & NPM should be operational.
To check its correct operation, could be tested with the following commands:
```
node -v
vx.x.x

npm -v
x.x.x
```

### Bower

Once NPM is operative, Bower can be downloaded and installed globally as follow: 
```
npm install -g bower
```

## Without Admin privileges

### NodeJS & NPM

The process to install and prep your PC for Node.js development when you don’t have administrator rights.

**Step 1: Get Node.exe**

First you will need to download the Windows Binary. You can get it from Node.js download page or [http://nodejs.org/dist/latest/](http://nodejs.org/dist/latest/). For x64, you will have to download from the appropriate folder. Move the executable to a local folder.

**Step 2: Get NPM**

NPM (Node Package Manager) is the package manager for Node.js and you will need this for your development. You can download NPM from [https://github.com/npm/npm/releases](https://github.com/npm/npm/releases) and extract the zip file to a local folder.

**Step 3: Configure the environment PATH variable.**

You need to set up the PATH variable so that you can call node from anywhere in the system.
```
set PATH=%PATH%;D:\path-to-your-node;D:\path-to-your-npm
```

# Proxy Setup

## Proxy enviroment  

Set
```
set PROXY="http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
set HTTP_PROXY=%PROXY%
set HTTPS_PROXY=%PROXY%
```
Unset
```
set HTTP_PROXY=
set HTTPS_PROXY=
```

## Git Proxy Configuration

Set
```
git config --global http.proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
git config --global https.proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
git config --global url."https://".insteadOf git://
git config --global http.sslVerify false
```
Unset
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## NPM Proxy Configuration

Set
```
npm config set proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
npm config set https-proxy "http://<domain>%5C<user>:<password>@<PROXY_IP>:<PROXY_PORT>"
npm config set registry=http://registry.npmjs.org/
npm config set strict-ssl false
```
Unset
```
npm config rm proxy
npm config rm https-proxy
```

## Bower Proxy Configuration

Edit .bowerrc file
```
{
  "directory": "bower_components", 
  "proxy": "http://<PROXY_IP>:<PROXY_PORT>",
  "https-proxy":"http://<PROXY_IP>:<PROXY_PORT>"
}
```

## Continue with the installation...
[Click here to back to installer guide](README.md#Getting-Starter)
