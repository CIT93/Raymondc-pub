class StudyEvaluator {
    constructor(
        first,
        last,
      currentStage,
      booksStudied,
      messagesStudied,
      oneYearMeb,
      completedFS,
      activeInDept,
      belongsToCell
    ) {
        this.first = first;
      this.last = last;
      this.currentStage = currentStage;
      this.booksStudied = booksStudied;
      this.messagesStudied = messagesStudied;
      this.oneYearMeb = oneYearMeb;
      this.completedFS = completedFS;
      this.activeInDept = activeInDept;
      this.belongsToCell = belongsToCell;
  
      this.qualified = this.checkQualification();
      this.studyGrade = this.calculateStudyGrade();
  
      if (this.qualified) {
        this.stageInfo = this.evaluateStageProgress();
      } else {
        this.stageInfo = {
          comment: "You are not qualified for the study program.",
        };
      }
  
      this.totalScore = this.studyGrade;
    }
  
    checkQualification() {
      return (
        this.oneYearMeb === "true" &&
        this.completedFS === "true" &&
        this.activeInDept === "true" &&
        this.belongsToCell === "true"
      );
    }
  
    calculateStudyGrade() {
      return this.booksStudied * 5 + this.messagesStudied * 5;
    }
  
    getStages() {
      return [
        {
          stage: "first",
          minBooks: 2,
          minMessages: 2,
          minGrade: 30,
          nextStage: "Stage 2",
        },
        {
          stage: "second",
          minBooks: 4,
          minMessages: 4,
          minGrade: 40,
          nextStage: "Stage 3",
        },
        {
          stage: "third",
          minBooks: 5,
          minMessages: 5,
          minGrade: 60,
          nextStage: "Stage 4",
        },
        {
          stage: "fourth",
          minBooks: 7,
          minMessages: 7,
          minGrade: 70,
          nextStage: "Start a Bible study group",
        },
      ];
    }
  
    evaluateStageProgress() {
      let current;
      const stages = this.getStages();
  
      for (let i = 0; i < stages.length; i++) {
        if (stages[i].stage === this.currentStage) {
          current = stages[i];
          break;
        }
      }
  
      const isSuccess =
        this.booksStudied >= current.minBooks &&
        this.messagesStudied >= current.minMessages &&
        this.studyGrade >= current.minGrade;
  
      let message;
      if (isSuccess) {
        message = `Proceed to ${current.nextStage}.`;
      } else {
        message = `Repeat ${current.stage} next week.`;
      }
  
      return {
        comment: message,
        score: this.studyGrade,
      };
    }
  }
  
  export { StudyEvaluator };
  