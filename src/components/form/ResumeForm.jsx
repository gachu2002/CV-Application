import Profile from "../sections/Profile";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Skills from "../sections/Skills";

export default function ResumeForm() {
    
    return (
        <section id="resume-edit" className="bg-gray-400 p-10">
            <div className="flex flex-col p-3 gap-1.5 bg-gray-800">
                <Profile />
                <Contact />
                <Experience />
                <Education />
                <Skills />
            </div>
        </section>
    )
}
