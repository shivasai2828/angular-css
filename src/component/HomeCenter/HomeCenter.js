import React from "react";
import { Chrono } from "react-chrono";
import "./HomeCenter.css";
import { IoIosClose } from "react-icons/io";
import { assets } from "./../../assets/assets";

const HomeCenter = () => {
  return (
    <div className="home-center-container">
      {/* Header Section */}
      <div className="home-center-container-header">
        <div className="home-center-container-tabs">
          <span>Conversation</span>
          <span>
            Address Update <IoIosClose />
          </span>
          <span>
            Fee Reversal <IoIosClose />
          </span>
          <span>
            Retail Onboarding <IoIosClose />
          </span>
        </div>
        <button className="home-center-container-escalate">Escalate</button>
      </div>

      {/* Conversation Section */}
      <div className="home-center-container-timeline">
        <div className="homecenter-buttons-container">
          <button>conversion</button>
          <button>Attachment</button>
        </div>

        <div className="clone-container">
          {/* First Message Block */}
          <div className="clone-container-chat-item">
            <div className="clone-container-avatar">CB</div>
            <div className="clone-container-message">
              <div className="clone-container-header">
                <span className="clone-container-name">Rachel Adams</span>
                <span className="clone-container-time">9:08 PM</span>
                <span className="clone-container-platform">
                  • Received By WhatsApp
                </span>
              </div>
              <div className="clone-container-content">
                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio
                vivamus ac aliquam. Placerat maecenas quis ut elementum praesent
                imperdiet. Egestas mattis pellentesque nibh dui sed malesuada
                dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
              </div>
            </div>
          </div>

          {/* Connector Line */}
          <div className="clone-container-connector"></div>

          {/* Second Message Block */}
          <div className="clone-container-chat-item clone-container-self">
            <div className="clone-container-avatar">HK</div>
            <div className="clone-container-message">
              <div className="clone-container-header">
                <span className="clone-container-name">You</span>
                <span className="clone-container-time">
                  27 Jul, 2024, 9:08 PM
                </span>
                <span className="clone-container-platform">
                  • Sent By WhatsApp
                </span>
              </div>
              <div className="clone-container-content">
                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio
                vivamus ac aliquam. Placerat maecenas quis ut elementum praesent
                imperdiet. Egestas mattis pellentesque nibh dui sed malesuada
                dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="home-center-container-input-section">
        <div className="home-center-container-input-buttons">
          <div className="input-container">
            <input type="checkbox" className="input-check-box" checked />
            <label>SMS</label>
          </div>
          <div className="input-container">
            <input type="checkbox" className="input-check-box" />
            <label className="active">WhatsApp</label>
          </div>
          <div className="input-container">
            <input type="checkbox" className="input-check-box" checked />
            <label>Email</label>
          </div>
        </div>
        <div className="home-center-container-input-area">
          <textarea placeholder="Type a message..."></textarea>
          <img
            src={assets.sidebarIcon3}
            className="icon-search-side"
            alt="icon"
          />
          <button className="home-center-container-send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCenter;
