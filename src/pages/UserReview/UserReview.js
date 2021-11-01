import React from 'react';
import { Carousel } from "react-bootstrap";
import './UserReview.css'

const UserReview = () => {
    return (
        <div>
            <div id="banner">
          <h2>User Experience</h2>
        <Carousel className="banner-about">
          <Carousel.Item>
            <img
              className="d-block  about-img rounded-circle"
              src="https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo="
              alt="First slide"
            />
            <Carousel.Caption>
              <h4 className="text-trip">
                Ohh !! it's a top class travel agency.i am so much satisfied.
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block rounded-circle about-img"
              src="https://images.ctfassets.net/hrltx12pl8hq/31f9j3A3xKasyUMMsuIQO8/6a8708add4cb4505b65b1cee3f2e6996/9db2e04eb42b427f4968ab41009443b906e4eabf-people_men-min.jpg?fit=fill&w=368&h=207"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h4 className="about-text">
                <span className="text-trip">I personally travel with too many travel agency. But i can not find anyone like Travel Pro. it's a pleasure for me.</span>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block rounded-circle about-img"
              src="https://images.squarespace-cdn.com/content/v1/560b8300e4b05c000f4b459a/1555826914210-GZT2R86VFBX968XH37KR/People-Bloom-Counseling-Redmond-Couples-Stress-Teens-Therapy.jpg?format=2500w"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="about-text">
                <span className="text-trip text-warning">Me and my friend are too curious about traveling.But we can not find such an affordable packages.But finally we found Travel Pro.It recommended will be to all. </span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
        </div>
    );
};

export default UserReview;