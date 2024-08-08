import { jwtDecode, JwtPayload } from "jwt-decode";

interface RoleJwtPayload extends JwtPayload {
  roleID?: number;
}

export function decodeToken(token: string): RoleJwtPayload {
  return jwtDecode<RoleJwtPayload>(token);
}
