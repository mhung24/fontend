import React from "react";
import { Banner } from "../Banner/Banner";
import { News } from "../News/News";
import { FeaturedEvents } from "../Featured Events/FeaturedEvents";
import { ForeignCooperation } from "../Foreign Cooperation/ForeignCooperation";
import { Admission } from "../Admission/Admission";
import { Other } from "../Other/Other";
import { Footer } from "../Footer/Footer";

export const Content = () => {
  return (
    <>
      <div>
        <Banner />
      </div>

      <div>
        <div className="content-item">
          <News />
        </div>

        <div>
          <FeaturedEvents />
        </div>

        <div className="content-item">
          <ForeignCooperation />
        </div>

        <div className="content-item">
          <Admission />
        </div>

        <div className="content-item">
          <Other />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
