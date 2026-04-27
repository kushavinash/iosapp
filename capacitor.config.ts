import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.webecart',
  appName: 'webecart',
  webDir: 'dist/ios',
  server: {
    url: 'https://www.webecart.com', 
    allowNavigation: [
      'www.webecart.com',
      'webecart.com'
    ],
    cleartext: true
  }
};

export default config;