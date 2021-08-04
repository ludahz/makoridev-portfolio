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
          <li>Login and Logout options for admin and user profiles</li>
          <li>User add to cart and place order functions </li>
          <li>Admin with user and product management functions</li>
          <li>Shopping cart feature</li>
          <li>Product search feature</li>
          <li>Product review and ratings feature</li>
          <li>Checkout process feature</li>
          <li>Paypal and credit card intergration</li>
        </ul>
      </div>
    ),
    git: 'https://github.com',
    cloud: 'https://ludahsproshop.herokuapp.com',
  },
]

export default myProjects
