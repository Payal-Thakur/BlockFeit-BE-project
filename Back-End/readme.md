## Installation Guide for Back-end

##### Make sure you have installed following things

    1. Node js (Latest version)
    2. Ganache (Latest version)

<b>Run all commands in Backend folder</b>

- Open cmd in Backend directory and install below dependency

```js
    npm install -g truffle@5.0.2
```

-- <span><i>Note : Make sure version is same i.e. `5.0.2`</i></span>

- After installing truffle run following command on cmd

```git
truffle version
```

it will show outpot like this:

```js
Truffle v5.0.2 (core: 5.0.2)
Solidity v0.5.0 (solc-js)
Node v16.13.1
```

<span><i>if not try to resolve error</i></span>

- To install dev/project packages run below command on cmd

```npm
npm install
```

- open ganache in your machine and look for `RPC SERVER` on navbar

```js
it will be like this:
RPC SERVER
HTTP://127.0.0.1:7545

then your host and port will be
host: 127.0.0.1
port: 7545

if it is different in your case then check your ganache server host and port
and upadate host and port field in truffle-config.js file(present in backend directory)

//see where to update
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // enter your host id
      port: 7545, // enter your port no.
      network_id: "*",
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

note- keep ganache open
```

- After Truffle and packages installation, now To compile Smart Contract run below command on cmd

```
truffle compile
```

- To see Contract's detail run below command

```
truffle migrate
```

---

## Import MySQL DB

- In project directory
