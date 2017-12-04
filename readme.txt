Code requirements:
Code Challenge.pdf

What I did:
-Went through the requirements first and had a plan.
-Started with a basic application using Angular Cli.
-First implemented the requirements as is
-After the expected output is achieved, tried to enhance the application for sencond screen but removing the dependency on categories columns.

How I developed:
-This application is built using Angular Cli 1.5.0.
-Data file received is kept in assets folder and referred from there in the build.
-There 2 routes in this application, first is "sorter" route which is also a landing page, and second one is "report"
-There is one landing component (app.component.ts). This component acts as router outlet
-Landing route has the functionality (Step 3 and 4 in the requirement document) of viewing and sorting the data.
-On Click of "Show Aggregated Report", use is navigated to the "report" route (Step 5 in the requirement document)
-On Click of "Go to Sorted link, user is navigated to "sorter" route.

How long it took?
- To implement the requirements as is, it took about 1 hr 50 mins using angular CLI. Then I tried to enhance the second screen( requirement step 5) by making it independent of number of categories in initial data model which took about 20-25 mins.
- I also added unit tests for the service (sorting logic) and second screen for the functionality which took about an hour

What was the most challenging?
- Step 5 was challenging. It was also difficult to make it generic and make program work even if more object or categories are added or deleted.

Did I learn anything?
- This was the great opportunity to learn github and how it integrates with VS Code. I had never worked on github repositories before. It was great and valuable learning.
- I also learned how to write Jasmine test cases for angular service and importance of having pure functions in some cases.
