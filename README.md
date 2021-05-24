# Install

yarn install

# Run Develop Mode

yarn dev

# Run deploy Mode

yarn build && yarn start

# Change Repository

To change the repository it is necessary to edit the src/env/config.ts file and change the repository property, to use mongo it is enough to assign the **"mongo"** value, for the mode without persistence we can assign the **"memory"** value

# Mongo DB

In the src/env/config.ts file we can also configure the connection parameters for the mongodb database
