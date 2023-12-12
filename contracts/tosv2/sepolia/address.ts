import { CONTRACT_EXPORT } from "../..";

/**
 * @see: https://www.notion.so/Tokamak-Contracts-on-Sepolia-c80a0075e39043c5a57c086a95f57ccd
 */
const addresses: CONTRACT_EXPORT = {
  sepolia: {
    BondDepository: "0xbBe7881cC14a509FD8F53Ce650fE065C385d98D7",
    BondDepositoryProxy: "0x4d08d2113b75Bfd8B6C5D3Dd956165e1853dC6A4",
    LibStaking: "0x41128bA2b9549eAf8A0D4f6b2C0b514c5b491F39",
    StakingV2: "0x40694B3e38E93cdec517d2e854f6f05402A304CC",
    StakingV2Proxy: "0x80d1c91393C4B516f70Bc95d94b1D85667964531",
    LibTreasury: "0x0ad659558851f6ba8a8094614303F56d42f8f39A",
    Treasury: "0x09207BdB146E41dadad015aB3d835f66498b0A0c",
    TreasuryProxy: "0xFD7C2c54a0A755a46793A91449806A4b14E3eEe8",
    TOSValueCalculator: "0xDF0fCfadAF9F095C509F620A6C2BAFd7B6AD8C22",
  },
};

export default { addresses };
