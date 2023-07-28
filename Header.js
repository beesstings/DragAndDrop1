import HeaderProjectCard from "./HeaderProjectCard";
import Projects from "./Data/Projects"
const Header = () => {
    return (
        <div className="mt-6 grid gap-6 lg:grid-cols-2 x1:grid-cols-3">
    
            {Projects.map((project) => (
                <HeaderProjectCard project={project} key={project.name}/>
            ))} 
    </div>
    );
};

export default Header;