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
                  buildHookId: '5e711955e56cf63dcd4d4db9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p452zxb7',
                  apiId: 'd2c08e70-35d7-4811-a0bc-4813d0997781'
                },
                {
                  buildHookId: '5e7119567f682417bbbffb50',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nzx2mw3w',
                  apiId: 'a60b63b0-7e4a-4ea6-86bd-ee70045e5391'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SkoebaSteve/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nzx2mw3w.netlify.com', category: 'apps'}
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
