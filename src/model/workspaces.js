export const getDefaultWorkspace = (id) => ({
  id,
  title: 'New',
  layout: {
    type: 'column',
    basis: 0,
    children: []
  }
});

export const workspaces = [
  {
    id:'test',
    title: 'Options Pricer',
    layout: {
      type: 'column',
      basis: 100,
      children: [{
        id: 'section-1'
      },]
    }
  },
  {
    id: 'w1',
    title: 'Single Stocks',
    layout: {
      id: 'container-1',
      type: 'column',
      basis: 70,
      children: [
        {
          id: 'section-1',
          children: [
            {
              id: 'container-2',
              type: 'row',
              basis: 30,
              children: [
                {
                  id: 'section-3'
                },
                {
                  id: 'section-4'
                }  
              ]
            }  
          ]
        },
        {
          id: 'section-2'
        },
      ]
    }
  },
  {
    id: 'w2',
    title: 'Indices',
    layout: {
      type: 'row',
      basis: 60,
      children: [
        {
          id: 'section-1',
          children: [
            {
              type: 'column',
              basis: 70,
              children: [
                {
                  id: 'section-3'
                },
                {
                  id: 'section-4'
                }  
              ]
            }  
          ]
        },
        {
          id: 'section-2'
        },
      ]
    }
  }
];