const desc =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate praesentium, ea autem nobis laborum facilis suscipit tempora cumque ex optio nemo eum eligendi inventore eveniet explicabo molestiae dolores odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate praesentium, ea autem nobis laborum facilis suscipit tempora cumque ex optio nemo eum eligendi inventore eveniet explicabo molestiae dolores odio.'

const myProjects = [
  {
    id: 1,
    img: 'image/E-Commerce Website.png',
    title: 'E-Commerce(MERN)',
    tech: ['MongoDB', 'Express', 'React', 'Nodejs'],
    despription: (
      <div>
        <p>
          This is a customized ecommerce application. It uses a MERN stack and
          has the following functionalities:
        </p>
        <br />
        <ul>
          <li>
            Register, Login and Logout options for admin and user profiles
          </li>
          <li>User add to cart and place order functions </li>
          <li>Admin with user, orders and product management functions</li>
          <li>Shopping cart feature</li>
          <li>Product search feature</li>
          <li>Product review and ratings feature</li>
          <li>Checkout process feature</li>
          <li>Paypal and credit card intergration</li>
        </ul>
        <br />
        <p>
          This project is Full stack based. Besides MongoDB database, react,
          express and nodejs, other dependencies and tools were also used.
        </p>
        <br />
        <ul>
          <li>Redux to manage global state using actions and reducers</li>
          <li>React-Bootstrap UI library for UI design</li>
          <li>JSON web tokens authentication</li>
          <li>Custom error handling</li>
        </ul>
      </div>
    ),
    git: 'https://github.com/ludahz/ProShop',
    cloud: 'https://ludahsproshop.herokuapp.com',
  },
  {
    id: 2,
    img: 'image/Netflix-clone.png',
    title: 'Netflix Clone',
    tech: ['React', 'Redux', 'Firebase'],
    despription: (
      <p>
        This is a netflix clone project, built with react and redux. I used
        customized css for styling, no bootstrap or material UI frameworks. All
        images are fetched from external API and I am using axios and
        async/await functions to fetch the APIs.
      </p>
    ),
    git: 'https://github.com/ludahz/netflix-clone',
    cloud: 'https://netflix-clone-a8473.web.app',
  },
]

export default myProjects
