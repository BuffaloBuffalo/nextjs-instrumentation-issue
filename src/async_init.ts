let initializedObject: any;
export async function doInitialization(){
  initializedObject = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ initialized:  true });
    }, 1_000)
  });
  console.log('intialized value to ', initializedObject);
}

export const getInitializedObject = () => initializedObject;