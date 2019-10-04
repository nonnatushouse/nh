let subPromise = null;

export function fetchSubs() {
  if (!subPromise) {
    subPromise = actualFetching();
  }
  return subPromise;
}

async function actualFetching() {
  const response = await fetch(process.env.PUBLIC_URL + "subs.json");
  const subs = await response.json();
  return subs;
}
