import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email({
<<<<<<< HEAD
    message:"Invalid email"
  }),
  password: z.string().min(2,{
    message:"Password required"
=======
    message:"Invalid required"
  }),
  password: z.string().min(2,{
    message:"Password is required"
>>>>>>> b30ea446a68b0588a10498cb03925b8b9d2ec57d
  }),
});

