when you set the break point at the renderTBl(cfpData), you have to activate the event listerner by filling and submitting the form. 
once submitted, the first think that happens is to present the default. 
the form is referenced  the event listerner then grabs the information from the form. that is the first name, last name, house size and number in household. 
from there the start function is called with the firstname, lastName, houseMemebers and houseSize
The start function based of these pamameters, now determines the houseHoldPTS, houseSizePts and total based  on the values returned from the determineHouseHoldPts and determineHouseSizePts functions.
the data is now pushed into the cfpData array contaning all the details imput and calculated points.
that cfpData array is then passed into the renderTbl function. 
the creation of the table then starts with the rendwerTblHeading()
TBL.innerHTML "" ensures the html is cleared out.
the table, the table head and and table rows are created
then the heading text content is cdeclared in the array 
the for.each function ensures that all elements in the heading array is passed and the ths are appended to the tr
the tr is displayed in the console
the tr are how appended to the thead
and gthe thead is appended to the table
the tablehead information is returmed.
the code now movees to create the table body
and the for.Each function ensures that for each object in the data array, 
the table body rows (tr) are created and their various data elemnents td are created that picks up the firstName, and cfpTotal from the object key pairs. 
the tdNameand tdTotal are appendeded to the tr and the tr is appended to the tbody.
the tbody is now appended to the table
the table is ouputted at the console
And the table is eventually appended to the global TBL which has a id tab-data which is recognisable in the html. and the table result is outputted in the web after receing information ffrom TBL using its id.
After watching the video, i can can say i actually understand what is going going on in the code so far but i am a bit limitted on the use of appropriate terminoology to describe the processes. 
