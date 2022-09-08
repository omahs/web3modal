import { ClientCtrl, ModalCtrl } from '@web3modal/core'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../../components/w3m-button'
import '../../components/w3m-modal-content'
import '../../components/w3m-modal-header'
import '../../components/w3m-qrcode'
import '../../components/w3m-spinner'
import '../../components/w3m-text'
import '../../components/w3m-wallet-image'
import { RETRY_ICON } from '../../utils/Svgs'
import { color, global } from '../../utils/Theme'
import styles from './styles'

@customElement('w3m-ledger-desktop-connector-view')
export class W3mLedgerDesktopConnectorView extends LitElement {
  public static styles = [global, styles]

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super()
    this.onConnect()
  }

  // -- private ------------------------------------------------------ //

  private async onConnect() {
    await ClientCtrl.ethereum().connectLedgerDesktop(uri => window.open(uri, '_self'))
    ModalCtrl.closeModal()
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    const name = 'Ledger'

    return html`
      <w3m-modal-header title=${name}></w3m-modal-header>
      <w3m-modal-content>
        <div class="w3m-ledger-wrapper">
          <w3m-wallet-image name=${name} size="lg"></w3m-wallet-image>
          <div class="w3m-connecting-title">
            <w3m-spinner size="22" color=${color().foreground[2]}></w3m-spinner>
            <w3m-text variant="large-bold" color="secondary">
              ${`Continue in ${name}...`}
            </w3m-text>
          </div>
          <w3m-button .onClick=${this.onConnect.bind(this)} .iconRight=${RETRY_ICON}>
            Retry
          </w3m-button>
        </div>
      </w3m-modal-content>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-ledger-desktop-connector-view': W3mLedgerDesktopConnectorView
  }
}
