import React, { Component } from 'react'
import * as Surveyjs from "survey-react";
import "survey-react/survey.css";
import "./css/SurveyPage.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendPSRSurvey, sendPCRSurvey, sendPSurvey } from "../actions/surveyActions";


const surveyPSRJSON = {
    title: "Produce Safety Rule Status",
    pages: [{
        name: "page1",
        elements: [{
            type: "boolean",
            name: "question1",
            title: "Does your farm grow, harvest, pack or hold produce?",
            isRequired: true,
            labelTrue: "Yes",
            labelFalse: "No"
        }, {
            type: "boolean",
            name: "question2",
            visibleIf: "{question1} = true",
            title: "Average <$25,000 in annual produce sales?",
            labelTrue: "Yes",
            labelFalse: "No"
        }, {
            type: "boolean",
            name: "question3",
            visibleIf: "{question2} = false",
            title: "Produce a commodity identified as rarely consumed raw?",
            labelTrue: "Yes",
            labelFalse: "No"
        }, {
            type: "boolean",
            name: "question7",
            visibleIf: "{question3} = false",
            title: "Produce intended for commercial processing that adequate reduces pathogens?",
            labelTrue: "Yes",
            labelFalse: "No"
        }, {
            type: "boolean",
            name: "question8",
            visibleIf: "{question7} = false",
            title: "Farm have <$500,000 annual food sales AND majority of food is sold to a qualified end-user?",
            labelTrue: "Yes",
            labelFalse: "No"
        }, {
            type: "html",
            name: "question5",
            visible: false,
            visibleIf: "{question1} = false or {question2} = true",
            html: "Farm NOT covered."
        }, {
            type: "html",
            name: "question4",
            visible: false,
            visibleIf: "{question3} = true",
            html: "Product NOT covered."
        }, {
            type: "html",
            name: "question6",
            visibleIf: "{question7} = true",
            html: "Eligible for Exemption."
        }, {
            type: "html",
            name: "question9",
            visibleIf: "{question8} = true",
            html: "Qualified Exempt."
        }, {
            type: "html",
            name: "question10",
            visibleIf: "{question8} = false",
            html: "Covered by rule."
        }]
    }],
    showProgressBar: "top",
    clearInvisibleValues: "onHidden",
    maxTimeToFinish: 8
}

const surveyPCRJSON = {
  title: "Preventive Controls Rule Status",
  pages: [{
      name: "page1",
      elements: [{
          type: "boolean",
          name: "question1",
          title: "Do you manufacture, process, pack AND/OR hold any kind of food for human consumption?",
          labelTrue: "Yes",
          labelFalse: "No"
      }, {
          type: "boolean",
          name: "question3",
          visibleIf: "{question1} = true",
          title: "Do you only pack/hold food for human consumption on your farm?",
          labelTrue: "Yes",
          labelFalse: "No"
      }, {
          type: "boolean",
          name: "question4",
          visibleIf: "{question3} = false or {question6} = true",
          title: "I also process food: Dry/dehydrate, Label/package who unprocessed produce, and/or Treat whole produce to manipulate ripening.",
          labelTrue: "Yes",
          labelFalse: "No"
      }, {
          type: "boolean",
          name: "question5",
          visibleIf: "{question3} = false",
          title: "I also pack and hold off-farm.",
          labelTrue: "Yes",
          labelFalse: "No"
      }, {
          type: "boolean",
          name: "question6",
          visibleIf: "{question5} = true",
          title: "Is your off-farm packing operation majority owned by farmers who are providing the majority of the product packed and held there?",
          labelTrue: "Yes",
          labelFalse: "No"
      }, {
          type: "html",
          name: "question7",
          visibleIf: "{question6} = false or {question4} = false and {question3} = true and {question1} = true or {question6} = false",
          html: "Part 2 Preventive Controls Rule"
      }, {
          type: "html",
          name: "question2",
          visibleIf: "{question1} = false or {question3} = true or {question4} = true or {question6} = true",
          html: "NOT covered."
      }]
  }],
  clearInvisibleValues: "onHidden"
}

