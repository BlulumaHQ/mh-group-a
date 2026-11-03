// ─────────────────────────────────────────────────────────────
// HOMES WE MANAGE — single source of truth for the 14 managed
// property addresses. Used by the Home page section and the
// Services → Property Management subsection, in both English
// and Traditional Chinese. Addresses stay in English postal
// format on every locale. Address #14 keeps the exact
// client-supplied ZIP ("1001") — do not "correct" it.
// ─────────────────────────────────────────────────────────────
export const managedProperties = [
  "15 East 30th Street, New York, NY 10016",
  "555 West 22nd Street, New York, NY 10011",
  "53 West 53rd Street, New York, NY 10019",
  "100 Norfolk Street, New York, NY 10002",
  "24 East 22nd Street, New York, NY 10010",
  "312 West 23rd Street, New York, NY 10011",
  "330 East 49th Street, New York, NY 10017",
  "815 Broadway, New York, NY 10003",
  "3 Court Square, Long Island City, NY 11101",
  "225 East 46th Street, New York, NY 10017",
  "140 East 56th Street, New York, NY 10022",
  "525 6th Avenue, New York, NY 10011",
  "15 Broad Street, New York, NY 10005",
  "333 West 56th Street, New York, NY 1001",
] as const;
