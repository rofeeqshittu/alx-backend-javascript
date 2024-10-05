import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    res = { photo, user }; // Update with actual results
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
