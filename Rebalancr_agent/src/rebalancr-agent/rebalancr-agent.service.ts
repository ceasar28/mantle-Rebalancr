import { Injectable } from '@nestjs/common';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { http } from 'viem';
import { createWalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mantle } from 'viem/chains';
import { getOnChainTools } from '@goat-sdk/adapter-vercel-ai';
import { moe } from '../../sdk/goat-sdk/plugins/moe/src';
import {
  USDC,
  USDT,
  erc20,
  MODE,
  WMNT,
  MNT,
  MOE,
} from '../.././sdk/goat-sdk/plugins/erc20/src';
import { sendETH } from '@goat-sdk/wallet-evm';
import { viem } from '@goat-sdk/wallet-viem';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class RebalancrAgentService {
  constructor() {}

  async swapToken(pK: any, prompt: string) {
    console.log(prompt);
    try {
      const privateKey = pK.startsWith('0x') ? pK : `0x${pK}`;
      const account = privateKeyToAccount(privateKey as `0x${string}`);
      const walletClient = createWalletClient({
        account,
        transport: http(process.env.RPC_URL),
        chain: mantle,
      });

      const tools = await getOnChainTools({
        wallet: viem(walletClient),
        plugins: [
          moe(),
          sendETH(),
          erc20({ tokens: [USDC, USDT, MODE, WMNT, MNT, MOE] }),
          // agni(),
        ],
      });

      const result = await generateText({
        model: openai('gpt-4o-mini'),
        tools: tools,
        maxSteps: 10,
        prompt: prompt,
        onStepFinish: (event) => {
          console.log(event.toolResults);
        },
      });
      console.log(result.text);
      return result.text;
    } catch (error) {
      console.log(error);
    }
  }

  async analyzeToken(contract: string) {
    try {
      // Prepare URLs for fetch calls
      const baseUrl = 'https://explorer.mode.network/api/v2';
      const geckoUrl = `https://api.geckoterminal.com/api/v2/networks/mode/tokens/${contract}`;
      const urls = [
        `${baseUrl}/addresses/${contract}`,
        `${baseUrl}/tokens/${contract}/holders`,
        `${baseUrl}/tokens/${contract}/counters`,
        `${geckoUrl}`,
      ];

      // Fetch all data concurrently
      const [tokenInfo, tokenHolders, tokenHoldersCount, geckoTokenInfo] =
        await Promise.all(
          urls.map((url) =>
            fetch(url, { method: 'GET' }).then((response) => response.json()),
          ),
        );

      // Respond with the collected data
      const tokenAnalyticData = {
        tokenName: tokenInfo.name,
        tokenSymbol: tokenInfo['token'].symbol,
        tokenBalance: tokenInfo.coin_balance,
        tokenCreationHash: tokenInfo.creation_tx_hash,
        tokenExchangeRate: tokenInfo.exchange_rate,
        tokenIsVerified: tokenInfo.is_verified,
        tokenCreator: tokenInfo.creator_address_hash,
        totalSupply: tokenInfo['token'].total_supply,
        totalHolders: tokenInfo['token'].holders,
        decimals: tokenInfo['token'].decimals,
        topTokenHolderValues: tokenHolders.items.map((item) => item.value),
        totalTransactions: tokenHoldersCount.transfers_count,
        formattedTotalSupply: tokenInfo['token'].total_supply,
        fdv: geckoTokenInfo.data.attributes.fdv_usd,
        volume: geckoTokenInfo.data.attributes.volume_usd.h24,
        image: geckoTokenInfo.data.attributesimage_url,
      };

      const prompt = `You are an AI agent specializing in Token sentiment analysis. Your task is to analyze a token based on the provided on-chain data and generate detailed  market sentiment analysis in this format:
      Name of token, symbol, price, Number of holders, FDV, and 24hr volume  Please present the response in a structured  markdown format,for a crypto trader.

Here is the token data:
- Token Name: ${tokenAnalyticData.tokenName}
- Symbol: ${tokenAnalyticData.tokenSymbol}
- Total Supply: ${tokenAnalyticData.totalSupply}
- Verified: ${tokenAnalyticData.tokenIsVerified}
- Holders: ${tokenAnalyticData.totalHolders}
- Exchange Rate: $${tokenAnalyticData.tokenExchangeRate}
- Top Holder Balances: ${tokenAnalyticData.topTokenHolderValues}
- Total Transactions: ${tokenAnalyticData.totalTransactions}
- Total Holders : ${tokenAnalyticData.totalHolders}
- FDV : ${tokenAnalyticData.fdv}
- Volume 24hrs : ${tokenAnalyticData.volume}

`;

      const result = await generateText({
        model: openai('gpt-4o-mini'),
        maxSteps: 10,
        prompt: prompt,
        onStepFinish: (event) => {
          console.log(event.toolResults);
        },
      });

      return { insight: result.text };
    } catch (error) {
      console.log(error);
    }
  }
}
