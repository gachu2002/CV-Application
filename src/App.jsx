import ResumeForm from "./components/form/ResumeForm";
import ResumePreview from "./components/preview/ResumePreview";

function App() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_3fr]">
      <ResumeForm />
      <ResumePreview />
    </div>
  );
}

export default App;
