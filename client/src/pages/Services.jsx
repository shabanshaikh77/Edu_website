import { useAuth } from "../store/auth";
import serviceImage from "../images/services.png";
export const Services = () => {
  const { services } = useAuth();
  console.log(Services);

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={serviceImage} alt="designer" width="200" />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{curElem.provider}</p>
                  <p>{curElem.price}</p>
                </div>

                <h2>{curElem.service}</h2>
                <p>{curElem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
