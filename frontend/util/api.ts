export default async function api<T>(endpoint: string, init?: RequestInit) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT + endpoint,
      init
    );
    if (response?.ok) {
      return response.json() as T;
    } else {
      alert("Error occurred!");
    }
  } catch (e) {
    console.log(e);
    return;
  }
}
