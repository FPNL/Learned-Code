# Learned-Code
把驚訝到的程式碼放進來~

待增
```js
const pipePromise = async (promiseFnArray, endFn, successFn, failFn) => {
  if (!promiseFnArray.length) {
    throw new Error('pipePromise requires promise function in Array');
  }
  let successResult;
  for (let index = 0; index < promiseFnArray.length; index++) {
    const promiseFn = promiseFnArray[index];
    await promiseFn(successResult)
      .then(result => {
        successResult = result;
        successFn && successFn(successResult, promiseFn, index);
        return result;
      })
      .catch(error => {
        failFn && failFn(error, promiseFn, index);
        throw error;
      });
    index === promiseFnArray.length - 1 && endFn && endFn(successResult, index);
  }
};
