import { css } from 'lit'

export default css`
  .w3m-ledger-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    flex-direction: column;
  }

  .w3m-connecting-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  w3m-spinner {
    margin-right: 10px;
  }

  w3m-wallet-image {
    border-radius: 22px;
    width: 25%;
    height: 25%;
    margin-bottom: 20px;
  }
`
