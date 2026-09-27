import {useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  
 
    function handleAddTask(text) {
     setProjectsState((prevState) => {
      const taskId = Math.random().toString();
      const newTask = {
         text: text,
         projectId: prevState.selectedProjectId,
         id: taskId
      };

      return {
        ...prevState,
        tasks: [ newTask, ...prevState.tasks ]
      };
    });
    }

    function handleDeleteTask() {}

 
   function handleSelectProject(id) {
 setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
   }


   const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };


  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random().toString();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }



    function handleDeleteProject() {
      setProjectsState((prevState) => ({
        ...prevState,
        selectedProjectId:undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId)
      })); 
    }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

    let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
    />;

    if(projectsState.selectedProjectId === null) {
      content = <NewProject onAdd={handleAddProject}  onCancel={handleCancelAddProject}/>;
    }else if(projectsState.selectedProjectId === undefined) {
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }

   
    function handleCancelAddProject(){
       setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
    }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject}
        />
      {content}
    </main>
  );
}

export default App;
 