# Journal

GITHUB LINK: https://github.com/VesilyAn/vesilys-webdev-lab-notebook/tree/main/FinalProject

VIDEO LINK: https://media.pdx.edu/media/t/1_0wy5u5n2

I began with the usual beginning for the HTML with the DocType and all that.

I first created a skeleton with the four required sections. As well as a bare bones nav bar just to make sure nav bar works.

about, experience, projects, contact

Once it was working correctly, I began with creating and styleizing each section one at a time.

Beginning with the about me section, I set the id to `about` and put this section in a class named `about-container`

I  put my image on the top of the page.

I set the width and height here so that I'd avoid having the double load for the page. I wanted it to be seemless.

Below that I put down a few paragraphs under the class of `about-text`.

In the css i gave the container a flex display and centered everything with a gap to make it look nice.

In the `about-text` section I set some paramaters like max width and margins.

I kept this part pretty simple since there is not a lot of info it provide, the others i put more style into.


Next up was the expereince section, this was all under the class `experience-container`. 

This area consists of four cards that hold different info on my education and experience. Such as Education, Relevent coursewok, Tech Skills, and job experience.

Each of them under the `experience-card` class, I was able to style them under a grid style. I tried to find a way to make it look nice so I asked AI for a solution and it gave me the line:

 `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`

I added padding and margins to it to make it look better, as well as adding some radius for a rounded look.


Next up was the projects section, this whole section is under the class `projects`. Again with using 2 cards I gave a breif description of the projects and gave a link to them as well.

The Argon2 project is in gitlab and the capstone project is in github.

For the style I used the same grid template line and changed it up a bit to match better for two cards.

I added the usual margins and padding to the cards.

With the links, I used buttons and clicking them would take you to the repo.

Made it look nice with some hover features.


Next up was the contact form, this was all under the class `contact`.

The form consists of name, email, and message. This was under the class `contact-form`.

For the style I made it look pretty with padding and margins. I did not use inline like how we did it in class, I just had textfields and names on top of eachother. 

For the javascript of it, I just did the regular event listener and added some cases if the user does not provide all the info needed. 

I also would give a success Msg so usder knows it went through.


When I ran into bugs I had AI assistance direct me to the solution to solve them.