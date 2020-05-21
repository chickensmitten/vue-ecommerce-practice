debugger // eslint-disable-line

Instructions on how to deploy to Netlify:

- yarn build
- netlify deploy
# you may need to login
- netlify will ask if it is a new project. yes
- netlify will ask for the team name.
- netlify will ask what is the name of the folder to deploy the code. The answer is dist
- then there are issues where URL might be broken when there is no forward slash admin routes for the admin component. We are relying the router to switch between our pages and components.
- there are draft URLs where you can check the website working fine.
- netlify deploy --prod #to run it in production

