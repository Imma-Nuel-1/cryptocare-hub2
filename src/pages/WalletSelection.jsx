import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const WalletSelectionContainer = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
`;

const WalletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
  justify-items: center;
`;

const WalletCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 200px;

  &:hover {
    transform: scale(1.05);
  }
`;

const WalletImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const WalletName = styled.p`
  font-size: 1rem;
  color: #333;
`;

const WalletSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service } = location.state || {};

  const wallets = [
    {
      name: "Trust Wallet",
      image: "/Images/Trust Wallet.jpeg",
    },
    {
      name: "MetaMask",
      image: "/Images/MetaMask.png",
    },
    {
      name: "Coinbase Wallet",
      image: "/Images/Coinbase Wallet.png",
    },
    {
      name: "Binance Chain Wallet",
      image: "/Images/Binance Chain Wallet.png",
    },
    {
      name: "Bybit",
      image: "/Images/Bybit.png",
    },
    {
      name: "Exodus",
      image: "/Images/Exodus.png",
    },
    {
      name: "OKX",
      image: "/Images/OKX.png",
    },
    {
      name: "Ledger Live",
      image: "/Images/Ledger.png",
    },
    {
      name: "Trezor Suite",
      image: "/Images/Trezor.png",
    },
    {
      name: "Wallet Connect",
      image: "/Images/Wallet Connect.png",
    },
    {
      name: "Coinomi",
      image: "/Images/Coinomi.png",
    },
    {
      name: "Atomic Wallet",
      image: "/Images/Atomic Wallet.jpg",
    },
    {
      name: "Bitget Wallet",
      image: "/Images/Bitget.jpeg",
    },
    {
      name: "Tonkeeper",
      image: "/Images/Tonkeeper.png",
    },
    {
      name: "BNB",
      image: "/Images/BNB.png",
    },
    {
      name: "Bitcoin.com",
      image: "/Images/Bitcoin.jpeg",
    },
    {
      name: "Paxful",
      image: "/Images/Paxful.png",
    },
    {
      name: "Token Pocket",
      image: "/Images/Token Pocket.jpeg",
    },
    {
      name: "Formatic",
      image: "/Images/Formatic.png",
    },
    {
      name: "Guarda Wallet",
      image: "/Images/Guarda.png",
    },
    {
      name: "Blockchain.com",
      image: "/Images/Blockchain.png",
    },
    {
      name: "Portis",
      image: "/Images/Portis.jpeg",
    },
    {
      name: "Squalink",
      image: "/Images/Squalink.png",
    },
    {
      name: "Torus",
      image: "/Images/Torus.png",
    },
    {
      name: "Authereum",
      image: "/Images/Authereum.png",
    },
    {
      name: "Vechain",
      image: "/Images/vechain.png",
    },
    {
      name: "Sacatter",
      image: "/Images/Scatter.png",
    },
    {
      name: "Gemini",
      image: "/Images/Gemini.png",
    },

    {
      name: "Stellar",
      image: "/Images/Stellar.png",
    },
    {
      name: "Polkadot",
      image: "/Images/Polkadot.png",
    },
    {
      name: "Filecoin",
      image: "/Images/Filecoin.avif",
    },
    {
      name: "Zengo",
      image: "/Images/Zengo.jpeg",
    },
    {
      name: "Tezos",
      image: "/Images/Tezos.png",
    },
    {
      name: "Theta",
      image: "/Images/Theta.jpeg",
    },
    {
      name: "Tron",
      image: "/Images/Tron.png",
    },
    {
      name: "SafePal",
      image: "/Images/Safepal.png",
    },
    {
      name: "Cosmos",
      image: "/Images/Cosmos.png",
    },
    {
      name: "Kava",
      image: "/Images/Kava.png",
    },
    {
      name: "Solana",
      image: "/Images/Solana.png",
    },
    {
      name: "Ziliqa",
      image: "/Images/Zilliqa.png",
    },
    {
      name: "Elrond",
      image: "/Images/Elrond.png",
    },
    {
      name: "Waves",
      image: "/Images/Waves.png",
    },
    {
      name: "Icon",
      image: "/Images/Icon.png",
    },
    {
      name: "Others",
      image: "/Images/Others.webp",
    },
  ];

  const handleWalletClick = (wallet) => {
    navigate("/wallet-form", { state: { wallet: wallet.name, service } });
  };

  return (
    <WalletSelectionContainer>
      <h2>Select a Wallet for {service}</h2>
      <WalletGrid>
        {wallets.map((wallet) => (
          <WalletCard
            key={wallet.name}
            onClick={() => handleWalletClick(wallet)}
          >
            <WalletImage src={wallet.image} alt={`${wallet.name} logo`} />
            <WalletName>{wallet.name}</WalletName>
          </WalletCard>
        ))}
      </WalletGrid>
    </WalletSelectionContainer>
  );
};

export default WalletSelection;
