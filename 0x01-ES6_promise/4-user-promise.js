// Simple promise returns a resolved promise with an object


function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
    // also .resolve({ firstName: `${firstName}`, lastName: `${lastName}` })
}

export default signUpUser;
