export function loadLists() {
  return [
    { 
      title: 'Task', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Complete Module from lecture 01 to lecture 10 in NodeJs',
          labels: ['#7159c1'],
         
        },
        {
          id: 2,
          content: 'Take protine and breakfast in time',
          labels: ['#7159c1'],
          
        },
        {
          id: 3,
          content: 'Complete client requiements in code',
          labels: ['#7159c1'],
          
        },
        {
          id: 4,
          content: 'Complete Free-Lancing Work',
          labels: ['#54e1f7'],
          
        },
        {
          id: 5,
          content: 'Gym Sessions',
          labels: ['#54e1f7'],
          
        },
      ]
    },
    { 
      title: 'In Progress', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Fixing defects',
          labels: [],
          
        }
      ]
    },
    { 
      title: 'completed', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'catch up with onsite flks  ',
          labels: ['#7159c1'],
          
        },
        {
          id: 8,
          content: 'complete diet session',
          labels: ['#54e1f7'],
          
        },
        {
          id: 9,
          content: 'shopping',
          labels: [],
        }
      ]
    },
    { 
      title: 'Paused', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'searching for job',
          labels: [],
        },
        {
          id: 12,
          content: 'taking milk',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Playing video Games',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}