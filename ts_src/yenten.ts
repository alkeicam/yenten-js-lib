import {Network} from './networks'

export const yenten: Network = {
    messagePrefix: '\x18Yenten Signed Message:\n',
    bech32: 'ytn',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x4e,
    scriptHash: 0x0a,
    wif: 0x7b,
  };