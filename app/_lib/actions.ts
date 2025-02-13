"use server";

import { z } from "zod";

const User = z.object({
  avatar: z.string().min(1, { message: "Please upload an avatar" }),
  name: z
    .string()
    .min(2, { message: "Name must be 2 chars or more!" })
    .max(100, { message: "Name cannot exceed 100 chars" }),

  email: z.string().email({ message: "Please fill in a valid email!" }),
});

export async function stepTwoAction(prevState, formData: FormData) {
  // step 1 (ensure the user who call this action is logged) - no auth in the app
  // step 2 (ensure the data the user is trying to mutate is his own) = no mutation here (no auth)
  // step 3 (Build the data and ensure the inputs are safe)

  const usersDetails = {
    avatar: formData.get("avatarHidden"),
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const { data, success, error } = User.safeParse(usersDetails);

  if (!success) {
    return {
      errors: error?.flatten()?.fieldErrors,
      inputs: { ...usersDetails, request: formData.get("request") },
    };
  }

  //   step 4: perform mutation to DB

  //   step 5
  return {
    success: true,
    userData: { ...data, request: formData.get("request") },
  };
}
