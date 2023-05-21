import { IoArrowForward } from "solid-icons/io"
import { A } from "solid-start"

export default function NotFound() {
    return (
        <main class="flex justify-center items-center h-screen flex-col m-4 select-none">
            <h1 class="text-7xl font-black">404.</h1>
            <p class="mt-4 text-center">We couldn't find the page you were looking for.</p>
            <A href="/" class="mt-8 flex align-middle text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-400 hover:text-[#0f0f0f] p-2 transition duration-200">home&ensp;<IoArrowForward size={24}/></A>
        </main>
    )
}
