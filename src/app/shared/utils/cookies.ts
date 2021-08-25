export function setCookieParams(
  name: string,
  value: string,
  expiresIn: number
) {
  return (document.cookie = `${name}=${value}; max-age=${expiresIn}`);
}
export function deleteCookieToken() {
  return (document.cookie = `token=token; max-age=-1`);
}

export function deleteCookieRole() {
  return (document.cookie = `role=role; max-age=-1`);
}
