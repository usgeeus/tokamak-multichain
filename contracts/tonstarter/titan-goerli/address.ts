import { CONTRACT_EXPORT } from "../..";

/**
 * @see: https://www.notion.so/onther/L2-Launchpad-contract-addresses-2cebd910a6c143bfb5549c522823143e
 */
const addresses: CONTRACT_EXPORT = {
  "titan-goerli": {
    L2TokenFactory: "0x42773CF37d7E2757a41d14ca130cD1aC8ac5064A",
    L2ProjectManager: "0xf30eB9f0D6B152f09DEcbED5e46D3f25314ecb7e",
    L2ProjectManagerProxy: "0x7A4710394a7f96028a517A9846b5aC3ECE6ebC62",
    L2InitialLiquidityVault: "0xB8Bc738947DB3Fc42f24Be7bC6eaf2Ad85a38602",
    L2InitialLiquidityVaultProxy: "0xCaa2F1Dd477703B5531f26e3CD455340dF0B9aaf",
    L2LpRewardVault: "0xb161113b042e560dC01AAd5001aA95C32eE6A046",
    L2LpRewardVaultProxy: "0x1F9Da608a82742b5a895A62522c7b7f333ECB06c",
    L2ScheduleVault: "0x270758e04385c5C92cE1dDF5F466280ebd686212",
    L2ScheduleVaultProxy: "0x643512d2205E15a723ee2fe9B2871a75699Db37d",
    L2NonScheduleVault: "0x191864367707CaE5bA218D6779d4883Eed078Dd2",
    L2CustomVaultBaseProxy: "0x0779606501F1A61557A1A201DB82EBCB5B326859",

    /// for Stos
    L1StosInL2: "0x5c8ee41536721D2e31352259D3A84419B09d716F",
    L1StosInL2Proxy: "0xa12431D37095CA8e3C04Eb1a4e7cE235718F10bF",
    LockIdNftForRegister: "0x48f60aAf60D5E162b2DebFD4F70c88fE01b7c331",
    LockIdNftForRegisterProxy: "0x4b3fB26396C6740341cB36E2D3325b116342138",
    L2UniversalStos: "0xF9d75D5814e1C3D734342bD5Ed0637b9c49c3f69",
    L2UniversalStosProxy: "0x58B4C2FEf19f5CDdd944AadD8DC99cCC71bfeFDc",

    // for airdrop tos
    L2DividendPoolForStos: "0x310AeC1C6Ab68DD1DB4bf9B885835BD73BdEb958",
    L2DividendPoolForStosProxy: "0x26C3C2620c511444b5C9c213d2Da9e5fAc451Edf",
    L2AirdropStosVault: "0xfd0c0AA6505125eFab34A2195F1b9C99AFE8fB06",
    L2AirdropStosVaultProxy: "0xC74b529Ad06E70fA51CDDAD11857D53E6354523d",

    // for airdrop ton
    L2AirdropTonVault: "0x8Ee62Ba51D361F860c0A65C01b9d50dc031d7f5d",
    L2AirdropTonVaultProxy: "0x58d9c33a7650BA96Da46Fc223Bd4d6c389f907Cb",
  },
};

export default { addresses };