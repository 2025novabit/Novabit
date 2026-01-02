// wallets.js
// آدرس‌ها و شبکه‌ها برای 100 ارز برتر (آدرس‌ها فعلاً # هستند)
const WALLET_ADDRESSES = {
  "BTC": {
    name: "Bitcoin",
    networks: [
      { network: "BTC", address: "#" }
    ]
  },
  "ETH": {
    name: "Ethereum",
    networks: [
      { network: "ERC20", address: "#" }
    ]
  },
  "USDT": {
    name: "Tether",
    networks: [
      { network: "ERC20", address: "#" },
      { network: "TRC20", address: "#" },
      { network: "BEP20", address: "#" }
    ]
  },
  "BNB": {
    name: "Binance Coin",
    networks: [
      { network: "BEP2", address: "#" },
      { network: "BEP20", address: "#" }
    ]
  },
  "ADA": {
    name: "Cardano",
    networks: [
      { network: "ADA", address: "#" }
    ]
  },
  "XRP": {
    name: "Ripple",
    networks: [
      { network: "XRP", address: "#" }
    ]
  },
  "SOL": {
    name: "Solana",
    networks: [
      { network: "SOL", address: "#" }
    ]
  },
  "DOT": {
    name: "Polkadot",
    networks: [
      { network: "DOT", address: "#" }
    ]
  },
  "DOGE": {
    name: "Dogecoin",
    networks: [
      { network: "DOGE", address: "#" }
    ]
  },
  "LTC": {
    name: "Litecoin",
    networks: [
      { network: "LTC", address: "#" }
    ]
  },
  "BCH": {
    name: "Bitcoin Cash",
    networks: [
      { network: "BCH", address: "#" }
    ]
  },
  "LINK": {
    name: "Chainlink",
    networks: [
      { network: "ERC20", address: "#" }
    ]
  },
  "MATIC": {
    name: "Polygon",
    networks: [
      { network: "MATIC", address: "#" }
    ]
  },
  "XLM": {
    name: "Stellar",
    networks: [
      { network: "XLM", address: "#" }
    ]
  },
  "ATOM": {
    name: "Cosmos",
    networks: [
      { network: "ATOM", address: "#" }
    ]
  },
  "VET": {
    name: "VeChain",
    networks: [
      { network: "VET", address: "#" }
    ]
  },
  "TRX": {
    name: "TRON",
    networks: [
      { network: "TRX", address: "#" }
    ]
  },
  "EOS": {
    name: "EOS",
    networks: [
      { network: "EOS", address: "#" }
    ]
  },
  "FIL": {
    name: "Filecoin",
    networks: [
      { network: "FIL", address: "#" }
    ]
  },
  "XTZ": {
    name: "Tezos",
    networks: [
      { network: "XTZ", address: "#" }
    ]
  },
  "THETA": {
    name: "Theta",
    networks: [
      { network: "THETA", address: "#" }
    ]
  },
  "MIOTA": {
    name: "IOTA",
    networks: [
      { network: "MIOTA", address: "#" }
    ]
  },
  "NEO": {
    name: "NEO",
    networks: [
      { network: "NEO", address: "#" }
    ]
  },
  "KSM": {
    name: "Kusama",
    networks: [
      { network: "KSM", address: "#" }
    ]
  },
  "ALGO": {
    name: "Algorand",
    networks: [
      { network: "ALGO", address: "#" }
    ]
  },
  "DASH": {
    name: "Dash",
    networks: [
      { network: "DASH", address: "#" }
    ]
  },
  "ZEC": {
    name: "Zcash",
    networks: [
      { network: "ZEC", address: "#" }
    ]
  },
  "BNX": {
    name: "Binance USD",
    networks: [
      { network: "BEP20", address: "#" },
      { network: "ERC20", address: "#" }
    ]
  },
  "OKB": {
    name: "OKB",
    networks: [
      { network: "ERC20", address: "#" }
    ]
  },
  "FTT": {
    name: "FTX Token",
    networks: [
      { network: "ERC20", address: "#" }
    ]
  },
  "AAVE": {
    name: "Aave",
    networks: [
      { network: "ERC20", address: "#" }
    ]
  },
  "CAKE": {
    name: "PancakeSwap",
    networks: [
      { network: "BEP20", address: "#" }
    ]
  },
  "UNI": {
    name: "Uniswap",
    networks: [
      { network: "ERC20", address: "#" }
    ]
  },
  "SUSHI": {
    name: "SushiSwap",
    networks: [
      { network: "ERC20", address: "#" }
    ]
  },
  "AVAX": {
    name: "Avalanche",
    networks: [
      { network: "C-Chain", address: "#" }
    ]
  },
  "ATOM": {
    name: "Cosmos",
    networks: [
      { network: "ATOM", address: "#" }
    ]
  },
  "EOS": {
    name: "EOS",
    networks: [
      { network: "EOS", address: "#" }
    ]
  },
  "FIL": { name: "Filecoin", networks:[{ network:"FIL", address:"#"}] },
  "XTZ": { name: "Tezos", networks:[{ network:"XTZ", address:"#"}] },
  "THETA": { name: "Theta", networks:[{ network:"THETA", address:"#"}] },
  "MIOTA": { name: "IOTA", networks:[{ network:"MIOTA", address:"#"}] },
  "NEO": { name: "NEO", networks:[{ network:"NEO", address:"#"}] },
  "KSM": { name: "Kusama", networks:[{ network:"KSM", address:"#"}] },
  "ALGO": { name: "Algorand", networks:[{ network:"ALGO", address:"#"}] },
  "DASH": { name: "Dash", networks:[{ network:"DASH", address:"#"}] },
  "ZEC": { name: "Zcash", networks:[{ network:"ZEC", address:"#"}] },
  "BNX": { name: "Binance USD", networks:[{ network:"BEP20", address:"#"}, { network:"ERC20", address:"#"}] },
  "OKB": { name: "OKB", networks:[{ network:"ERC20", address:"#"}] },
  "FTT": { name: "FTX Token", networks:[{ network:"ERC20", address:"#"}] },
  "AAVE": { name: "Aave", networks:[{ network:"ERC20", address:"#"}] },
  "CAKE": { name: "PancakeSwap", networks:[{ network:"BEP20", address:"#"}] },
  "UNI": { name: "Uniswap", networks:[{ network:"ERC20", address:"#"}] },
  "SUSHI": { name: "SushiSwap", networks:[{ network:"ERC20", address:"#"}] },
  "AVAX": { name: "Avalanche", networks:[{ network:"C-Chain", address:"#"}] },
  "FTM": { name: "Fantom", networks:[{ network:"FTM", address:"#"}] },
  "NEAR": { name: "NEAR Protocol", networks:[{ network:"NEAR", address:"#"}] },
  "GRT": { name: "The Graph", networks:[{ network:"ERC20", address:"#"}] },
  "MKR": { name: "Maker", networks:[{ network:"ERC20", address:"#"}] },
  "COMP": { name: "Compound", networks:[{ network:"ERC20", address:"#"}] },
  "LUNA": { name: "Terra", networks:[{ network:"LUNA", address:"#"}] },
  "EGLD": { name: "Elrond", networks:[{ network:"EGLD", address:"#"}] },
  "DCR": { name: "Decred", networks:[{ network:"DCR", address:"#"}] },
  "ZIL": { name: "Zilliqa", networks:[{ network:"ZIL", address:"#"}] },
  "HNT": { name: "Helium", networks:[{ network:"HNT", address:"#"}] },
  "CHZ": { name: "Chiliz", networks:[{ network:"ERC20", address:"#"}] },
  "KNC": { name: "Kyber Network", networks:[{ network:"ERC20", address:"#"}] },
  "BAT": { name: "Basic Attention Token", networks:[{ network:"ERC20", address:"#"}] },
  "ENJ": { name: "Enjin Coin", networks:[{ network:"ERC20", address:"#"}] },
  "SNX": { name: "Synthetix", networks:[{ network:"ERC20", address:"#"}] },
  "DGB": { name: "DigiByte", networks:[{ network:"DGB", address:"#"}] },
  "RUNE": { name: "THORChain", networks:[{ network:"BEP20", address:"#"}, { network:"ERC20", address:"#"}] },
  "XEM": { name: "NEM", networks:[{ network:"XEM", address:"#"}] },
  "SC": { name: "Siacoin", networks:[{ network:"SC", address:"#"}] },
  "HOT": { name: "Holo", networks:[{ network:"ERC20", address:"#"}] },
  "RVN": { name: "Ravencoin", networks:[{ network:"RVN", address:"#"}] },
  "QTUM": { name: "Qtum", networks:[{ network:"QTUM", address:"#"}] },
  "ONT": { name: "Ontology", networks:[{ network:"ONT", address:"#"}] },
  "ICX": { name: "ICON", networks:[{ network:"ICX", address:"#"}] },
  "STX": { name: "Stacks", networks:[{ network:"STX", address:"#"}] },
  "ZRX": { name: "0x", networks:[{ network:"ERC20", address:"#"}] },
  "DENT": { name: "Dent", networks:[{ network:"ERC20", address:"#"}] },
  "MANA": { name: "Decentraland", networks:[{ network:"ERC20", address:"#"}] },
  "CRO": { name: "Cronos", networks:[{ network:"CRO", address:"#"}] },
  "1INCH": { name: "1inch", networks:[{ network:"ERC20", address:"#"}] },
  "GNO": { name: "Gnosis", networks:[{ network:"ERC20", address:"#"}] },
  "OMG": { name: "OMG Network", networks:[{ network:"ERC20", address:"#"}] },
  "LRC": { name: "Loopring", networks:[{ network:"ERC20", address:"#"}] },
  "REP": { name: "Augur", networks:[{ network:"ERC20", address:"#"}] },
  "KAVA": { name: "Kava", networks:[{ network:"KAVA", address:"#"}] },
  "XDC": { name: "XinFin", networks:[{ network:"XDC", address:"#"}] },
  "CEL": { name: "Celsius", networks:[{ network:"ERC20", address:"#"}] },
  "BAL": { name: "Balancer", networks:[{ network:"ERC20", address:"#"}] },
  "CRV": { name: "Curve DAO Token", networks:[{ network:"ERC20", address:"#"}] },
  "SXP": { name: "Swipe", networks:[{ network:"BEP20", address:"#"}, { network:"ERC20", address:"#"}] },
  "DIA": { name: "DIA", networks:[{ network:"ERC20", address:"#"}] },
  "OCEAN": { name: "Ocean Protocol", networks:[{ network:"ERC20", address:"#"}] },
  "ANT": { name: "Aragon", networks:[{ network:"ERC20", address:"#"}] },
  "REN": { name: "Ren", networks:[{ network:"ERC20", address:"#"}] },
  "SRM": { name: "Serum", networks:[{ network:"ERC20", address:"#"}] },
  "HEDG": { name: "Hedget", networks:[{ network:"ERC20", address:"#"}] },
  "SAND": { name: "The Sandbox", networks:[{ network:"ERC20", address:"#"}] },
  "AXS": { name: "Axie Infinity", networks:[{ network:"ERC20", address:"#"}] },
  "GALA": { name: "Gala", networks:[{ network:"ERC20", address:"#"}] },
  "FLOW": { name: "Flow", networks:[{ network:"FLOW", address:"#"}] },
  "CHSB": { name: "SwissBorg", networks:[{ network:"ERC20", address:"#"}] },
  "TWT": { name: "Trust Wallet Token", networks:[{ network:"BEP20", address:"#"}] },
  "KLAY": { name: "Klaytn", networks:[{ network:"KLAY", address:"#"}] },
  "STORJ": { name: "Storj", networks:[{ network:"ERC20", address:"#"}] },
  "AR": { name: "Arweave", networks:[{ network:"AR", address:"#"}] },
  "BAT": { name: "Basic Attention Token", networks:[{ network:"ERC20", address:"#"}] },
  "CVC": { name: "Civic", networks:[{ network:"ERC20", address:"#"}] },
  "NANO": { name: "Nano", networks:[{ network:"NANO", address:"#"}] },
  "RVN": { name: "Ravencoin", networks:[{ network:"RVN", address:"#"}] },
  "ICX": { name: "ICON", networks:[{ network:"ICX", address:"#"}] },
  "DGB": { name: "DigiByte", networks:[{ network:"DGB", address:"#"}] },
  "QTUM": { name: "Qtum", networks:[{ network:"QTUM", address:"#"}] },
  "ONT": { name: "Ontology", networks:[{ network:"ONT", address:"#"}] },
  "VTHO": { name: "VeThor Token", networks:[{ network:"VET", address:"#"}] }
};  
