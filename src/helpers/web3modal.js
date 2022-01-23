import * as UAuthWeb3Modal from '@uauth/web3modal'
import UAuthSPA from '@uauth/js'
import Web3Modal from 'web3modal'

// These options are used to construct the UAuthSPA instance.
export const uauthOptions = {
  clientID: '73I0uzMDPBH3aVvBl64YFKS5iOj88cuHd3ibH+hC/RE=',
  clientSecret: 'N2aNc2ocYisT1S+8GiHuqXSdctkhlMzRW4a7HQsqo04=',
  redirectUri: 'http://localhost:3000/callback',

  // Must include both the openid and wallet scopes.
  scope: 'openid wallet email',
}

const providerOptions = {
  // Currently the package isn't inside the web3modal library currently. For now,
  // users must use this libary to create a custom web3modal provider.

  // All custom `web3modal` providers must be registered using the "custom-"
  // prefix.
  'custom-uauth': {
    // The UI Assets
    display: UAuthWeb3Modal.display,

    // The Connector
    connector: UAuthWeb3Modal.connector,

    // The SPA libary
    package: UAuthSPA,

    // The SPA libary options
    options: uauthOptions,
  },

  // Include any web3modal providers here too...
}

const web3modal = new Web3Modal({providerOptions})

// Register the web3modal so the connector has access to it.
UAuthWeb3Modal.registerWeb3Modal(web3modal)

export default web3modal