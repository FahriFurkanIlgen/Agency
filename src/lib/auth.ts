import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "zemin_admin";

function adminPassword(): string {
  return process.env.ADMIN_PASSWORD || "zemin-admin";
}

/** Deterministic, non-reversible session token derived from the password. */
export function sessionToken(): string {
  return crypto
    .createHash("sha256")
    .update(`zemin::${adminPassword()}`)
    .digest("hex");
}

export function checkPassword(input: string): boolean {
  const expected = adminPassword();
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value === sessionToken();
}
