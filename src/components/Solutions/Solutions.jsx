import "./Solutions.css";
import SolutionCard from "./SolutionCard";
import SolutionCardData from "./SolutionCardData";



function Solutions() {

    return (

        <section className="solutions-section">

            {/* LEFT */}
            <div className="solutions-left">

                <h2 className="solutions-heading">
                    All of our solutions are<br />tailor-made to your needs
                </h2>

                <button className="solutions-btn"> Request Demo
                </button>
            </div>

            {/* RIGHT*/}
            <div className="solutions-right">
                {SolutionCardData.map((item, index) => (
                            <SolutionCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            />
                ))}
            </div>
        </section>
    )
  }
  
  export default Solutions;