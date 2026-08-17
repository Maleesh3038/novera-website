"use client";

// NOTE: This is a MOCK client-side auth helper for demo purposes only.
// It stores a flag + a fake profile in localStorage and a matching cookie
// so the portal layout can gate access. There is no real backend, password
// hashing, session validation, or security here. Replace this entirely with
// real authentication (NextAuth, a backend session, etc.) before launch.

const STORAGE_KEY = "novera_portal_auth";

export type MockUser = {
  name: string;
  email: string;
};

export function mockLogin(user: MockUser) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  document.cookie = `${STORAGE_KEY}=1; path=/; max-age=${60 * 60 * 24 * 7}`;
}

export function mockLogout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  document.cookie = `${STORAGE_KEY}=; path=/; max-age=0`;
}

export function getMockUser(): MockUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MockUser;
  } catch {
    return null;
  }
}
