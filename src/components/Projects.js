// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects"> This is Projects
        <div className="project-one-card">
            Star Wars Trivia Game
            <a href="https://github.com/JasonKulak/Seal_Project1">github</a>
            <a href="https://jasonkulak.github.io/Seal_Project1/">Trivia site</a>
            
        </div>
        <div className="project-two-card">
            World Brunches
            <a href="https://github.com/JasonKulak/Project_2">github</a>
            <a href="https://jk-project-2.onrender.com/sandwich">Brunch site</a>
        </div> 
    </div>
}

// export the component
export default Projects
