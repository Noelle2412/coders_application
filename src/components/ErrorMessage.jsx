export const ErrorMessage = ({ message }) =>
  message ? <p className="text-red-500 text-sm">{message}</p> : null;
