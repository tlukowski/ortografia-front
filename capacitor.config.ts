import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ortografia.pl',
  appName: 'ortografia',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
