
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        { id: 1, 
          name: 'family pic',
          location: '/sakdfjkaf',
          date: 'September 2018',
          size: '20 x 35',
          description: 'Like many type systems, GraphQL supports interfaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.'
        },
        { id: 2, 
          name: 'tree pic',
          location: '/sakdssf',
          date: 'October 2018',
          description: 'GraphQL supports interfaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.'
        },
        { id: 3, 
          name: 'portrait of snow',
          location: '/sfdkdfjkaf',
          date: 'July 2018',
          size: '10 x 10',
        },
        { id: 4, 
          name: 'basic pic',
          location: '/zcxfjkaf',
          date: 'September 2017',
          description: 'Likeaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.'
        },
        { id: 5, 
          name: 'airplane pic',
          location: '/sadsdajkaf',
          date: 'Jan 2019',
          description: 'It is awesome.'
        },
        { id: 6, 
          name: 'car pic',
          location: '/ssadfasf',
          date: 'Dec 18',
          description: 'For example, you could have an interface Character that represents any character in the Star Wars trilogy:.'
        },
        { id: 7, 
          name: 'painting #21321',
          location: '/ssadfasf',
        },
        { id: 8, 
          name: 'painting #9897',
          location: '/adfssdasda',
        },
        { id: 9, 
          name: 'painting #91232897',
          location: '...',
        },
        { id: 10, 
          name: 'hookum',
          location: 'wildebeast',
          date: 'Saturday',
          description: 'hokey pokey'
        },
        { id: 11, 
          name: 'bitter book feeling',
          location: 'sancho panzo',
          date: 'Future',
          description: 'it is like a poem'
        },
        { id: 12, 
          name: 'finally',
          location: 'it is a feature of life',
          date: 'October 6, 2018',
          description: 'it is a feature of life'
        },

      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('images_id_seq', (SELECT MAX(id) FROM images));`
      )
    })
};
