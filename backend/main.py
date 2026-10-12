
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Tanish Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

projects = [
    {
        "number": "01",
        "title": "E-Learning Platform",
        "type": "FULL STACK APPLICATION",
        "description": "A MERN-based learning platform for managing courses and students.",
        "tech": ["React", "Node.js", "MongoDB"],
    },
    {
        "number": "02",
        "title": "Interactive Quiz App",
        "type": "WEB APPLICATION",
        "description": "An interactive quiz application with multiple-choice questions.",
        "tech": ["JavaScript", "React", "CSS"],
    },
    {
        "number": "03",
        "title": "Business Websites",
        "type": "WEB DEVELOPMENT",
        "description": "Responsive business websites built with attention to usability and design.",
        "tech": ["HTML", "CSS", "JavaScript"],
    },
]

@app.get("/")
def home():
    return {"message": "Tanish Portfolio Python Backend is running!"}

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "backend": "FastAPI"}

@app.get("/api/projects")
def get_projects():
    return {"count": len(projects), "projects": projects}
