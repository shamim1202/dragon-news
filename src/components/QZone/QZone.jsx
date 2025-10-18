import qZoneImage from "../../assets/class.png";
import qZoneImage2 from "../../assets/playground.png";
import qZoneImage3 from "../../assets/swimming.png";

const QZone = () => {
    return (
        <div className="md:p-4 bg-base-200">
            <h1 className="md:font-semibold text-accent">Q-Zone</h1>
            <div className="md:space-y-4">
                <img src={qZoneImage} alt="" srcset="" />
                <img src={qZoneImage2} alt="" srcset="" />
                <img src={qZoneImage3} alt="" srcset="" />
            </div>
        </div>
    );
};

export default QZone;