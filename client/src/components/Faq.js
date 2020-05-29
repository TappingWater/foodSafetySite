import React, { Component } from 'react'
import './css/FAQPage.css'

export default class FAQ extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div id="FAQGeneral">
          <h4>
            Frequently Asked Questions
          </h4>
          <div id="FAQQuestions">
            <section
              className="accordion-section clearfix mt-3"
              aria-label="Question Accordions"
            >
              <div className="container">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading0"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse0"
                          aria-expanded="true"
                          aria-controls="collapse0"
                        >
                          1.) What is the Food Safety Modernization Act?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse0"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading0"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                          The Food Safety Modernization Act (FSMA) was passed
                          in 2011 by President Obama and is the most sweeping
                          reform of our food safety laws in more than 70 years
                          (since the Food Drug and Cosmetic Act of 1938). The
                          act aims to ensure the US food supply is safe by
                          shifting the focus from responding to contamination
                          to preventing it. The Food and Drug Administration
                          has developed seven different regulations that
                          encompass FSMA including:
                        </p>
                        <ul>
                          <li>
                            Produce Safety Rule
                          </li>
                          <li>
                            Preventive Controls for Human Food Rule
                          </li>
                          <li>
                            Preventive Controls for Animal Food Rule
                          </li>
                          <li>
                            Mitigation Strategies to Protect Food Against
                            Intentional Adulteration Rule
                          </li>
                          <li>
                            Sanitary Transportation of Human and Animal Food
                            Rule
                          </li>
                          <li>
                            Foreign Supplier Verification Programs Rule
                          </li>
                          <li>
                            Accredited Third-Party Certification Rule
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading1"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          2.) What is the Produce Safety Rule?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                          The Produce Safety Rule (PSR) is one of the seven
                          food safety regulations that are part of the Food
                          Safety Modernization Act (FSMA). The PSR sets a
                          series of standards for the safe growing,
                          harvesting, packing, and holding of produce grown
                          for human consumption: 21 Code of Federal
                          Regulations Part 112.
                        </p>
                        <p>
                          Similar to the other FSMA rules, the PSR aims to be
                          proactive rather than reactive by focusing on
                          high-risk practices and identification of hazards
                          within individual operations. For example, there are
                          no requirements for uncontrollable factors, such as
                          number of wildlife allowed in fields. Instead, the
                          PSR mandates covered produce not be harvested when
                          contaminated by feces (e.g., bird dropping on a
                          tomato intended for fresh market).
                        </p>
                        <p>
                          Standards are set for: agricultural water;
                          biological soil amendments; sprouts; wildlife and
                          domesticated animals; worker health, hygiene, and
                          training; equipment, tools, and buildings; among
                          others.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading2"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse2"
                          aria-expanded="true"
                          aria-controls="collapse2"
                        >
                          3.) Who will be regulating the PSR in Virginia?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse2"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading2"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        The Virginia Department of Agriculture and Consumer Services
                        (VDACS) received federal grant funding
                        in 2016 to establish a Produce Safety Program within the
                        Office of Dairy and Foods. This new regulatory
                        program will work to address the growing, packing, holding
                        and dissemination of produce grown on farms and will encourage
                        the safe production of fresh fruits and vegetables and promote
                        understanding and compliance with the FDA Produce Safety Rule
                        and state legislation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading3"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse3"
                          aria-expanded="true"
                          aria-controls="collapse3"
                        >
                          4.) Is the Produce Safety Rule the same as GAP
                          Certification?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse3"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading3"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                          No, the Produce Safety Rule (PSR) is a regulation
                          that establishes science-based minimum standards for
                          safe production and harvesting of fresh fruits and
                          vegetables. These standards are based on a
                          foundation of Good Agricultural Practices (GAPs).
                          However, while the PSR is based on a solid framework
                          of understanding on-farm risks and GAPs, it is not
                          the same as GAP certification. Whereas the PSR is
                          regulatory and mandatory for growers who are covered
                          under the PSR, GAP certification is a voluntary
                          program often required by industry and buyers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading4"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse4"
                          aria-expanded="true"
                          aria-controls="collapse4"
                        >
                          5.) If I am already GAP certified do I also need to
                          comply with FSMA PSR?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse4"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading4"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        Some farms that are GAP certified may not necessarily grow
                        covered produce under the PSR and may therefore be exempt.
                        If your farm is covered under the PSR, then you must still
                        adhere to and comply with the requirements of the PSR regulation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading5"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse5"
                          aria-expanded="true"
                          aria-controls="collapse5"
                        >
                          6.) How do I know if I am covered or exempt?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse5"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading5"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                          By registering and logging into this site, you can
                          fill out a questionnaire that will ask certain
                          questions regarding your farm and produce. Based on
                          your responses, it will determine whether or not you
                          are covered and/or exempt.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading6"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse6"
                          aria-expanded="true"
                          aria-controls="collapse6"
                        >
                          7.) When will compliance dates become effective?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse6"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading6"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        See both links under Compliance Dates on this site. Regulatory
                        compliance inspection will likely begin in the summer of 2019
                        and all inspections will be scheduled with farm management.
                        VDACS will begin conducting on-farm readiness reviews (OFRRs)
                        with Virginia Cooperative Extension after April 2018 at
                        farms once they have completed the Produce Safety Alliance
                        grower training course. To take part in an OFRR, please
                        contact our office.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading7"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse7"
                          aria-expanded="true"
                          aria-controls="collapse7"
                        >
                          8.) When will VDACS begin regulatory inspections?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse7"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading7"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        Large Farm inspections (greater than $500,000 in annual
                        produce sales for a 3-year average) will begin May 1, 2019.
                        Small Farm inspections (greater than $250,000 up to $500,000
                        in annual produce sales for a 3-year average) will begin early
                        2020. Very Small Farm inspections ($250,000 or less in annual
                        produce sales for 3-year average) will begin early 2021.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading8"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse8"
                          aria-expanded="true"
                          aria-controls="collapse8"
                        >
                          9.) If a farm sells produce to only one restaurant, nearby, do they fall under the PSR?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse8"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading8"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        They might be qualified exempt if “nearby” means they are
                        selling to a qualified end-user. In addition to selling
                        to a qualified end-user, if the average annual monetary
                        value of all food the farm sold during the 3-year period
                        preceding the applicable calendar year was less than
                        $500,000 and more than 50% of their sales are to qualified
                        end-users, then they are qualified exempt from the PSR.
                        You must keep records to show your qualified exemption
                        and you must follow label requirments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading9"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse9"
                          aria-expanded="true"
                          aria-controls="collapse9"
                        >
                          10.) If a farm sells produce and owns a restaurant, how do they fall under the PSR?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse9"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading9"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                          If their produce sales are less than $25,000, they are exempt from the PSR.
                        </p>
                        <p>
                        If their average monetary value of all food this farm/restaurant
                        sold during the 3-year period preceding the applicable calendar
                        year was less than $500,000; and more than 50% of their sales
                        are to qualified endusers, then they are qualified exempt
                        from the PSR. You must keep records to show your qualified
                        exemption and you must follow label requirments.2
                        </p>
                        <p>
                        If the farm/restaurant’s average annual monetary value of
                        all food sold during the 3-year period preceding the
                        applicable calendar year was more than $500,000, then
                        they fall under the PSR.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading10"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse10"
                          aria-expanded="true"
                          aria-controls="collapse10"
                        >
                          11.) If one day my sales go over $25,000, is my farm automatically under the PSR that day?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse10"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading10"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        The sales are a 3-year average, so as your sales continue
                        to go over the mark, you should be aware that your average
                        will eventually go over the limit too. Even going over the
                        $25,000 average, if you sell to qualified end-users, you
                        might be qualified exempt.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading11"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse11"
                          aria-expanded="true"
                          aria-controls="collapse11"
                        >
                          12.) If a farm has fields in Virginia and North Carolina, does each farm fall under its own 275 mile radius?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse11"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading11"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        Yes, the rule says not more than 275 miles from the farm that produced the food.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading p-3 mb-3"
                      role="tab"
                      id="heading12"
                    >
                      <h3 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse12"
                          aria-expanded="true"
                          aria-controls="collapse12"
                        >
                          13.) I am a produce farmer and also raise livestock and poultry – should that be included in the monetary
                          calculation of food?
                        </a>
                      </h3>
                    </div>
                    <div
                      id="collapse12"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading12"
                    >
                      <div className="panel-body px-3 mb-4">
                        <p>
                        Live animals that are sold with the intention of later
                        being processed to human or animal food should be considered
                        as food according to the FD&C Act. Animal feed, ingredients
                        and additives should also be included in the monetary
                        calculation of “food.”
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
