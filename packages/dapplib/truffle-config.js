require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict industry flame street name rate nominee concert hope kangaroo army gasp'; 
let testAccounts = [
"0x22ae5b321927547698efd96f89536eb0b20c7878d71668fa257e903db973c7ce",
"0x2511c5d425b2c681b5f0d83782650bf0c6c087da9a69836938d5f1362ccf16b8",
"0x8bd5da51de0f298b94347d49feb77196c57d6e43d65400ff8d34f07362fa58e9",
"0xe81a5211494a443494ff35ebd065393f9093caa8f920948595673c1fb7fbe6dc",
"0x4ced3b6aeb7105c3e74c2808733baf69e5ddee4217ee8ff59ed4435f705c5368",
"0xbd059299a5656bfc5617bb624125122424ff3160c798bf00dca2f5e2723a2054",
"0xcab55d69af84e9bada269b82514d2ee6acfc2afcace7466c62cc4f8d3d14117c",
"0x45e1ba7385630f8038306aaba91a575afb1abe9f9c5bd3f33ca6037e4663532c",
"0x31ce2451f09fdb0bf568b7fc33ac93c65df81dbd49e1f7a4378b72f81e4ac28e",
"0x73a4cd0e30990f589f25b067beeed1ed7586572a98eb45fd122a5a8b57a5f168"
]; 
let devUri = 'http://test.confluxrpc.org';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

