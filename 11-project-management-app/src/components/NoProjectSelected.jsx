import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({onStartAddProject}) {
    return (
       <div className="mt-24 text-center w-2/3"> 
         <img
         src={noProjectImage} 
         alt="An empty Task List" 
         className="w-16 h-16 object-contain mx-auto" />
          <h2 className="text-xl font-bold text-slate-400 mt-4 my-4">No Project Selected</h2>
          <p className="text-slate-400 mb-4">
            Select a project to get started with a new one.
          </p>
          <p className="mt-8">
            <Button onClick={onStartAddProject}> 
              Create New Project
            </Button>
          </p>
       </div>
    )
}