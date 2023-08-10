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


## 🛠 Compatibility with Older MySQL Versions

If your database setup involves an older version of MySQL that isn't compatible with the `mysql2` driver, don't fret! Here's a guide to ensure everything runs smoothly:

### Step-by-Step Guide:

1. **Downgrade Sequelize**:
   - Newer Sequelize versions lean heavily on the `mysql2` driver. For compatibility with the `mysql` driver, you'll need to roll back to Sequelize version 3.
   - Command to run:
     ```bash
     npm install sequelize@3 mysql --save
     ```

2. **Tweak Your Configuration**:
   - Make sure your Sequelize configuration is set to use the `mysql` dialect.
     ```json
     {
       "development": {
         "dialect": "mysql",
         ...
       }
     }
     ```

3. **Documentation Dive**:
   - With Sequelize v3 in your toolkit, it's crucial to stick to the [Sequelize v3 documentation](https://sequelize.org/v3/). Remember, this version has its own set of APIs and features.

4. **Lock It In**:
   - Consistency is key. Ensure you're using a `package-lock.json` or `yarn.lock` to keep dependency versions consistent across all setups.

### 🚀 Pro Tip:

While using an older Sequelize version might seem like stepping back, it's essential to weigh the benefits against the drawbacks. Newer features and fixes might be tempting, but always prioritize what's best for your project setup.


## 🤝 Contribute

Your contributions are always welcome! Feel free to improve the template and send us a pull request.
