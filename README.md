# After App

Emo app yolo

### Installing

Install the React Native CLI and the Amplify Multienv CLI:

```
npm i -g react-native-cli
npm i expo-cli --global
npm i -g @aws-amplify/cli@multienv
```

### Create AWS credentials:

To provision the backend:

```
amplify init
```

You will be asked to select an environment, select _dev_ to start with.

Choose your editor.

You will be asked to setup a new user.

```
amplify push
amplify codegen add
```

### Running the app:

Install the node modules:

```
yarn install
```

To run Expo

```
expo start
```

### Built With

- [AWS Amplify](https://aws-amplify.github.io/) - to manage users, login and app data
- [Expo](https://expo.io/) - For running and deploying react native

### Authors

- **Matilda Rutherford** - _Design and Front End Development_ - [Matilda Rutherford](https://github.com/matildarutherford)
- **Kara La'Brooy** - _Backend Development and AWS integration_ - [Kara La'Brooy](https://github.com/klabrooy)

