export default function FinancesSponsors() {
  // Simple client-side redirect that doesn't depend on router types.
  if (typeof window !== "undefined") {
    // replace so user doesn't keep /finances-sponsors in history
    window.location.replace("/partners");
  }
  return null;
}
