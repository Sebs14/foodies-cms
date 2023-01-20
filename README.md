# Foodies CMS 🍔🍟

Foodies it is an application where you can look for restaurant locations and food that
it is listed on the menu, you can filter locations by type "takeout" or "delivery", and
also you can filter the menu.

# 🚀 Getting started with Strapi and foodies

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```
### `download the dump and uploads`

Right now the project it is empty so you'll have to download a dump file wich we are going to import later to this project and also you´ll have to download a file called uploads to get the images of this project.
in order to download this files go to this [drive](https://drive.google.com/drive/folders/1EivZFmZrf668ONfUQAt3axhBe1SAc9XO?usp=share_link) file and download them

### `import Data Base`

Once you run the project on developer mode you need to load and import the database, for this
we are going to use the next command line:


```
npx strapi import -f ../foodiesDB.tar.gz 
```
notice that you need to place the root of the file that you´re importing into the project, on this example
whe have the dump file one file back of the root of our project!

### `export Data Base`
And if you were asking, yes, this project can also export this database from just a command line,
lets take a look on how to do it:

```
npx strapi export --file ../foodiesDB --no-encrypt 
```
ok, on this command line we use the flag --file in order to give a name to the file we are 
exporting, and also we can see the --no-encrypt flag and it is basically used to not encrypt the file!

# Wanted to continue with foodies?

in order to see how this project works on the foodies App follow me and check the feature branch on this 
other [repository](https://gitlab.com/elaniin2/elaniin-foodies-web2/-/tree/feature/dynamic-content)
## Screenshots

![foodies mockup](https://foodies-1spdz3nbb-elaniin-foodies-web.vercel.app/assets/mockup.4e13a76d.png)


## Support

For support, email sebastian.flores@elaniin.com.
