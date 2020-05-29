import React, { Component } from 'react';
import './css/FAQPage.css';

export default class Recall extends Component {

  render() {  
      return (     
          <div className="widget">
            <iframe frameborder="0" scrolling="no" src="http://www.cdc.gov/foodsafety/recalls/index.html?wn=FoodRecall&amp;wf=/foodsafety/recalls/&amp;wid=FoodRecall1&amp;mMode=widget&amp;mPage=&amp;mChannel=&amp;id=widgetBody&amp;instanceName=Food%20Recall%20Widget&amp;widgetMaxWidth=800px&amp;newsFeedType=xml&amp;newsFeed=https%3A%2F%2Fwww2c.cdc.gov%2Fpodcasts%2Fcreaterss.asp%3Fc%3D146&amp;widgetTitle=Food%20Recalls&amp;stylePath=/foodsafety/foodsafetygov/css/foodsafety-recall-widget.css?v&amp;class=cdc-widget-wrapper" id="FoodRecall1" name="FoodRecall1" title="Food%20Recalls" display="block" width="80%" height="600px" allowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
          
      )
  }
}

