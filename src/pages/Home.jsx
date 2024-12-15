import HomeIntro from "../components/HomeIntro";
import HomeFeatures from "../components/HomeFeatures";
import HomeImpact from "../components/HomeImpact";
import BotButton from "../components/BotButton";

export default function () {

    return (
        <main className="flex flex-col items-center gap-28 h-full px-20 py-10">
            <BotButton />
            <HomeIntro />
            <HomeFeatures />
            <HomeImpact />
        </main>
    )
}