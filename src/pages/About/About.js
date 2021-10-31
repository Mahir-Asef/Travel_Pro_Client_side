import React from "react";
import { Carousel } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <>
      <div id="banner" className="">
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
      <div className="about">
        <div className="about-card">
          <h1>Platform for better trip</h1>
          <p>
            Booking trips and tours is all well and good when you know exactly
            where you want to go and what you prefer to see. But what if you
            need a little inspiration to choose? What if your itinerary is still
            not quite formed, and the attractions of a country are definitely
            too many for just one trip? Smart Trip Platform can help you solve
            the problem thanks to its amazing Discover section
          </p>
        </div>
        <div className="about-card">
          <h1>The service is FREE</h1>
          <p>
            Think you can’t afford to go on vacation? Think again. <br /> A
            Wisconsin-based teacher and author with a passion for Spain, Abbey
            Algiers looks for inexpensive ways to take trips on her summer
            holidays. So when she discovered Travel Pro, she couldn’t believe
            it. Travel Pro offers free vacations for English speakers willing to
            spend a week mingling with foreigners in Spain or Germany to help
            them practice their language skills. “It’s the best-kept secret on
            the planet,” she says. Algiers spent a week chatting, enjoying
            Spanish tapas and wine and bonding with fellow travelers. The
            setting couldn’t have been more perfect: La Alberca, a tiny village
            four hours west of Madrid. The best part? Apart from paying for the
            flight there, the trip didn’t cost her a cent
          </p>
        </div>
        <div className="about-card">
          <h1>A place to know the trip will be better</h1>
          <p>
            The excitement that comes with researching a destination, planning a
            trip, experiencing a place, and meeting new people — and helping
            you, our readers, do the same — is the force that drives us to come
            to work each day. We know how important it is to stay home right
            now, and we're so thankful to everyone helping us do so, from the
            healthcare workers and emergency responders fighting to keep us
            healthy and safe, to the grocery store and restaurant workers
            putting food on our tables, to the hospitality professionals who
            haven't given up on bringing the world to us, virtually. But that
            doesn't mean we aren't dreaming of packing our bags and getting back
            out there someday soon. Now's a great time to reflect on past trips
            (maybe you'll finally do something with your treasured travel
            photos?) and think about future ones. When it's time to travel
            again, where will you go? Back to your hometown to hug loved ones or
            to revisit a favorite place you've been missing? Or is there
            somewhere you've never been that you're aching to cross off your
            list more than ever? Below, we share the places on our minds to get
            you thinking.
          </p>
        </div>
        <div className="about-card">
          <h1>Booking trip made easy</h1>
          <div>
            <p>
              Booking a vacation has never been more convenient. As your
              one-stop vacation planner, Travel Pro has everything you need to
              book an unforgettable getaway. From attractions and tours to
              lodging and even customizable vacation packages, you are sure to
              find exactly what you desire for your trip of a lifetime! If you
              aren't sure where to go, check out our most popular destinations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
