const obj1 = {
  name: 'md ashikur',
  roll: 2015233009,
  subject: {
    subjectName: 'math',
    subjectCode: 234,
  },
};

// console.log(typeof obj1.subject);

const person = [
  {
    name: 'rahim',
    age: 22,
    friends: ['rahim,karim,jabbar'],
  },
  {
    name: 'rahim2',
    age: 22,
    friends: ['rahim,karim,jabbar'],
  },
  {
    name: 'rahim3',
    age: 22,
    friends: ['rahim,karim,jabbar'],
  },
];

// console.log(person.slice(1, 2));

const dreamGirl = [
  {
    sokina: {
      name: 'bbu',
      height: '5.4',
      family: [{ father: 'rock', mother: 'shila', sister: 'chinki' }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: 'https://www.facebook.com/',
            followers: '12545',
            status: 'single',
            friendsList: [{ name: 'rofik' }, undefined],
          },
        },
        { instagram: 'https://www.instagram.com/' },
      ],
    },
  },
];

console.log(dreamGirl[0].sokina.contactInfo[1].instagram);
