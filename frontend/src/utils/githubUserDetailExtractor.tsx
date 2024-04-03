export function extractUserDetails(userData: string) {
  // Regular expression pattern to match the required fields
  const loginRegex = /login=([^,\n]+)/;
  const nameRegex = /name=([^,\n]+)/;

  // Extracting values using regular expressions
  const loginMatch = userData.match(loginRegex);
  const nameMatch = userData.match(nameRegex);

  // Extracted values
  const username = loginMatch ? loginMatch[1] : null;
  const name = nameMatch ? nameMatch[1] : null;

  return { username, name };
}
