import { children } from "solid-js"
import { useLocation } from "solid-start"

export function Page(props: any) {
    return (
        <main class="text-center mx-auto">
            {children(() => props.children)()}
        </main>
    )
}