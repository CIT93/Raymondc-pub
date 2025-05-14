Bible Study Tracker
the bible study app is an is a simple but very efficient client-side JavaScript application that tracks the weekly bible study activities of a client based on the number of books in the bible studied in that week and number of follow up video or audio messages from the PCDL(Pastor Christ Digital Library) listened to by the client and gives a cumulative score for the week. Depending on the score, a recommendation is made that will help you in the coming week's study and improve your knowledge of the word. 

This app will cultivate a culture of fellowship with the word and building the human spirit to be able to live the supernatural life in Christ Jesus and act as a training tool for bible study teachers.

## Global varaible
* studyGrade (number): Represents the weekly score an individual gets from reading the books of the bible and listening to messages from PCDL and ranges from 0 to 70.
* bookStudied(number) it gives the number of books studied for that week
* messageStudied(number) it gives the number of messages listened to for that week
currentStage(string) It tells if your in your first, second, third or fourth week of study and passed on the week, there is a minimum number of points to cover
* oneYearMeb(boolean) it verifies if the student has been in church for more than one year
* completedFS(boolean) it verifies if the student have completed foundation school
* activeInDept(boolean) it verifies if the student is an active member of a department in church like choir, ushering or anyother
* belongsToCell(boolean) it verifies if the student is a member of home cell and extention of the church
* isQualified(boolean) will verify that onYearMem, completedFS, activeInDept and belongToCell are all true before you can embark on the study.
* isFirstStage(boolean) return true is currentSatge is first week of study, if not return false
* isSecondStage(Boolean) return true is currentStage is second week of study, if not return false
* isThirdStage(Boolean) return true is currentStage is third week of study, if not return false
* isFourthStage(Boolean) return true is currentStage is fourth week of study, if not return false

## Logic Implimentation

The app uses conditional blocks to ascertain the current week of study, number of book studied, number of messages listened to and the studyGrade. 
It employs the logic && operators to combine conditions 

## Decision making Process


* If currentStage  is isFirstStage and bookStudied is greater than one, messageStudied is greater than one and the studyGrade is greater than or equal to 30, the app decides that you have completed isFirstStage of the study and can proceed to IsSecondStage, else you scored below average, isFirstStage next week.

* If currentStage is  isSecondStage and bookSudied is greater than three, messageStudied is greater than three and the studyGrade is greater than or equal to 40, the app decides that you have completed isSecondStage of the study and can proceed to isThirdStage, else you scored below average, repeat isSecondStage next week

* If currentStage is  isThirdStage and bookStudied is greater than four, messageStudied is greater than four and the studyGrade is greater than or equal to 60, the app decides that you have completed isThirdStage of the study and can proceed to isFourthStage , else you scored below average, repeat isThirdStage next week

* If currentStage is  isFourthStage and bookStudied is greater than or equal to seven, messageStudied is greater than or equal to seven and the studyGrade is equal to 70, the app decides that you have completed stage 4 of the study and can proceed to start a bible study group, else you scored below average, repeat stage four next week
## output
the output gives your studyGrade, base on the bookStudied and messageStudied and decides weather you can move to the next stage or repeat that stage. 