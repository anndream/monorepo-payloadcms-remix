import type { User } from "../collections/generated-types";

export interface AccessParameters {
  req: {
    user: User;
  };
}

export const isAdminUser = (user: User) => {
  if (!user) {
    return false;
  }
  return !!user?.roles?.includes("admin");
};
