import HeaderComponent from "./components/Header/HeaderComponent";
import HeaderContent from "./components/Header/HeaderContent";

const App = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="container">
        <HeaderContent />
      </div>
    </div>
  );
};

export default App;
