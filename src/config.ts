import { LogLevelDesc } from 'loglevel';

export interface IConfig {
  env: string;
  version: string;
  apiBaseUrl: string;
  loglevel: LogLevelDesc;
}

const config: IConfig = {
  env: process.env.NODE_ENV as string,
  version: process.env.VERSION as string,
  apiBaseUrl: process.env.VUE_APP_APIBASE_URL as string,
  loglevel: (process.env.VUE_APP_LOGLEVEL || 'info') as LogLevelDesc,
};
export default config;
