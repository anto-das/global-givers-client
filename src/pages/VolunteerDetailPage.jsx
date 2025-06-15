
import Hero from "../components/Hero";
import VolunteerDetail from "../components/VolunteerDetail";
import useTitle from "../hooks/useTitle";


const VolunteerDetailPage = () => {
   // dynamic title
    useTitle("Detail-page")
    return (
      <div>
        <VolunteerDetail></VolunteerDetail>
        <Hero></Hero>
      </div>
    );
};

export default VolunteerDetailPage;