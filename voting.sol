pragma solidity ^0.4.23;

contract Voting
{
    //constructor to initialize candidiates
    //vote for candidiates
    //get count of votes

    bytes32[] candidateslist;
    mapping(bytes32 => uint8)public votesRecieved;
    constructor(bytes32[] candidateNames) public
    {
        candidateslist=candidateNames;
    }
    function voteForCandidate(bytes32 candidate)public
    {
        require(validCandidate(candidate));
        votesRecieved[candidate]++;
    }
    function totalVoteFor(bytes32 candidate) view public returns(uint8)
    {
        require(validCandidate(candidate));
        return votesRecieved[candidate];
    }

    function validCandidate(bytes32 candidate) view public returns(bool)
    {
        for(uint i=0;i<candidateslist.length;i++)
        {
            if(candidateslist[i]==candidate)
            {
                return true;
            }
        }
        return false;
    }
}
