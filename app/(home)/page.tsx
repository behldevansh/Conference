

import Navbar from "@/components/navbar/navbar";
import Hero from "./hero";
import Sponsor from "./sponsor";
import Submission from "./submission";
import Member from "./members";
import Venue from "./venue";


const LandingPage = () => {
    return ( 
    <div className="">
        <Navbar />
        <Hero/>
        <Sponsor/>
        <Submission/>
        <Member/>
        <Venue/>



    </div> );
}
 
export default LandingPage;