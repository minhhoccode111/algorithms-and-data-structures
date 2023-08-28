console.log('Hello, World!');

// simple recursive solution
{
  const sum = (money, index = 0) => (index === money.length ? 0 : money[index] + sum(money, index + 1));

  const maximumWealth = (accounts, index = 0, largest = 0) => {
    if (index === accounts.length) return largest;

    const currentWealth = sum(accounts[index]);

    return maximumWealth(accounts, index + 1, currentWealth > largest ? currentWealth : largest);
  };
}
