import React, { Component } from "react";
import "./Footer.scss";

class About extends Component {
  render() {
    return (
      <>
        <div className="about-us">
          <div className="wap-content">
            <div className="about-us-title">
              Truyền thông nói về Phạm Phát Channel
            </div>
            <div className="about-us-content">
              <div className="about-us-content-left">
                <div>
                  <iframe
                    className="video-youtube"
                    height="400"
                    src="https://www.youtube.com/embed/v4pgci2s980?list=PLncHg6Kn2JT4smWdJceM0bDg4YUF3yqLu"
                    title="#1 WHY NODE ? NODE.JS LÀ CÁI QUÁI GÌ  | Node.JS Cơ Bản Cho Beginners Từ A Đến Z"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="about-us-content-right">
                <span className="about-us-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
