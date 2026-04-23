import CONTACT from "../../CONTACT/CONTACT";
import OURMENU from "../../OURMENU/OURMENU";
import TESTIMONIALS from "../../TESTIMONIALS/TESTIMONIALS";
import PopularItem from "../../popularitem/PopularItem";
import Hedar from "../Hedar/Hedar";
import Benar from "../bedar/Benar";
import Benar2 from "../bedar/Benar2/Benar2";





const Home = () => {
    return (
        <div>

        <Hedar></Hedar>
        <Benar></Benar>
        <Benar2></Benar2>
        <PopularItem></PopularItem>
        
      
        <OURMENU></OURMENU>
        <TESTIMONIALS></TESTIMONIALS>
        <CONTACT></CONTACT>
        </div>

    );
};

export default Home;