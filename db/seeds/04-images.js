
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        { id: 1, 
          name: 'family pic',
          publicId: 'test-upload/hmwvnnahrrjl2e4jqjed.jpg',
          date: 'September 2018',
          size: '20 x 35',
          description: 'Like many type systems, GraphQL supports interfaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.'
        },
        { id: 2, 
          name: 'tree pic',
          publicId: 'test-upload/17871572293_7e1af1d66d_o_vmhklx.jpg',
          date: 'October 2018',
          description: 'GraphQL supports interfaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.'
        },
        { id: 3, 
          name: 'portrait of snow',
          publicId: 'test-upload/fwcfa5zvhei2gdj0jeol.jpg',
          date: 'July 2018',
          size: '10 x 10',
        },
        { id: 4, 
          name: 'basic pic',
          publicId: 'test-upload/cm7gaqynqpi90qwdgitj.jpg',
          date: 'September 2017',
          description: 'Likeaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.'
        },
        { id: 5, 
          name: 'airplane pic',
          publicId: 'test-upload/ldtga7vmih4h4ydivxro.jpg',
          date: 'Jan 2019',
          description: 'It is awesome.'
        },
        { id: 6, 
          name: 'car pic',
          publicId: 'test-upload/itqj9r8nhtcx6cnnbekn.jpg',
          date: 'Dec 18',
          description: 'For example, you could have an interface Character that represents any character in the Star Wars trilogy:.'
        }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('images_id_seq', (SELECT MAX(id) FROM images));`
      )
    })
};
