This is an NFT Marketplace for Fried Orks (FORT).
Backend: Etherium-based (Polygon) smartcontract with Solidity in HardHat.
Server app: with Next.js
Rendrering/Styling: with TailWind

compile solidity files: npx hardhat compile --show-stack-traces
running tests: npx hardhat test
running app: npm run [dev]

deploy locally:
1) run local HardHat node: npx hardhat node
2) deploy contracts: npx hardhat run scripts/deploy.js --network localhost
3) copy addresses obrained to config.js
If all OK - on
4) npm run dev - no errors on home page, nfts (empty list) fetched OK