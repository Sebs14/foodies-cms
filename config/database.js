module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', process.env.DATABASE_HOST_URL),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'foodies_mcqa'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '0LhGeL8CFmSQHORl5MD3srv1dTsyyYK4'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
