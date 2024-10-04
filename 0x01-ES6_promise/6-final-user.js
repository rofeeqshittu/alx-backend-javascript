import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName), uploadPhoto(fileName)])
    .then((results) => {
      // Format the results as expected
      return results.map(result => ({
        status: result.status,
        value: result.value || result.reason, // 'value' if fulfilled, 'reason' if not
      }));
    });
}
