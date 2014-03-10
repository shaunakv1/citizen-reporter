##About Citizen Reporter

**Chaos** - a lack of intelligible pattern or combination

**Citizen-Reporter** is built crow-sourced solution to understand and visualize patterns that could lead to more efficient situational and emergency management. Our incident reporting app is meant to be easy to use. Very easy. One simple click reports incidents to our operations dashboard telling it that an event has been witnessed. When more users identify a similar event near you, the incident is automatically voted up simply by proximity. Responding to an event is always an investment of resources and safety. Using social media, personnel can filter through tweets near incident reports to help understand and interpret the situation. Once an event is determined to be in need of emergency response SMS messages can be sent to the appropriate staff.

###Fork on [GitHub](https://github.com/shaunakv1/citizen-reporter)

##Key Features

* County of Riverside assets are identified with each incident ([Riverside Public Sites Service](http://www.rctlma.org/siteadmin/rest/services/Public/Public_Sites/FeatureServer)).
* Build using **ESRI’s JavaScript API**
* Social feed using **Geofeedia**
* SMS messaging using **Twilio**
* Email messaging using **SendGrid** ..almost :(

This app was built for the 2014 ESRI Dev Summit Hackathon



##How to use
The application has two parts to it **Report Incident** which is crowd sourced and **Dashboard** which is used for monitoring the overall city.


###Incident Reporting

From the 'Report Incident' page users will be able to select the hazard events that they observe in the immediate surroundings and report them.

* Select an event type
* Click 'report' button
* Say 'allow geolocation' when prompted
* As multiple users report the same event, the event is up-voted

###Operational Dashboard

*Start by clicking on 'view' for one of the reported incident
*The map will show the incident in red, surrounded by city public places effected by it
*The social media feed shows all the current tweets with 1 mile of that event.
*Clicking Verify for an event will confirm the validity of the event and send sms to all registered first responders
*Events are automatically upvoted as same ones get reported by users in the event's location
