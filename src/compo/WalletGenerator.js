import React from 'react';
import { ethers } from 'ethers';

const WalletGenerator = () => {
  const generateWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    const privateKey = wallet.privateKey;
    const address = wallet.address;

    console.log('Generated wallet address:', address);
    console.log('Generated private key:', privateKey);
  };

  return (
    <div>
      <button onClick={generateWallet}>Generate Wallet</button>
    </div>
  );
};  

export default WalletGenerator;
