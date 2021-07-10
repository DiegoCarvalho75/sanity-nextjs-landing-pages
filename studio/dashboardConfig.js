export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ea2a43455b47aa6d08b513',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7xyggabn',
                  apiId: '153fa8f2-bf5f-45de-8b95-862e23d1870e'
                },
                {
                  buildHookId: '60ea2a43af97d6b9f074621e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iwtwo4zk',
                  apiId: '5817a5b2-7d24-48d3-9ad2-be0b5072ae38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Caballero75/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iwtwo4zk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
