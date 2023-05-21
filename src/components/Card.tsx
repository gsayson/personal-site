import { Motion } from "@motionone/solid"
import { Show } from "solid-js"

export function Card(props: {
    title: string,
    description: string,
    iconURL: string,
    rotate?: boolean,
    mt?: number,
    size?: string
}) {
    return (
        <a class="block rounded-xl border border-gray-300 dark:border-[#242424] dark:bg-[#131313] p-4 shadow-md sm:p-6 lg:p-8">
            <Show when={props.rotate as boolean} fallback={<img src={props.iconURL} width={props.size ?? "64rem"} height={props.size ?? "64rem"} class="select-none"/>}>
                <Motion.img src={props.iconURL} width="64rem" height="64rem" class="select-none" animate={{ rotate: 360 }} transition={{ duration: 4, easing: "linear", repeat: Infinity }}/>
            </Show>
            <h3 class="mt-4 text-lg font-bold sm:text-xl">{props.title}</h3>
            <p class="mt-2 text-sm text-gray-400">{props.description}</p>
        </a>
    )
}