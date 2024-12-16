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
      image: "/Trust Wallet.jpeg",
    },
    {
      name: "MetaMask",
      image: "/MetaMask.png",
    },
    {
      name: "Coinbase Wallet",
      image: "/Coinbase Wallet.png",
    },
    {
      name: "Binance Chain Wallet",
      image: "/Binance Chain Wallet.png",
    },
    {
      name: "Bybit",
      image: "/Bybit.png",
    },
    {
      name: "Exodus",
      image: "/Exodus.png",
    },
    {
      name: "OKX",
      image: "/OKX.png",
    },
    {
      name: "Ledger Live",
      image: "/Ledger.png",
    },
    {
      name: "Trezor Suite",
      image: "/Trezor.png",
    },
    {
      name: "Wallet Connect",
      image: "/Wallet Connect.png",
    },
    {
      name: "Coinomi",
      image: "/Coinomi.png",
    },
    {
      name: "Atomic Wallet",
      image: "/Atomic Wallet.jpg",
    },
    {
      name: "Bitget Wallet",
      image: "/Bitget.jpeg",
    },
    {
      name: "Tonkeeper",
      image: "/Tonkeeper.png",
    },
    {
      name: "BNB",
      image: "/BNB.png",
    },
    {
      name: "Bitcoin.com",
      image: "/Bitcoin.jpeg",
    },
    {
      name: "Paxful",
      image: "/Paxful.png",
    },
    {
      name: "Token Pocket",
      image: "/Token Pocket.jpeg",
    },
    {
      name: "Formatic",
      image: "/Formatic.png",
    },
    {
      name: "Guarda Wallet",
      image: "/Guarda.png",
    },
    {
      name: "Blockchain.com",
      image: "/Blockchain.png",
    },
    {
      name: "Portis",
      image: "/Portis.jpeg",
    },
    {
      name: "Squalink",
      image: "/Squalink.png",
    },
    {
      name: "Torus",
      image: "/Torus.png",
    },
    {
      name: "Authereum",
      image: "/Authereum.png",
    },
    {
      name: "Vechain",
      image: "/vechain.png",
    },
    {
      name: "Sacatter",
      image: "/Scatter.png",
    },
    {
      name: "Gemini",
      image: "/Gemini.png",
    },

    {
      name: "Stellar",
      image: "/Stellar.png",
    },
    {
      name: "Polkadot",
      image: "/Polkadot.png",
    },
    {
      name: "Filecoin",
      image: "/Filecoin.avif",
    },
    {
      name: "Zengo",
      image: "/Zengo.jpeg",
    },
    {
      name: "Tezos",
      image: "/Tezos.png",
    },
    {
      name: "Theta",
      image: "/Theta.jpeg",
    },
    {
      name: "Tron",
      image: "/Tron.png",
    },
    {
      name: "SafePal",
      image: "/Safepal.png",
    },
    {
      name: "Cosmos",
      image: "/Cosmos.png",
    },
    {
      name: "Kava",
      image: "/Kava.png",
    },
    {
      name: "Solana",
      image: "/Solana.png",
    },
    {
      name: "Ziliqa",
      image: "/Zilliqa.png",
    },
    {
      name: "Elrond",
      image: "/Elrond.png",
    },
    {
      name: "Waves",
      image: "/Waves.png",
    },
    {
      name: "Icon",
      image: "/Icon.png",
    },
    {
      name: "Others",
      image: "/Others.webp",
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
