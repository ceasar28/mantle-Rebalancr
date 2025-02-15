export const welcomeMessageMarkup = async (userName: string) => {
  console.log(userName);
  return {
    message: `Hi @${userName} 👋, Welcome to <b>Mantle Rebalancr</b> bot\n\nMantle's portfolio rebalancer Agent, here is what I can do: 👇\n- Portfolio Rebalancing\n- AI-Driven Market & sentiment Analysis\n- Automatic Swapping(automatically execute trades to rebalance your portfolio)`,

    keyboard: [
      [
        {
          text: 'Lets get started 🚀',
          callback_data: JSON.stringify({
            command: '/menu',
            language: 'english',
          }),
        },
      ],
    ],
  };
};
