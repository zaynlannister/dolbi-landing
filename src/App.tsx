import FormComponent from "./components/Form/FormComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import HeaderContent from "./components/Header/HeaderContent";
import PromoteSection from "./components/Promote/PromoteSection";

const App = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="container">
        <HeaderContent />
      </div>
      <div className="container">
        <FormComponent />
      </div>
      <div>
        <PromoteSection />
      </div>
    </div>
  );
};

export default App;
