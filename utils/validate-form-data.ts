export function validateName(name: string): string {
  if (name.length <= 3) {
    return "Name must be at least 3 characters long";
  } else if (name.length > 20) {
    return "Name must be less than 20 characters long";
  }
  return "";
}
export function validateEmail(email: string): string {
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email)) {
    return "Invalid email address";
  }
  return "";
}

export function validateMessage(message: string): string {
  if (message.length <= 3) {
    return "Message must be at least 3 characters long";
  } else if (message.length > 200) {
    return "Message must be less than 200 characters long";
  }
  return "";
}
