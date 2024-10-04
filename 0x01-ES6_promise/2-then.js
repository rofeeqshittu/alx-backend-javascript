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
      console.log('Got a response from the API');   // Log the message everytime
    });
}

export default handleResponseFromAPI;
