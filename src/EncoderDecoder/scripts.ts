import { getTimerLink } from './numberLookup';

export const splitHeadingAndInfo = (
  input: string
): { heading: string; info: string } => {
  const lastDashIndex = input.lastIndexOf('-');

  if (lastDashIndex === -1) {
    if (input == '/' || input == '/settings/') {
      const current = new Date().getTime();
      const info = getTimerLink(current, 0);

      return { heading: '', info: info };
    }
    return { heading: '', info: input }; // No '-' found, assume entire string is the info
  }

  return {
    heading: input.substring(0, lastDashIndex),
    info: input.substring(lastDashIndex + 1),
  };
};
