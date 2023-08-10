# Fastify MVC Template 🚀

Elevate your web development experience with our Fastify MVC Template. Crafted for developers who seek efficiency without compromising on elegance.

## 🌟 Features

- **Fastify-Powered**: Enjoy the performance and speed of Fastify.
- **MVC Structure**: Organized, scalable, and maintainable codebase.
- **Sequelize ORM**: Simplify database operations and ensure type safety.
- **Ready-to-Use Scripts**: Jumpstart your development with our predefined npm scripts.

## 🚀 Quick Start

1. **Clone & Install**:

   ```bash
   git clone https://github.com/flyyuan/fastify-mvc-template.git
   cd fastify-mvc-template
   npm install
   ```

2. **Configure & Run**:

   Update `config/config.json` with your database details and:

   ```bash
   npm start
   ```

3. **Develop & Enjoy**:

   Visit `http://localhost:3000` and start building!

## 🛠️ Commands at Your Fingertips

- `npm start`: 🌐 Launch your app.
- `npm run dev`: 🔧 Dev mode with nodemon.
- `npm run migrate`: 📦 Apply database migrations.
- `npm run seed`: 🌱 Seed your database with initial data.

## 💡 Why Choose Us?

- **Efficiency**: Spend more time coding and less time setting up.
- **Community**: Join a growing community of passionate developers.
- **Support**: Regular updates and prompt support.

## Compatibility with Older Versions of MySQL

If you're working with an older version of MySQL that doesn't support the `mysql2` driver, you'll need to make some adjustments to ensure compatibility.

### Steps:

1. **Downgrade Sequelize**: The newer versions of Sequelize primarily support the `mysql2` driver. To use the `mysql` driver, you'll need to downgrade Sequelize to version 3.

   Install Sequelize v3 and the `mysql` driver with the following command:

   ```bash
   npm install sequelize@3 mysql --save
   ```

2. **Update Configuration**: Ensure that your Sequelize configuration specifies `mysql` as the dialect.

   ```json
   {
     "development": {
       "dialect": "mysql",
       ...
     }
   }
   ```

3. **Documentation**: If you decide to use Sequelize v3, it's essential to refer to the [Sequelize v3 documentation](https://sequelize.org/v3/). This version has different APIs and features compared to the newer versions.

4. **Locking Dependencies**: It's a good practice to use a `package-lock.json` or `yarn.lock` file in your project. This ensures that the versions of your dependencies remain consistent across all environments.

### Note:

Using an older version of Sequelize might mean missing out on newer features and fixes. Always weigh the pros and cons before deciding on a version.


## 🤝 Contribute

Your contributions are always welcome! Feel free to improve the template and send us a pull request.
