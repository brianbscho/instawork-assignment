export default async function api<T>(endpoint: string, init?: RequestInit) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT + endpoint,
      init
    );
    if (response?.ok) {
      if (response.status === 204) {
        return;
      }
      return response.json() as T;
    } else {
      const error = await response.json();
      if ("error" in error) {
        alert(`Please fix following: ${error.error}`);
      } else {
        alert("Unknown error occurred");
      }
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}
