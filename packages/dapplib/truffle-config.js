require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind evil journey kitchen orange tag'; 
let testAccounts = [
"0x43fff84a4bb9e4ab320a18bfe0365c5042bbc13a002788e3538245084d9afb67",
"0x64f65c9efdb57a18ce0cc76f7d7171cd16f4cbab98d0bd7efcd8c4a9e083f2c5",
"0x89783d079cdafa1abd880e337a609c31b8ea3c3959762950067002527550361f",
"0xdf9929cea4ebe2eba41ed56aa4698635b1475fc373047a8d60373b27d04c1e5b",
"0xd0f40f32fdb0e2c289b81d561fb97f6cbaecd922f3fb7e121e27536af30a55f3",
"0x4a914d4e7c9e621f37b99121e8771047c4b162ac319f4829a6a83a67962f7acf",
"0x80122c34460275abc929232c28ff54410fa6dfbbce2237deb7c256030732e1e8",
"0x62f59048f16540f437cecd8e8be5e2a0ac398de9b3655f1c20d43f19ecc45aa5",
"0x9350b16d4a54b21af0be75a0c165ced35bd675d9cca02485819754cc9c250fd9",
"0xb4d00f210f1eaff5c279d375bec50d19239ff40ac40c0c7d1d55fb22e0536bce"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


