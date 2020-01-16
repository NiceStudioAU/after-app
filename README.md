# After App

Emo app yolo

### Installing

Install the React Native CLI and the Amplify Multienv CLI:

```
npm i -g react-native-cli
npm i -g @aws-amplify/cli@multienv
```

Install the node modules:

```
yarn install
```

### Create AWS credentials:

To provision the backend:

```
amplify init
```

You will be asked to select an environment, select _dev_ to start with.

```
amplify push
amplify codegen add
```

## Running the app:

To run Expo
`expo start`

## Built With

- [AWS Amplify](https://aws-amplify.github.io/) - to manage users, login and app data
- [Expo](https://expo.io/) - For running and deploying the react native

## Authors

- **Matilda Rutherford** - _Design and Front End Development_ - [Matilda Rutherford](https://github.com/matildarutherford)
- **Kara La'Brooy** - _Backend Development and AWS integration_ - [Kara La'Brooy](https://github.com/klabrooy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
