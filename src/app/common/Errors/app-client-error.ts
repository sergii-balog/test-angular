export class AppClientError {
  constructor(message: string, originalError: Error) {
    localStorage.setItem("lastErrorMessage", message);
    console.log("Application error occured", originalError);
  }
  static get LastErrorMessage(): string {
    const message = localStorage.getItem("lastErrorMessage");
    if (message) {
      localStorage.removeItem("lastErrorMessage");
    }
    return message;
  }
}
