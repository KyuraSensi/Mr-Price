import KyusAboutUs from "./components/aboutUs/Kyu's About Us/KyusAboutUs";
import KyusBanner from "./components/banners/Kyu's Banner/KyusBanner";
import KyusContactUs from "./components/contactUs/Kyu's Contact Us/KyusContactUs";
import KyusFooter from "./components/footers/Kyu's Footer/KyusFooter";
import KyusMostRecent from "./components/mostRecent/Kyu'sMostRecent/KyusMostRecent";
import KyusNavbar from "./components/navbars/Kyu's Navbar/KyusNavbar";
import KyusTeamMembers from "./components/teamMembers/Kyu's Team Member/KyusTeamMembers";

function App() {
  return (
    <div className="App">
      < KyusNavbar/>
      < KyusBanner/>
      <KyusMostRecent/>
      < KyusTeamMembers />
      < KyusContactUs />
      < KyusAboutUs />
      < KyusFooter />
      
    </div>
  );
}

export default App;
