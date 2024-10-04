// Catch me if you can [handleResponseFromAPI(promise)]

function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      // Log the message every time
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
