import { assets } from "../../assets/assets";
import "./DetailItem.css";

const DetailItem = ({ label, value, progress }) => (
  <div className="left-home-container-detail-item">
    <div className="left-home-container-detail-header">
      <span>{label}</span>
    </div>
    <div className="left-home-container-detail-value">
      {progress ? (
        <div className="left-home-container-progress">
          <div
            className="left-home-container-progress-bar"
            style={{ width: value }}
          ></div>
          <span>{value}</span>
        </div>
      ) : (
        <div className="dataitem-row-container" >
          <span>{value}</span> <img src={assets.dotsicon} alt="" />{" "}
        </div>
      )}
    </div>
  </div>
);

export default DetailItem;
