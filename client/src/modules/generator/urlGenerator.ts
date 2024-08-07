import urlJoin from "url-join";

export default (baseURL: string, ...paths: string[]) =>
  urlJoin(baseURL, ...paths);
