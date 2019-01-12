const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// To Do List / Faux data store
let toDoList = [
  {
    'id':'1',
    'name':'Boiling Dandelions',
    'date':'2019-01-13T01:00:00.000Z',
    'address':'42 Wallaby Way, Sydney',
    'district':'13',
    'types':['cooking'],
    'mentor':'1',
    'attendees':['2','3'],
    'description':'Did you know that you can eat dandelions? Let\'s make a delicious dandelion soup!'
  },
  {
    'id':'2',
    'name':'Garden Zuchinis',
    'date':'2019-01-13T02:00:00.000Z',
    'address':'2203 NE Oregon St, Portland, OR 97232',
    'district':'Mr. Roger\'s Neighborhood',
    'types':['kids','gardening'],
    'mentor':'2',
    'attendees':['1','4'],
    'description':'You get a zuchini! You get a zuchini! Everybody gets a zuchini!'
  }
];
    
let memberList = [
  {
    'id':'1',
    'name':'Dr. P Sherman',
    'email':'psherman@gmail.com'
  },
  {
    'id':'2',
    'name':'Nemo Clownfish',
    'email':'nemo@gmail.com'
  },
  {
    'id':'3',
    'name':'Mr. Roger',
    'email':'roger@gmail.com'
  },
  {
    'id':'4',
    'name':'Snuffleupagus',
    'email':'snuffleupagus@gmail.com'
  }
];

// API calls
app.get('/api/hello', (req, res) => {
  let events = replaceMemberIdsWithNames(toDoList);
  res.send({ events });
});

app.get('/api/events', (req, res) => {
  console.log(req.query);
  let district = req.query.district;
  let newEventList = [];
  for(event in toDoList) {
      if(event.district == district) {
        newEventList.push(event);
      }
  }
  let eventList = replaceMemberIdsWithNames(newEventList);
  res.send({ eventList });
});
  
app.post('/api/members', (req, res) => {
  console.log(req.body);
  memberList.put(req.body.post);
  res.send('Member added!');
});
  
app.get('/api/members', (req, res) => {
  res.send({ memberList });
});

app.post('/api/addItem', (req, res) => {
  // displays in the terminal
  console.log(req.body);
  toDoList.push(req.body.post);
  res.send('Event added!');
});
  
app.post('/api/events/:eventId(\d+)/attendees', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  for(event in events) {
    if(event.id = req.params.eventId) {
      event.attendees.push(req.body.post)
      break;
    }
  }
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

function replaceMemberIdsWithNames(events) {
  let eventList = [];
  for(event in events) {
    let newEventItem = {}
    newEventItem.name = event.name;
    newEventItem.date = event.date;
    newEventItem.address = event.address;
    newEventItem.district = event.district;
    newEventItem.types = event.types;
    newEventItem.description = event.description;
    let mentorId = event.mentor;
    
    let attendees = [];
    for(member in memberList) {
      if(member.id == mentorId) {
        newEventItem.mentor = member.name;
      }
      if(event.attendees != undefined && (event.attendees).includes(member.id)) {
        attendees.push(member.name);
      }
    }
    
    newEventItem.attendees = attendees;
  }
  
  return events;
}
