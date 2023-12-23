import BasNavBottom from "../Components/BasNavBottom";
import NavTop from "../Components/NavTop";
import FramParent from "../Components/framParent";
import "./PayoutsDukaanpay.css";

const PayoutsDukaanpay = () => {
  return (
    <div className="payouts-dukaanpay">
      <div className="dashboard-header">
        <div className="frame-parent1">
          <div className="dashboard-container">
            <div className="overview">Payouts</div>
          </div>
          <div className="how-to-use4">
            <img
              className="outlined-help"
              alt=""
              src="/outlined--help@2x.png"
            />
            <div className="how-to-use5">How it works</div>
          </div>
        </div>
        <div className="iconssearch-group">
          <img className="outlined-filters" alt="" src="/iconssearch@2x.png" />
          <div className="search-features-tutorials1">
            Search features, tutorials, etc.
          </div>
        </div>
        <div className="component-2-container">
          <div className="component-21">
            <img className="icons-menu4" alt="" src="/icons--menu@2x.png" />
            <img className="icons-menu4" alt="" src="/icons--menu@2x.png" />
          </div>
        </div>
      </div>
   <FramParent />
      <div className="navbar">
        <div className="navbar-account1">
         <NavTop />
        <BasNavBottom />
        </div>
      </div>
    </div>
  );
};

export default PayoutsDukaanpay;
