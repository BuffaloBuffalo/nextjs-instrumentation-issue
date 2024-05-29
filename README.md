## Instrumentation Not Working

```
npm install
npm run dev
```
Observe output indicating the instrumentation logic occurred:

```
 ✓ Starting...
 ✓ Compiled /instrumentation in 122ms (21 modules)
Initializing
intialized value to  { initialized: true }
Finished Initialization
 ✓ Ready in 2.5s
 ```

In a separate terminal 

```
curl http://localhost:3000/api/test
```

We'd expect a JSON response of 

```json
{ "initializedObject": { "initialized": true } }
```
Instead I'm seeing

```json
{}
```

This is a trivialized case, however our specuific use case is very similar.  We need to asynchronously initialize a class/library prior to app start.  The initialized object then has methods which need to be invoked synchronously.  This _seems_ like the exact solution that instrumentation is meant to solve, based on this [github discussion](https://github.com/vercel/next.js/discussions/15341).