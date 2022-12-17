import Hero from "../components/hero";
import Portfolio from "../components/portfolio";

const work = () => {
    return (
        <div>
            <Hero heading='My work' message='This is some of my recent work travelling the world.'/>
            <Portfolio/>
        </div>
    );
}

export default work;