web3 =new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi=JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVoteFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesRecieved","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
votingContract=web3.eth.contract(abi);

contractInstance=votingContract.at('0x82a79d6e3303fd9bf5b014fff35c6780514cd080');


var candidates={"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"};

function voteForCandidate(candidate)
{
candidateName=$("#candidate").val();

contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0], gas: 4700000}, function() {
let div_id=candidates[candidateName];
$("#" +div_id).html(contractInstance.totalVoteFor.call(candidateName).toString());
});
}
$(document).ready(function() {							
   const candidateNames=Object.keys(candidates);

   for(var i=0;i<candidateNames.length;i++)
 	{
	   let name=candidateNames[i];
	   let val=contractInstance.totalVoteFor.call(name).toNumber();
	   $("#" + candidates[name]).html(val);
	}
});
