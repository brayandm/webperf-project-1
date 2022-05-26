# Weekly Project 1

You’ve just been hired by a company which runs a travel blog. The website was created from scratch by the founder, but now it has a bad performance score. Users are turning away, and it has dropped to the second page on Google Search.

Your job is to take the existing website and make it load faster, both for first-time users and returning users.

## To get started

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev` to run the dev server.
4. Open [http://localhost:4000](http://localhost:4000) in your browser and start profiling its performance.

## Practice session

1. Split up into 5 groups (4 on-site + 1 remote).
2. Get the project running and start profiling it.
3. Write down all of the issues you can find. You should only look at issues related to the material we’ve covered this week.
4. After some time (eg 45 minutes), the groups will take turns reporting possible performance improvements to the teacher, one at a time.
5. The teacher will judge each improvement as either a “requirement”, “extra challenge” or a “non-issue”.
6. At the end of this, all of you will have a list of requirements and extra challenges.
7. For the rest of the practice session and until the deadline on next Thursday, you should work on this list.

## How to work?

Your goal is to create an optimised “production build” of this website. You can partially automate this with scripts, or do everything manually:

1. Copy the whole `src` folder into a new folder called `dist`.
2. Start optimising the contents of the `dist` folder.
3. Run `npm run dev:dist` to preview your “optimized website”.
4. Commit and push the dist folder to your Github repository.

## Optimization guidance

- You can optimise all the static files, as long as they still contain the same design, content and functionality.
- You can make changes to image quality and/or remove assets as long as the changes are mostly unnoticeable.
- There is a lot of unused css/js in the project. You do not need to go over that with a comb and clean it up. That won’t be counted to the grade.
- You are not allowed to rewrite the website in a different framework (e.g. React/Next). It should generally be the same code, just optimised.
- You can improve the NodeJS server code and add npm dependencies.
- You should implement or configure performance-related functionality yourself. E.g. you can install tools which minify assets or libraries which compress responses, but you should configure them yourself. You should not install some “UltraServer” package which does everything for you.
- The only exception to this is that you are free to re-implement the server with express and express-static. But you won’t get a point for any of its built in performance improvements unless you either configure it yourself and/or document exactly what it improves from the original server.

## Delivery

Your delivery is a private fork of the github repository with all of your changes.

Your solution should be yours alone. You are welcome and encouraged to support your classmates. You can help them understand the material better, collaborate and brainstorm on solutions, share online resources and even discuss your approach in detail. But there should be **no sharing of code** whatsoever. Issues around this will be reported to the university and may have consequences for both of the parties involved.

## Grading

**Finish on time:** 30% (changes to 15% if delivered late or with less then half of the requirements)

**Requirements:** 60%

**Extra challenges:** 10% each (max 2)
