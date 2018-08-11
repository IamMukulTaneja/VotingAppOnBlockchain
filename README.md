# VotingAppOnBlockchain
It is a simple voting app where a person can vote for any candidate mentioned and that is act as a transaction of blockchain and get added in distributed immutable ledger.It is based on ethereum blockchain.

<b>Steps for making this application</b>

1) <b>Installing a blockchain for developed environment</b>

First of all,all the libraries which we gonna use is of node.js so if you haven't installed node.js and npm into your computer.Please do it.

Secondaly,we are still at the developing stage so we cant deploy our code directly to the public blockchain without testing it.So for testing it we need a 'fake' blockchain and 'Ganache' is the blockchain which will help us doing our testing.

Also we will implement our smart contract using the programming language called Solidity,so we need the solidity compiler.
Also we need something to interact with ganache blockchain,so we need 'web3' library also.

here is the command line code i have written to get all of these.

> sudo apt-get update

> curl -sL https://deb.nodesource.com/setup_7.x -o nodesource_setup.sh

> sudo bash nodesource_setup.sh

> sudo apt-get install nodejs

> node --version

> v7.4.0

> npm --version

4.0.5

> mkdir -p ethereum_voting_dapp/chapter1

> cd ethereum_voting_dapp/chapter1

> npm install ganache-cli web3@0.20.1 solc

> node_modules/.bin/ganache-cli


In ganache ,you will get 10 accounts of ethreum with 100 ether in all of them.

2) <b> Making solidity smart contract</b>
  
  I made a simple smart contract using solidity which is not a big deal if you are an engineering student.You can use remix.ethereum.org to edit your smart contract,it is like the IDE for solidity.
  
3) <b> Compiling smart contract </b>
  
  Now , make a new file in your project directory with extension .sol(Solidity) and copy the code from remix.Now as we know we already have our solidity compiler, so we can easily complile our code through that.
  The commands which i have written in <b>Node Console<b> :-
  
  > code = fs.readFileSync('Voting.sol').toString()
  
  > solc = require('solc')
  
  > compiledCode = solc.compile(code)
  
  
  
4) <b> Deploying smart contract on blockchain </b>

Here are the commands for that :-

> Web3 = require('web3')

> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

> abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)

> VotingContract = web3.eth.contract(abiDefinition)

> byteCode = compiledCode.contracts[':Voting'].bytecode

> deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})

> deployedContract.address

'0x0396d2b97871144f75ba9a9c8ae12bf6c019f610' <- Your address will be different

5) <b> Web Interaction </b>

At last,make a web page to interact with the blockchain.You can refer to my index.html and index.js file.


<b> Screeshot of web page </b>


![voting](https://user-images.githubusercontent.com/20643833/43989809-b7a5e076-9d6e-11e8-99ac-9d3119bc5053.png)
