import { Motion } from "@motionone/solid"
import { IoLogoGithub, IoMail, IoMale, IoTime } from "solid-icons/io"
import { createSignal } from "solid-js"
import { A } from "solid-start"
import { Card } from "~/components/Card"
import { Page } from "~/components/Page"

export default function Home() {
    return (
        <Page>
            <IntroSection/>
            <StackSection/>
            {/* <AwardsSection/> */}
            <SocialSection/>
        </Page>
    )
}

function IntroSection() {
    const [date, setDate] = createSignal(new Date())
    setInterval(() => setDate(new Date()), 1000)
    return (
        <section class="mb-12 flex items-center justify-center text-left mx-8 mt-32" id="s1">
            <Motion.div class="md:w-2/3" initial={{ opacity: 0 }} inView={{ opacity: 1 }} transition={{ duration: 1, easing: "ease-in-out" }}>
                <h1 class="max-6-xs text-7xl mt-16 mb-4 font-bold">Gerard Sayson</h1>
                <p class="mb-8 flex text-gray-400">
                    <IoMale size="1.35rem"/>&ensp;he/him&emsp;<IoTime size="1.35rem"/>&ensp;
                    {(date().getUTCHours() + 8).toString().padStart(2, "0")}:{date().getUTCMinutes().toString().padStart(2, "0")}:{date().getUTCSeconds().toString().padStart(2, "0")} SGT
                </p>
                <p class="mt-4">I'm Gerard, a full-stack software engineer and web developer currently based in Singapore.</p>
            </Motion.div>
        </section>
    )
}

function StackSection() {
    return (
        <section class="mb-16 flex items-center justify-center text-left m-8" id="s2">
            <Motion.div class="md:w-2/3" initial={{ opacity: 0 }} inView={{ opacity: 1 }} transition={{ duration: 1, easing: "ease-in-out" }}>
                <h1 class="max-6-xs text-5xl my-8 font-semibold">My stack</h1>
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card title="SolidJS" description="A simple and highly performant reactive library for building user interfaces, and it's my most favourite library as of now. This website is built with it!" iconURL="/img/logos/solid.svg"/>
                    <Card title="React" description="The first-ever UI library I used, when I was just getting into frontend development. It's my second favourite, after SolidJS." iconURL="/img/logos/react.svg" rotate/>
                    <Card title="NodeJS" description="The first-ever serverside JavaScript runtime." iconURL="/img/logos/nodejs.svg"/>
                    <Card title="Java" description="An excessively object-oriented class-based programming language with factories, singletons, and cool beans. I like Java as much as Rust." iconURL="/img/logos/java.svg" size="44.275rem"/>
                    <Card title="Spring Boot" description="My favourite Java backend framework. Cool beans." iconURL="/img/logos/spring.svg"/>
                </div>
            </Motion.div>
        </section>
    )
}

function AwardsSection() {
    return (
        <section class="mb-16 flex items-center justify-center text-left m-8" id="s3">
            <Motion.div class="md:w-2/3" initial={{ opacity: 0 }} inView={{ opacity: 1 }} transition={{ duration: 1, easing: "ease-in-out" }}>
                <h1 class="max-6-xs text-5xl my-8 font-semibold">Awards</h1>
                <p>Solid!</p>
            </Motion.div>
        </section>
    )
}

function SocialSection() {
    return (
        <section class="mb-16 flex items-center justify-center text-left m-8" id="s3">
            <Motion.div class="md:w-2/3" initial={{ opacity: 0 }} inView={{ opacity: 1 }} transition={{ duration: 1, easing: "ease-in-out" }}>
                <h1 class="max-6-xs text-5xl my-8 font-semibold">Contact me</h1>
                <ul>
                    <li><p class="flex align-middle"><IoLogoGithub size={24}/>&ensp;&mdash;&ensp;<A href="https://github.com/gsayson" class="hover:underline text-blue-500">@gsayson</A></p></li>
                    <li><p class="flex align-middle mt-2"><IoMail size={24}/>&ensp;&mdash;&ensp;<a href="mailto:me@gsn.bz" class="hover:underline text-blue-500">me@gsn.bz</a></p></li>
                </ul>
            </Motion.div>
        </section>
    )
}