import React from "react";
import Task from "./Task/Task";

const volunteerTask = [
  {
    id: "1",
    name: "Child Support",
    pic: "childSupport.png",
  },

  {
    id: "2",
    name: "Animal  Shelter",
    pic: "animalShelter.png",
  },

  {
    id: "3",
    name: "Bird House",
    pic: "babySit.png",
  },

  {
    id: "4",
    name: "Good Student",
    pic: "cleanWater.png",
  },

  {
    id: "5",
    name: "Good education",
    pic: "clearnPark.png",
  },

  {
    id: "6",
    name: "Child Support",
    pic: "clothSwap.png",
  },

  {
    id: "7",
    name: "Child Support",
    pic: "driveSafety.png",
  },

  {
    id: "8",
    name: "Child Support",
    pic: "extraVolunteer.png",
  },

  {
    id: "9",
    name: "Child Support",
    pic: "foodCharity.png",
  },

  {
    id: "10",
    name: "Child Support",
    pic: "goodEducation.png",
  },

  {
    id: "11",
    name: "Child Support",
    pic: "ITHelp.png",
  },

  {
    id: "12",
    name: "Child Support",
    pic: "libraryBooks.png",
  },

  {
    id: "13",
    name: "Child Support",
    pic: "musicLessons.png",
  },

  {
    id: "14",
    name: "Child Support",
    pic: "newBooks.png",
  },

  {
    id: "15",
    name: "Child Support",
    pic: "refuseShelter.png",
  },

  {
    id: "16",
    name: "Child Support",
    pic: "riverClean.png",
  },

  {
    id: "17",
    name: "Child Support",
    pic: "schoolSuffiles.png",
  },

  {
    id: "18",
    name: "Child Support",
    pic: "studyGroup.png",
  },

  {
    id: "19",
    name: "Child Support",
    pic: "stuffedAnimals.png",
  },

  {
    id: "20",
    name: "Child Support",
    pic: "voteRegister.png",
  },
];

const Home = () => {
  return (
    <div>
      <div>
        <h1>This is Home</h1>
      </div>

      <div className="container">
        <div className="row">
          {volunteerTask.map((task) => (
            <Task task={task} key={task.id}></Task>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
