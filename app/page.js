'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
 const router= useRouter()
  useEffect(()=>{
    router.push('/dashboard')
  },[])
  return (
    <div>
     <div class="flex items-center justify-center h-screen">
    <div class="relative">
        <div class="h-36 w-36 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div class="absolute top-0 left-0 h-36 w-36 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
    </div>
  )
}
