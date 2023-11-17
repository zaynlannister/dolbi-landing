import FooterSection from "./components/Footer/FooterSection";
import FormComponent from "./components/Form/FormComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import HeaderContent from "./components/Header/HeaderContent";
import NftSection from "./components/NFT/NftSection";
import PromoteSection from "./components/Promote/PromoteSection";
import RecentSection from "./components/Recent/RecentSection";

const App = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="my-container">
        <HeaderContent />
      </div>
      <div className="my-container">
        <NftSection />
      </div>
      <div className="my-container">
        <FormComponent />
      </div>
      <div>
        <PromoteSection />
      </div>
      <div className="my-container">
        <RecentSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
