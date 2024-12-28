import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddQuestions from "../_components/AddQuestions";
import QuestionList from "../_components/QuestionList";

const Questions = () => {
  return (

    <div className="bg-gradient-to-r from-teal-200 to-green-200 h-screen">
      {/* rest of your code here */}
      <div className="p-10" >
      <h2 className="font-bold text-2xl" >Unlock Your Interview Potential</h2>
      <h2 className="text-gray-500" >Comprehensive Question bank, tailored to your needs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5" >
        <AddQuestions/>
      </div>

      <QuestionList/>
    </div>
    </div>
    
  );
};

export default Questions;