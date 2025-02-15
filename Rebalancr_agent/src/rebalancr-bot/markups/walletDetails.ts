import * as dotenv from 'dotenv';
dotenv.config();

export const wallerDetailsMarkup = async (address: any) => {
  const MODE_SCAN_URL =
    process.env.ENVIRONMENT === 'TESTNET'
      ? process.env.MODE_SCAN_URL_TESTNET
      : process.env.MODE_SCAN_URL;
  return {
    message: `<b>Your Wallet:</b>\n\n<b>Address:</b> <code>${address}</code>\n\n Tap to copy the address and send Eth, USDC or MODE The to deposit.`,
    keyboard: [
      [
        {
          text: '🔎 View on modescan',
          url: `${MODE_SCAN_URL}/address/${address}`,
        },
        {
          text: 'check Balance',
          callback_data: JSON.stringify({
            command: '/checkBalance',
            language: 'english',
          }),
        },
      ],
      [
        {
          text: 'Export wallet',
          callback_data: JSON.stringify({
            command: '/exportWallet',
            language: 'english',
          }),
        },
        {
          text: 'Reset wallet',
          callback_data: JSON.stringify({
            command: '/resetWallet',
            language: 'english',
          }),
        },
      ],
      [
        {
          text: 'Close ❌',
          callback_data: JSON.stringify({
            command: '/close',
            language: 'english',
          }),
        },
      ],
    ],
  };
};
