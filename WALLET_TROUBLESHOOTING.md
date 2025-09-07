# Aptos Wallet Connection Troubleshooting Guide

## Quick Fixes

### 1. Install Required Wallets
- **Petra Wallet**: [Download from Chrome Web Store](https://petra.app/)
- **Martian Wallet**: [Download from Chrome Web Store](https://martianwallet.xyz/)

### 2. Common Issues & Solutions

#### Issue: "No wallets available" message
**Solution:**
1. Install Petra or Martian wallet extension
2. Refresh the page after installation
3. Make sure the wallet extension is enabled

#### Issue: Wallet connection fails
**Solution:**
1. Unlock your wallet extension
2. Make sure you're on the Testnet network
3. Clear browser cache and cookies
4. Disable other wallet extensions temporarily

#### Issue: "Failed to connect" error
**Solution:**
1. Check if wallet is already connected to another dApp
2. Disconnect from other dApps first
3. Try connecting in incognito/private mode
4. Restart browser

### 3. Network Configuration
Make sure your wallet is set to **Aptos Testnet**:
- Petra: Settings → Network → Testnet
- Martian: Settings → Network → Testnet

### 4. Browser Compatibility
Supported browsers:
- ✅ Chrome (recommended)
- ✅ Edge
- ✅ Brave
- ❌ Firefox (limited support)
- ❌ Safari (not supported)

## Step-by-Step Connection Guide

### For Petra Wallet:
1. Install Petra extension from Chrome Web Store
2. Create or import wallet
3. Switch to Testnet network
4. Visit the dApp and click "Connect Wallet"
5. Select Petra from the list
6. Approve connection in wallet popup

### For Martian Wallet:
1. Install Martian extension from Chrome Web Store
2. Set up wallet account
3. Ensure you're on Testnet
4. Click "Connect Wallet" on the dApp
5. Choose Martian and approve connection

## Advanced Troubleshooting

### Check Console Errors
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for wallet-related errors
4. Common errors and fixes:

```
Error: Wallet not found
→ Install wallet extension

Error: User rejected request
→ Approve connection in wallet popup

Error: Network mismatch
→ Switch wallet to Testnet
```

### Reset Connection
If connection is stuck:
1. Disconnect wallet from dApp
2. Clear browser data for the site
3. Restart browser
4. Try connecting again

### Environment Variables
Ensure `.env.local` contains:
```
NEXT_PUBLIC_APTOS_NETWORK=testnet
NEXT_PUBLIC_APTOS_CONNECT_DAPP_ID=aptos-freelance-platform
```

## Getting Test Tokens

After connecting, you'll need test APT tokens:
1. Visit [Aptos Faucet](https://aptoslabs.com/testnet-faucet)
2. Enter your wallet address
3. Request test tokens
4. Wait for confirmation

## Still Having Issues?

### Check Wallet Status
- Green dot = Ready to connect
- No indicator = Not installed or disabled
- "Click to install" = Wallet not detected

### Contact Support
If problems persist:
1. Note your browser version
2. Note wallet extension version
3. Screenshot any error messages
4. Check browser console for errors

## Development Notes

The wallet connection uses:
- `@aptos-labs/wallet-adapter-react` v3.5.0+
- `@aptos-labs/ts-sdk` v1.26.0+
- Testnet network configuration
- Auto-connect disabled for better UX

Connection flow:
1. User clicks "Connect Wallet"
2. Modal shows available wallets
3. User selects wallet
4. Wallet popup requests approval
5. Connection established and stored
