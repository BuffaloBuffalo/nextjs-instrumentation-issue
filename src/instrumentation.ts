// https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
export async function register() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { doInitialization } = await import('./async_init');
    console.log('Initializing');
    await doInitialization();
    console.log('Finished Initialization');
  }
}
