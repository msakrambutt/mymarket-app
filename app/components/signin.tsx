import { SignIn, SignInButton } from '@clerk/nextjs/dist/client-boundary/uiComponents'
import { ClerkProvider } from '@clerk/nextjs/dist/components.server';


async function Signin1() {
   
    return(   <ClerkProvider><SignIn/>
   
    </ClerkProvider>)
  
    
 }
 export default async function Home(){
  
    return(
      
        <form action={Signin1}>
        <button className="  bg-indigo-900 hover:bg-indigo-600 p-2 invisible md:visible md:flex rounded-lg text-white hover:-lime-400">Account  <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-cart inline-block h-6 w-6 ml-3"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.25 11h12.5l2.25-9H1zm6 11h12" />
              </svg></button></form>
   
    )
}
 