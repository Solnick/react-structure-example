export type ErrorLogger = (error: unknown) => void;

export const errorLogger: ErrorLogger = (error: unknown): void => {
  if (error instanceof Error) {
    console.log('Error!!', error.message, 'danger');
    console.trace();
  }
};
