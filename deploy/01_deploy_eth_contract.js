module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const namedAccounts = await getNamedAccounts();
    const {deployer} = namedAccounts;
    console.log(deployer);
    const deployResult = await deploy('ETH', {
      from: deployer,
      log: true
    });
    if (deployResult.newlyDeployed) {
      log(
        `contract ETH deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas`
      );
    }
  };
  module.exports.tags = ['ETH'];