import React, { useState } from "react";
import "./Home.css";
import { assets } from "../../assets/assets";
import { FaGreaterThan } from "react-icons/fa6";
import DetailItem from "../../component/DetailItem/DetailItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import HomeCenter from "../../component/HomeCenter/HomeCenter";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

const Home = () => {
  const [isPreview, setIsPreview] = useState(false);
  const greetingText = "Lorem ipsum dolor sit amet consectetur. Et tincidunt.";

  const handleCopy = () => {
    navigator.clipboard.writeText(greetingText);
    alert("Text copied to clipboard!");
  };

  const handlePreview = () => {
    setIsPreview(!isPreview);
  };
  return (
    <div className="chat-container">
      <div className="header">
        <span className="header-title">Chat / Feed Chat</span>
        <div className="header-actions">
          {/* <img className="homeicon" src={assets.homeIcon} alt="homeicon" /> */}
          <AiOutlineHome className="home-icons" />
          <button className="role-btn">Process Owner HOD</button>
          <button className="role-btn admin-btn">Admin</button>
          <img src={assets.userProfile} alt="userProfile" />
          <span className="user-name">Palak Bansal</span>
          <img src={assets.sidebarIcon12} alt="setting-icon" />
          <button className="logout-btn">
            <img src={assets.logoutIcon} alt="logoutIcon" />
            Logout
          </button>
        </div>
      </div>
      <div className="user-list">
        <div className="user-card">
          <div className="user-avatar first-avatar"> CB</div>
          <div className="user-name">Cheyenne Bergson</div>
        </div>
        <div className="user-card">
          <div className="user-avatar">JH</div>
          <div className="user-name">Jonathan Higgins</div>
        </div>
        <div className="user-card">
          <div className="user-avatar">CB</div>
          <div className="user-name">Cheyenne Bergson</div>
        </div>
        <div className="user-card">
          <div className="user-avatar">CT</div>
          <div className="user-name">Capt. Trunk</div>
        </div>
        <div className="user-card spacial-card">
          <div className="user-avatar">HS</div>
          <div className="user-name special-name">Hannibal Smi..</div>
        </div>
        <div className="user-card">
          <div className="user-avatar">CB</div>
          <div className="user-name">Cheyenne Bergson</div>
          <span className="two-text">2</span>
        </div>

        <button className="messaging-btn">
          <img
            src={assets.messagesIcon}
            alt="messagesIcon"
            className="messagesIcon"
          />
          Messaging
          <FaGreaterThan />
        </button>
      </div>
      <div className="home-bottom-main-container">
        {/* bottom left container code */}
        <div className="left-home-container">
          {/* Profile Section */}
          <div className="left-home-container-profile">
            <div className="left-home-container-avatar">CB</div>
            <div className="left-home-container-user-info">
              <h3>Hannibal Smith</h3>
              <p>
                <CiLocationOn />1 Market Street San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Details Section */}
          <div className="left-home-container-details">
            <DetailItem label="Customer ID" value="12345" />
            <DetailItem label="Email Address" value="rachel@sample.com" />
            <DetailItem label="Phone Number" value="8051298905" />
            <button className="left-home-container-add-btn">
              <IoIosAddCircleOutline /> Add
            </button>

            <DetailItem label="Loyalty Tier" value="Silver" />
            <DetailItem label="Segment" value="Sleepy Customer" />
            <button className="left-home-container-add-btn">
              <IoIosAddCircleOutline /> Add
            </button>

            <DetailItem label="Lifetime Value" value="$ 1M" />
            <DetailItem label="Propensity to Purchase" value="75%" progress />
            <button className="left-home-container-add-btn">
              <IoIosAddCircleOutline /> Add
            </button>

            <DetailItem label="Engagement Score" value="80%" progress />
            <button className="left-home-container-add-btn">
              <IoIosAddCircleOutline /> Add
            </button>
          </div>

          {/* Action Buttons */}
          <div className="left-home-container-actions">
            <button className="left-home-container-btn primary">
              <img src={assets.userAddIcon} alt="userAddIcon" />
              Assign other Agent
            </button>
            <button className="left-home-container-btn secondary">
              Add New Widget
            </button>
          </div>
        </div>
        <HomeCenter />
        {/* bottom right container code */}
        <div className="home-right-container">
          <div className="home-right-container-header">
            <h2>Ask Catura</h2>
            <div className="home-right-container-menu">
              <img src={assets.mesageicon} alt="" /> <span> WhatsApp</span> |{" "}
              <img src={assets.mesageicon} alt="" /> <span>Greetings</span>
            </div>
          </div>

          <div className="home-right-container-greeting-section">
            <div
              className={`home-right-container-greeting-box ${
                !isPreview ? "home-right-container-blurred" : ""
              }`}
            >
              <p>{greetingText}</p>
            </div>
            <div className="home-right-container-buttons">
              <button onClick={handleCopy}>Copy to Send</button>
              <button onClick={handlePreview}>Preview</button>
            </div>
            <div className="input-container-last-container">
              <input
                type="text"
                placeholder="Type a message..."
                className="input-text"
              />
              <button className="send-btn">
                <img src={assets.sentfast} alt="" />
              </button>
            </div>
          </div>

          <div className="home-right-container-action-launcher">
            <h3>Action Launcher</h3>
            <div className="input-container-last-container2">
              <CiSearch />
              <input
                type="text"
                placeholder="Type a message..."
                className="input-text"
              />
            </div>
            <div className="home-right-container-actions">
              <button className="btn-first">
                <IoIosAddCircleOutline />
                Add Action
              </button>
              <button className="btn-normal">Fee Reversal</button>
              <button className="btn-normal">Retail Onboarding</button>
              <button className="btn-normal">Address Update</button>
            </div>
          </div>

          <div className="home-right-container-case-favorite">
            <h3>
              <img src={assets.achiveIcon} alt="achiveIcon" />
              Case Favorite
            </h3>
            <div className="home-right-container-case-item">
              <p>{greetingText}</p>
            </div>
            <div className="home-right-container-case-item">
              <p className="row-container">
                <img src={assets.imageIcon} alt="imageIcon" /> Photo
              </p>
            </div>
            <div className="home-right-container-case-item">
              <p>{greetingText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
