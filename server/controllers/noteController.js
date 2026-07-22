const Note = require("../models/Note");
const { generateSummary, generateQuiz } = require("../services/aiService");


// =========================
// GET ALL NOTES
// =========================
exports.getNotes = async (req, res) => {
  try {

    const notes = await Note.find()
      .sort({ createdAt: -1 });

    res.json(notes);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};




// =========================
// GET SINGLE NOTE
// =========================
exports.getNote = async (req, res) => {

  try {

    const note = await Note.findById(req.params.id);


    if (!note) {

      return res.status(404).json({
        error: "Note not found"
      });

    }


    res.json(note);


  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};





// =========================
// CREATE NOTE
// =========================
exports.createNote = async (req, res) => {

  try {


    const {
      title,
      subject,
      content
    } = req.body;



    if (!title || !subject || !content) {

      return res.status(400).json({

        error:
        "Title, Subject and Content are required"

      });

    }



    const note = await Note.create({

      title,
      subject,
      content

    });



    res.status(201).json(note);



  } catch(error){


    res.status(500).json({

      error:error.message

    });


  }

};






// =========================
// UPDATE NOTE
// =========================
exports.updateNote = async(req,res)=>{

try{


const updated = await Note.findByIdAndUpdate(

req.params.id,

req.body,

{
 new:true,
 runValidators:true
}

);



if(!updated){

return res.status(404).json({

error:"Note not found"

});

}



res.json(updated);



}catch(error){


res.status(500).json({

error:error.message

});


}

};






// =========================
// DELETE NOTE
// =========================
exports.deleteNote = async(req,res)=>{


try{


const deleted =
await Note.findByIdAndDelete(req.params.id);



if(!deleted){

return res.status(404).json({

error:"Note not found"

});

}



res.json({

success:true,

message:"Note deleted successfully"

});



}catch(error){


res.status(500).json({

error:error.message

});


}


};






// =========================
// AI SUMMARY
// =========================
exports.generateNoteSummary = async(req,res)=>{


try{


const note =
await Note.findById(req.params.id);



if(!note){

return res.status(404).json({

error:"Note not found"

});

}



const summary =
await generateSummary(note.content);



note.summary = summary;



await note.save();



res.json(note);



}catch(error){


console.log(error);


res.status(500).json({

error:error.message

});


}


};








// =========================
// AI QUIZ GENERATOR
// =========================
exports.generateNoteQuiz = async(req,res)=>{


try{


const note =
await Note.findById(req.params.id);



if(!note){

return res.status(404).json({

error:"Note not found"

});

}



const quiz =
await generateQuiz(note.content);



note.quiz = quiz;



await note.save();



res.json({

message:"Quiz generated successfully",

quiz:quiz

});



}catch(error){


console.log(error);


res.status(500).json({

error:error.message

});


}


};

// =========================
// DASHBOARD STATS
// =========================

exports.getStats = async(req,res)=>{

try{


const totalNotes =
await Note.countDocuments();



const subjects =
await Note.distinct("subject");



const summaryCount =
await Note.countDocuments({
    summary:{
        $exists:true,
        $ne:""
    }
});



const quizCount =
await Note.countDocuments({
    quiz:{
        $exists:true,
        $ne:[]
    }
});




res.json({

    totalNotes,

    totalSubjects: subjects.length,

    totalSummaries: summaryCount,

    totalQuizzes: quizCount

});



}catch(error){


res.status(500).json({

error:error.message

});


}


};

// =========================
// RECENT NOTES
// =========================

exports.getRecentNotes = async(req,res)=>{

try{


const notes = await Note.find()

.sort({
  createdAt:-1
})

.limit(5);



res.json(notes);



}catch(error){


res.status(500).json({

error:error.message

});


}

};