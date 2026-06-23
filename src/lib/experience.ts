// Single source of truth for the dynamic "years of experience" figure.
// Used by both the Hero (page.tsx) and the About section so they never drift.

const START_TCS = new Date("2021-12-29");
const END_TCS = new Date("2024-06-10");
const START_CURRENT = new Date("2024-10-01");

export function getExperience() {
  const now = new Date();
  const tcsMonths =
    (END_TCS.getFullYear() - START_TCS.getFullYear()) * 12 +
    (END_TCS.getMonth() - START_TCS.getMonth());
  const currentMonths =
    (now.getFullYear() - START_CURRENT.getFullYear()) * 12 +
    (now.getMonth() - START_CURRENT.getMonth());
  const totalMonths = tcsMonths + currentMonths;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months };
}

export function getExperienceText() {
  const { years, months } = getExperience();
  return `${years}.${months} Years`;
}
