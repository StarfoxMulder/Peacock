# simple_library
With the prompt of setting up a simple IoC library within a two hour timeframe, I opted to use [Create React App](https://github.com/facebook/create-react-app) for a boilerplate template so I could focus more of my time on programming.
Using an established framework to call the sections of code I register seemed like the straight-forward way of demonstrating IoC concepts in a limited amount of time.

## To Begin
Clone or fork this repository onto your own machine.
In your terminal, navigate to the simple_library directory.
I recommend first running the command `npm install` to ensure all of your dependencies are up to date. 
Once the update has completed, run the command `npm start` to run the application.
This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Since I am trying to stay within the two hour time limit, my program may not work perfectly or at all.

Refreshing the page displays the name, pronoun, age, and breed of a randomly selected dog. Each dog's information is stored as an object in the data.js file.

Overall, I thought an application like this would best fulfill the requirements of the prompt as I understood them in the time I had allowed to me. It might have been a better demonstration to also have a Pets component that would call upon and load both a random Dog component and a random Cat component in App.js instead of simply the Dog component.

It was imported to me to test along the way.  Initially my Dog component only consisted of an h1 tag that displayed the word "Dog". 
Once I knew my component was loading correctly, I created the current h2 and h3 elements.  At this stage I passed in props from where the Dog component is called in App.js to fill in the dog's name, pronoun, age, and breed information.
After I could tell that my Dog component was capable of receiving and displaying data properly, I populated data.js with the information of a single dog object, imported it into the Dog component, and used that data to populate the Dog component state.
After seeing that my Dog component was capable of importing and making use of external data, I quickly added two more dogs and a simple function to return one of the dog objects at random.