import Books from "../Books/Books";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default Home;