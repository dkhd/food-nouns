export enum ExternalURL {
  discord,
  twitter,
  notion,
  discourse,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return 'https://discord.gg/vvvFCtVyNm';
    case ExternalURL.twitter:
      return 'https://twitter.com/foodnouns';
    case ExternalURL.notion:
      return 'https://www.notion.so/Explore-the-of-FOODNOUNS-4d4cf868455940b6bcb0243b45de615e';
    case ExternalURL.discourse:
      return 'https://discourse.foodnouns.wtf/';
  }
};
