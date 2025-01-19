# Tiny-Neural-Network
A neural network in under 800 bytes

## Usage
Probably best not to actually use this code, however, for those who are interested, I will explain how to use it.

You will need to define training data for your network. Training data will simply be stored in an array of objects. Each object should contain attributes `i`, the input data, and `e`, the expected result. In the following example, we will define the training data for XOR.
```js
const trainingData = [
  {i: [1, 1], e: [1]},
  {i: [1, 0], e: [0]},
  {i: [0, 1], e: [0]},
  {i: [0, 0], e: [1]},
];
```

Next, we will define our network. The network creation function `m` takes 3 variables: `layers`, `learnRate`, and `momentum`. The layers will be passed in as an array, where the number of indicies indicate the number of layers (input, hidden layers, and output), and the value indicates the numbers of nodes in the given layer.
```js
let myNetwork = m([2, 3, 1], 0.3, 0.1);
```

Next, we will train the network on our training data. The training function takes 3 variables: `network`, `trainingData`, and `iterations` (hopefully self-explanitory enough).
```
myNetwork = e(myNetwork, trainingData, 10000);
```

Now we run our neural network and log the output. Simple as that.
```
console.log(`[1, 1]=${g(myNetwork, [1, 1])}`);
console.log(`[1, 0]=${g(myNetwork, [1, 0])}`);
console.log(`[0, 1]=${g(myNetwork, [0, 1])}`);
console.log(`[0, 0]=${g(myNetwork, [0, 0])}`);
```
