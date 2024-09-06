// import { Formik, Field, Form } from "formik";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Input,
//   VStack
// } from "@chakra-ui/react";
// import * as z from 'zod'
// import {useRouter} from 'next/navigation'


// const FormSchema = z
// .object({
//   username: z.string().min(1, 'Username is required').max(100),
//     email: z.string().min(1, 'Email is required').email('Invalid email'),
//     password: z
//     .string()
//     .min(1, 'Password is required')
//     .min(8, 'Password must have more than 8 characters'),
//     confirmPassword: z.string().min(1, 'Password confirmation is required.')
// })
// .refine((data) => data.password === data.confirmPassword, {
//   path: ['confirmPassword'],
//   message: 'Password do not match.'
// })

// const SignUpForm = () => {
// const router = useRouter()


//     const onSubmit = async (values: z.infer<typeof FormSchema>) => {
//         const response = await fetch('/api/user', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: values.username,
//                 email: values.email,
//                 password: values.password

//             })
//         })

//         if(response.ok) {
//             router.push('/sign-in')
//         }else {
//             console.error('Registration failed')
//         }
//     }

// const validatePassword = (values) => {
//   let error = " "
//   const passwordRegex = /(?=.*[8-9])/
//   if (!values){
//     error = "*Required"
//   } else if (values.length < 8) {
//     error = "*Password Must be 8 characters long."
//   } else if (!passwordRegex.test(values)) {
//     error = "*Invalid Password.  Must contain one number."
//   }
//   return error
// }
   
// const validateConfirmPassword = (pass: any, value: any) => {

//   let error = " "
//   if(pass && value) {
//     if(pass !== value) {
//       error = "Password not matched."
//     }
//   }
  
//   return error

// }


//   return (
//     <Flex bg="gray.100" align="center" justify="center" h="100vh">
//       <Box bg="white" p={6} rounded="md" w={64}>
//         <Formik
//             initialValues={{
//               username: '',
//               email: '',
//               password: '',
//               confirmPassword: ''
//             }}
//             onSubmit={onSubmit}>
//           {({ handleSubmit, errors, touched }) => (
//             <form onSubmit={handleSubmit}>
//               <VStack spacing={4} align="flex-start">
//                 <FormControl>
//                   <FormLabel htmlFor="username">Username</FormLabel>
//                   <Field
//                     as={Input}
//                     id="username"
//                     name="username"
//                     type="username"
//                     variant="filled"
//                   />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel htmlFor="email">Email Address</FormLabel>
//                   <Field
//                     as={Input}
//                     id="email"
//                     name="email"
//                     type="email"
//                     variant="filled"
//                   />
//                 </FormControl>
//                 <FormControl isInvalid={!!errors.password && touched.password}>
//                   <FormLabel htmlFor="password">Password</FormLabel>
//                   <Field
//                     as={Input}
//                     id="password"
//                     name="password"
//                     type="password"
//                     variant="filled"
//                     validate={(validatePassword)}
//                   />
//                   </FormControl>
//                   <FormControl>
//                   <FormLabel htmlFor="password">Confirm Password</FormLabel>
//                   <Field
//                     as={Input}
//                     id="confirmpassword"
//                     name="confirmpassword"
//                     type="password"
//                     variant="filled"
//                     validate={(validateConfirmPassword)}
//                   />
//                   </FormControl>
//                 <Button type="submit" colorScheme="purple" width="full">
//                   Submit
//                 </Button>
//               </VStack>
//             </form>
//           )}
//         </Formik>
//       </Box>
//     </Flex>
//   );

//                   }

// function useForm<T>(arg0: { resolver: any; defaultValues: { username: string; email: string; password: string; confirmPassword: string; }; }) {
//   throw new Error("Function not implemented.");
// }

// export default SignUpForm