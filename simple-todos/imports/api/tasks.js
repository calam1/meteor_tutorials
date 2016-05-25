// this is basically the model/database
// import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
