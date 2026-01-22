import Hero from '../components/Hero'
import HomeBody from '../components/HomeBody'

// Provide metadata specifically for the home page if needed, but layout covers the default.
// export const metadata = { ... }

export default function Home() {
    return (
        <main>
            <Hero />
            <HomeBody />
        </main>
    )
}
