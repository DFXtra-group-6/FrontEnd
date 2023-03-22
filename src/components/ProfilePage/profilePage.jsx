import ProfileBanner from "../ProfileBanner/profile-banner";
import AllExperience from "../Experience/AllExperience";
import NavbarComp from "../NavBar/NavbarComp";
import Greeting from "../NavBar/Greeting";
import PersonalityType from "../Personality/PersonalityType";
import FeedbackComponent from "../FeedbackComponent/feedbackComponent";
import DueDiligence from "../InfoBoxes/DueDiligence";
import Certifications from "../InfoBoxes/Certifications";
import "./profile-page.css";

const ProfilePage = () => {
  return (
    <div className="main-containter">
      <div className="vert-nav">
        <NavbarComp />
      </div>
      <div className="main-content">
        <Greeting />
        <ProfileBanner />
        <PersonalityType />
        <Certifications />
        <DueDiligence />
        <AllExperience />
        <FeedbackComponent />
      </div>
    </div>
  );
};

export default ProfilePage;