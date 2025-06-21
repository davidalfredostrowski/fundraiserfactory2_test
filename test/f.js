const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture }  = require("@nomicfoundation/hardhat-network-helpers")

describe("FundraiserFactory", function () {
  let FundraiserFactory, fundraiserFactory;
  let Fundraiser;
  let owner, beneficiary;

//  beforeEach(async () => {
 async function runEveryTime() {  
    [owner, beneficiary] = await ethers.getSigners();
    // Deploy FundraiserFactory
    const FundraiserFactoryFactory = await ethers.getContractFactory("FundraiserFactory");
    fundraiserFactory = await FundraiserFactoryFactory.deploy();
    //await fundraiserFactory.deployed();
    await fundraiserFactory.waitForDeployment();
    // Get Fundraiser contract ABI
    //Fundraiser = await ethers.getContractFactory("Fundraiser");

 return { fundraiserFactory }

 };

  it("should start with zero fundraisers", async () => {
      const fundraiserf  = await ethers.deployContract("FundraiserFactory");
      
        const { fundraiserFactory }  = await loadFixture(runEveryTime);
        expect(fundraiserFactory , "contract has been deployed");




	  expect(await fundraiserFactory.fundraisersCount()).to.equal(0);
  });




});
