const RosbagDeserializer = require('./build/Release/rosbags2_nodejs_wrapper.node');

const deserializer = new RosbagDeserializer.Rosbag2Wrapper();
console.log("test call to deserializer", deserializer.deserializeMessage("test"));

module.exports = RosbagDeserializer;