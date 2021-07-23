export function setCookieParams(name: string, value: string, expiresIn: string) {
  return document.cookie = `${name}=${value}; max-age=${expiresIn}`;
}
export function deleteCookieParams() {
  return document.cookie = `test=test; max-age=-1`;
}