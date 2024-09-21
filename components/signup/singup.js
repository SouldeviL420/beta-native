// import { View, Text, SafeAreaView, TextInput, TouchableOpacity,Image } from 'react-native'
// import React, { useState } from 'react'
// import Button from '../button/button'
// import { auth,createUserWithEmailAndPassword } from '../../firbaseConfig';

// export default function Singup() {
//   const [firstName,setFirstName]=useState('');
//   const [lastName,setLastName]=useState('');
//   const [email,setEmail]=useState('');
//   const [password,setPassword]=useState('')
//   const handleSignUp=()=>{
//     createUserWithEmailAndPassword(auth,email,password)
//     .then(()=>{
//       alert("user created successfully");
//       setFirstName(''),
//       setLastName('')
//       setEmail(''),
//       setPassword('')
      

//     }).catch(error=>{
//       if(error.code==='auth/email-already-in-use'){
//         alert('This email address is already use');
//       }else if(error.code==='auth/invalid-email'){
//         alert('Email address is invalid');
//       }else{
//         alert('Error'+error.message)
//       }
//       console.error(error)
//     })

//   }
//   return (
//     <SafeAreaView className="flex justify-center items-center bg-orange-500  ">
//     <View className="mt-24">
//       <Text className="text-3xl font-bold">Create Account</Text>
//     </View>
//     <View className="mt-4">
//       <TextInput
//       value={firstName}
//       onChangeText={setFirstName}
//       placeholder='Enter your First Name'
//       placeholderTextColor="gray"
//       className="bg-gray-200 text-gray-700 rounded py-3 px-5"
      
//       />
//       <TextInput
//       value={lastName}
//       onChangeText={setLastName}
//       placeholder='Enter your Last Name'
//       placeholderTextColor="gray"
//       className="bg-gray-200 text-gray-700 mt-3 rounded py-3 px-5"
      
//       />
//       <TextInput
//       value={email}
//       onChangeText={setEmail}
//       placeholder='User@user.com'
//       placeholderTextColor="gray"
//       className="bg-gray-200 text-gray-700  mt-3 rounded py-3 px-5"
      
//       />
//       <TextInput
//       secureTextEntry
//       value={password}
//       onChangeText={setPassword}
//       placeholder='Enter your password'
//       placeholderTextColor="gray"
//       className="bg-gray-200  text-gray-700  mt-3 rounded py-3 px-5"
      
//       />
//       <TouchableOpacity className="mt-2 flex items-end">
//         <Text className="text-gray-700 font-bold font-sans">Forgot password?</Text>
//       </TouchableOpacity>
//       <Button
//       title="Signup"
//       bgColor="bg-blue-500"
//       textColor="text-white"
//       onPress={handleSignUp}
      
//       />
//       <View>
//         <Text className="text-gray-700 text text-center font-bold">Or  Continue with</Text>
//         <View className="flex flex-row">
//           <TouchableOpacity className="bg-gray-200 mx-2  rounded-lg px-12 py-2 w-20 flex justify-center items-center">
//             {/* <Image
//             source={require("/home/daniyal/Documents/SMIT/native-app/assets/favicon.png")}
//             style={{width:30,height:30}}

//             /> */}
//           </TouchableOpacity>
//           <TouchableOpacity className="bg-gray-200 mx-2  rounded-lg px-12 py-2 w-20 flex justify-center items-center">
//             <Image
//             source={{uri:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"}}
//             style={{width:30,height:30}}

//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//     </View>
//     </SafeAreaView>
//   )
// }