const surveyPJSON = {
  title: "Food Product Types Selector",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "question1",
          title: "Rarely Consumed Raw Products",
          choices: [
            "Asparagus",
            "Black Beans",
            "Great Northern Beans",
            "Kidney Beans",
            "Lima Beans",
            "Navy Beans",
            "Pinto Beans",
            "Garden Beets (roots and tops)",
            "Sugar Beets",
            "Cashews",
            "Sour Cherries",
            "Chickpeas",
            "Cocoa Beans",
            "Coffee Beans",
            "Collards",
            "Sweet Corn",
            "Cranberries",
            "Dates",
            "Dill (seeds and weed)",
            "Eggplants",
            "Figs",
            "Horseradish",
            "Hazelnuts",
            "Lentils",
            "Okra",
            "Peanuts",
            "Pecans",
            "Peppermint",
            "Potatoes",
            "Pumpkins",
            "Winter Squash",
            "Sweet Potatoes",
            "Water Chestnuts",
            "Barley",
            "Dent Corn",
            "Flint Corn",
            "Sorghum",
            "Oats",
            "Rice",
            "Rye",
            "Wheat",
            "Amaranth",
            "Quinoa",
            "Buckwheat",
            "Oilseeds"
          ]
        },
        {
          type: "checkbox",
          name: "question2",
          title: "Raw Agricultural Commodity Products",
          choices: [
            "Almonds",
            "Apples",
            "Apricots",
            "Apriums",
            "Artichokes, Globe-type",
            "Asian Pears",
            "Avocados",
            "Babacos",
            "Bananas",
            "Belgian Endive",
            "Blackberries",
            "Blueberries",
            "Boysenberries",
            "Brazil Nuts",
            "Broad Beans",
            "Broccoli",
            "Brussels Sprouts",
            "Burdock",
            "Cabbages",
            "Chinese Cabbages (boy choy, mustard, and napa)",
            "Cantaloupes",
            "Carambolas",
            "Carrots",
            "Cauliflower",
            "Celeriac",
            "Celery",
            "Chayote Fruit",
            "Cherries (sweet)",
            "Chestnuts",
            "Chicory (roots and tips)",
            "Citrus (clementine, grapefruit, lemon, limes, mandarin, oranges, tangerines, tangors, and uniq fruit)",
            "Cowpea Beans",
            "Cress-garden",
            "Cucumbers",
            "Curly Endive",
            "Currants",
            "Dandelion Leaves",
            "Fennel-florence",
            "Garlic",
            "Genip",
            "Gooseberries",
            "Grapes",
            "Green Beans",
            "Guavas",
            "Herbs (basil, chives, cilantro, oregano, parsley)",
            "Honeydews",
            "Huckleberries",
            "Jerusalem Artichoke",
            "Kale",
            "Kiwifruit",
            "Kohlrabi",
            "Kumquads",
            "Leek",
            "Lettuce",
            "Lychees",
            "Macadamia Nuts",
            "Mangos",
            "Other Melons (canary, crenshaw, and persian)",
            "Mulberries",
            "Mushrooms",
            "Mustard Greens",
            "Nectarines",
            "Onions",
            "Papayas",
            "Parsnips",
            "Passion Fruit",
            "Peaches",
            "Pears",
            "Peas",
            "Peas-pigeon",
            "Peppers",
            "Pine Nuts",
            "Pineapples ",
            "Plantains",
            "Plum",
            "Plumcots",
            "Quince",
            "Radishes",
            "Raspberries",
            "Rhubarb",
            "Rutabagas",
            "Scallions",
            "Shallots",
            "Snow Peas",
            "Soursop",
            "Spinach",
            "Sprouts",
            "Strawberries",
            "Summer Squash (such as patty pan, yellow and zucchini)",
            "Sweetsop",
            "Swiss Chard",
            "Taro",
            "Tomatoes",
            "Turmeric",
            "Turnips (roots and tops)",
            "Walnuts",
            "Watercress",
            "Watermelons",
            "Yams",
            "Mixes of intact fruits and vegetables (such as fruit baskets)"
          ]
        },
        {
          type: "checkbox",
          name: "question3",
          title: "Value-added Goods",
          choices: [
            "Kombucha",
            "Refrigerated dips, spreads, dressings, and salads",
            "Jams, Preserves, Jellies, and Fruit Butters",
            "Packaged Meals",
            "Fermented Vegetables"
          ]
        }
      ],
      title: "Please Select all of the produce you grow and/or sell"
    }
  ]
}

class Survey extends Component {
  constructor(props) {
    super(props);
    this.sendDataToPSRServer = this.sendDataToPSRServer.bind(this);
    this.sendDataToPCRServer = this.sendDataToPCRServer.bind(this);
    this.sendDataToPServer = this.sendDataToPServer.bind(this);
    this.state = {
      errors: {}
    }
  }

  sendDataToPSRServer(survey) {
      const surveyData = {
      	userID: "",
      	growsProduce: survey.data.question1,
      	lessThan25k: survey.data.question2,
      	commodityRareRaw: survey.data.question3,
      	reducePathogens: survey.data.question7,
      	lessThan500k: survey.data.question8
      }
      this.props.sendPSRSurvey(surveyData);
  }

  sendDataToPCRServer(survey) {
      const surveyData = {
      	userID: "",
      	manHumanConsumption: survey.data.question1,
      	packHumanConsumption: survey.data.question3,
      	processFood: survey.data.question4,
      	packOffFarm: survey.data.question5,
      	majorityFarmers: survey.data.question6
      }
      this.props.sendPCRSurvey(surveyData);
  }

  sendDataToPServer(survey) {
      const surveyData = {
        userID: "",
      	rarelyRaw: survey.data.question1,
        rawCommodity: survey.data.question2,
        valueAdded: survey.data.question3
      }
      this.props.sendPSurvey(surveyData);
      this.props.history.push("/profile");
  }

  render() {
      var modelPSR = new Surveyjs.Model(surveyPSRJSON);
      var modelPCR = new Surveyjs.Model(surveyPCRJSON);
      var modelP = new Surveyjs.Model(surveyPJSON);
      return (
        <div>
          <div id="surveyDirections">
            <p>
              <b>Directions:</b> There are three surveys to complete. The first two surveys
              will help determine whether or not you are covered by the Produce
              Safety Rule and Preventive Controls Rule. The third survey simply asks
              for what produce you grow/sell as a farmer/vendor. Once you complete
              all three surveys, navigate to your profile page for your personalized
              resource list and statuses.
            </p>
          </div>
          <div id="surveyGeneral">
            <Surveyjs.Survey model={modelPSR} onComplete={this.sendDataToPSRServer}/>
            <Surveyjs.Survey model={modelPCR} onComplete={this.sendDataToPCRServer}/>
            <Surveyjs.Survey model={modelP} onComplete={this.sendDataToPServer}/>
          </div>
        </div>
      )
  }
}

Survey.propTypes = {
  sendPSRSurvey: PropTypes.func.isRequired,
  sendPCRSurvey: PropTypes.func.isRequired,
  psrsurv: PropTypes.object.isRequired,
  pcrsurv: PropTypes.object.isRequired,
  psurv: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  psrsurv: state.psrsurv,
  pcrsurv: state.pcrsurv,
  psurv: state.psurv,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { sendPSRSurvey, sendPCRSurvey, sendPSurvey }
)(withRouter(Survey));
