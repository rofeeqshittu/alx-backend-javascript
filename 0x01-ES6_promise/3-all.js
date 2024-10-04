// Handle multiple successful promises

import { createUser,  uploadPhoto } from "./utils";

async function handleProfileSignup() {
  try {
    // Use Promise.all to resolve both promises simultaneously
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    // Log the result from both promises: photo body and user firstName + lastName
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
      console.log('Signup system offline');
  }
}

export default handleProfileSignup;
