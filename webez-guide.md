# WebEZ Basics
WebEZ is a simple to use framework for developing web applications in typescript.\
This guide includes the basic things you need to know while working with WebEZ. Please make sure to read the [documentation](https://gsilber.github.io/WebEZ/) and try [the walkthrough](https://ud-s24-cisc181.github.io/hw8-webez-basics-walkthrough/webez-basics) yourself. This is meant to to supplement the documentation!

### Contents
- [WebEZ Basics](#webez-basics)
- [Contents](#contents)
- [Setting up a WebEZ Project](#setting-up-your-webez-project)
- [HTML & CSS](#basic-html--css)
    - [HTML](#html)
    - [CSS](#css)
- [WebEZ Components](#webez-components--file-structure)
    - [Attaching Components](#attaching-components)
    - [Bind Decorators for Attributes](#bind-decorators-for-attributes)
    - [Event Decorators](#event-decorators)
    - [EventSubject](#eventsubject)

# Setting Up Your WebEZ Project
Before you get started, you'll need to set up WebEZ.
1. Install the WebEZ command line interface: `npm install -g @gsilber/webez-cli`
2. Navigate to a directory for your project to be stored.
3. Create a new project with a name you choose: `webez new <project name>`
4. Any further WebEZ commands or work for your project should be done in the project folder with your `<project name>`
5. To run your project, navigate to `<project name>/src/app` and type the command `npm run start`
6. Your project will be running on `http:localhost:<port number>`. It should automattically open in your web browser, but if not, you can open it in VS Code debug mode or `cmd + click` the link in your terminal.

> To test, you can `npm run test <component name>`

# Basic HTML & CSS
Once you have created your project, you will see a lot of files have been created to scaffold your project. For now, let's just look at the HTML and CSS.
- Navigate to the app folder (`your-project-name/src/app`)
- You will see four files:
    - `Main.component.css`
    - `Main.component.html`
    - `Main.component.test.ts`
    - `Main.component.ts`
- We'll talk about the other files and this structure later. For now, open the `.html` file

## HTML
HTML stands for HyperText Markup Language. This is how we display web pages.
> *Note: Some of the HTML won't display on GitHub. The code is there! Clone this repo, and use your IDE's md preview feature if you'd like to see it.*

### Tags
Page elements are all defined using tags:
```html
<div>
    <div>A block on the page, that may contain multiple things.
        <h1>A Large Heading</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>

    <p>The 'paragraph' tag. For a paragraph of text, followed by a line break.</p> <br/>

    <span> Another container, used mostly for styling.</span> <br/>
    <!-- This is not the same as div! Also, Here is what a comment looks like. -->

    <label>This tag labels the element being presented:</label> <br/>
    <input type="some type" /> <br/>
    <!-- Takes input with specific types of input boxes to present to user (e.g. "text", "number", "checkbox", etc.) -->

    <button> A Button </button> <br/>

    <img src="path to image" alt="alternate text for screen readers or if the picture does not load"/>
</div>

```
**Markdown actually supports HTML! Here's how the above code looks, if I make the input radio and add an image:**
>  <div>  
>    <div>A block of elements the page, that may contain multiple things.
>        <h1>A Large Heading</h1>
>        <h2>Heading 2</h2>
>        <h3>Heading 3</h3>
>    </div>
>    <p>The 'paragraph' tag. For a paragraph of text.</p> <br/>
>    <span> Another container, used mostly for styling.</span> <br/>
>    <label>This tag labels the element being presented:</label> <br/>
>    <input type="radio"/> <br/>
>    <button> A Button </button> <br/>
>    <img src="./images/jinx-pic.png" alt="picture of Jinx the cat" width=300px/> <br/>
> </div>

---

These are simply a few examples of commonly used tags. <br/>
Take a look at the [W3Schools](https://www.w3schools.com/tags/default.asp) reference for the full (very lengthy) list.

---

### ID & Class Tags
Notice that, right now, the div, p, and span tags all appear the same. We can change that with styling in CSS, but first, we should add tags to make identifying and styling parts of our code easier.

<table>
<tr>
    <td> HTML </td> <td> What We See </td>
</tr>
<tr>
<td>

```html
<div id="survey" class="check-form">
    <input type="checkbox" id="cats"/>
    <label for="cats">I like cats</label> <br/>
    <input type="checkbox" id="dogs"/>
    <label for="dogs">I like dogs</label> <br/>
    <input type="checkbox" id="birds"/>
    <label for="birds">I like birds</label> <br/>
</div>
```

</td>
<td>

<div id="animal-survey" class="check-form">
    <input type="checkbox" id="cats"/>
    <label for="cats">I like cats</label> <br/>
    <input type="checkbox" id="dogs"/>
    <label for="dogs">I like dogs</label> <br/>
    <input type="checkbox" id="birds"/>
    <label for="birds">I like birds</label> <br/>
</div>

</td>
</tr>

</table>

The `id` and `class` tags are particularly important while creating your web app with WebEZ.
- **The `id` tag** is unique to the element you are tagging. That way, if you have to add to/change/access that element, you can do so with the unqiue tag. In the exaple above, you can see that each element has its own id.
- **The `class` tag** can be used for multiple elements. Any style applied to this class in CSS is applied to any element of the class. In the example above, I could have multiple `form`s if I wanted to.


## CSS
Open up your `Main.component.css` file. This is where we can use CSS (Cascading Style Sheets) to style our elements.

You can style entire tags, starting with the name of the tag any style choices in `{}`:
```css
div{
    background-color: salmon;
    align-content: center;
    padding: 10px;
}
```
And a class, starting with a `.` before the name of the class:
```css
.check-form{
    text-align: center;
}
```
Or just a specific element, starting with a `#` before the name of the element:
```css
input#cats{
    color: orange;
}
```
Using the animal survey example from above, here's what it looks like styled:
><div id="animal-survey" class="check-form" style="background-color: salmon; align-content: center; padding:10px; text-align: center;">
>    <input type="checkbox" id="cats" style="color: orange;"/>
>    <label for="cats">I like cats</label> <br/>
>    <input type="checkbox" id="dogs"/>
>    <label for="dogs">I like dogs</label> <br/>
>    <input type="checkbox" id="birds"/>
>    <label for="birds">I like birds</label> <br/>
></div>

*(Some CSS styles may not show up on GitHub. This is still a md file!)*

Here is the [W3Schools CSS Guide](https://www.w3schools.com/cssref/index.php) to use as a reference.

# WebEZ Components & File Structure
Okay, now on to what you're actually here for! We've been working in the main component of our project, which was created by default when we created our new project.\
Each component, main or otherwise, has:
- `.html` file, for the component's html to be displayed
- `.css` file, for any styling of the component
- `.test.ts` file, for tests
- `.ts` file, to add WebEZ functionality!

This means we can create multiple components, all with their own appearance and functionality. The main component is what will be displayed on the initial web page.

To create a new component, `webez c <component-name>`
```
//ex. `webez c animal-quiz` will create a new component, with its files in a folder:
.
├──  project-name   //your project name           
│   ├── src                         
│   │    ├── app
│   │    │    ├── animal-quiz   //your new component folder
│   │    │    │    ├── animal-quiz.component.css
│   │    │    │    ├── animal-quiz.component.html
│   │    │    │    ├── animal-quiz.component.test.ts
│   │    │    │    ├── animal-quiz.component.ts
│   │    │    │ main.component...
```

You can create as many components as you need with the `webez c` command. Think of components as elements on the page. If you need to add a new feature to the page, you'll probably want a new component.

## Attaching Components
How do we add components to the main page, once we've created them?

First, you need to create a place in the main component's html for the component:
```html
<div id="animal-quiz"></div>
```
*this is why id tags are important!*\
Then, we want to create an instance of our component to use in the `main.component.ts` file./ 
We'll need to import the component:
```typescript
import { AnimalQuizComponent } from './animal-quiz/animal-quiz.component'
```
You'll also notice our MainComponent class:
```typescript
export class MainComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
```
And now, to create an instance of our animal quiz inside of our main component:
```typescript
export class MainComponent extends EzComponent {
    private animalQuiz: AnimalQuizComponent = new AnimalQuizComponent();

    //the rest of the file ...
}
``` 
Creating new instances of components is just like creating an instance of any other class, with the `new` keyword.\
This just means we've created it as a member of the main component, but it isn't actually showing up. To add it, let's look at the constructor:
```typescript
constructor() {
    super(html, css);
    this.addComponent(this.animalQuiz, "animal-quiz");
}
```
`addComponent` is used to add a component (specified in the first argument) to the element with the id tag (specified in the second argument).

## Bind Decorators (for Attributes)
Bind decorators (`@Bind...`) are used to connect an element- or some property of an element- with something specified in our component's `.ts` file. This is a vague description, because there are many options!
> For examples of all Bind Decorators in WebEZ, check out [the WebEZ documentation!](https://gsilber.github.io/WebEZ/#md:bind-decorators)

---

To demonstrate, using `@BindValue` will bind the value property of an html element.
- In the HTML file:
    ```html
    <div>
        <p>Say hi: </p>
        <span id="hi"></span> <!-- Note the "hi" id -->
    </div>
    ```
- In the TS file:
    ```typescript
    export class MyComponent extends EzComponent{
        @BindValue("hi") //the id of the html element we are binding a value to
        private hello: string = "What's up?"; //MyComponent now has a 'hello' property bound to the tag with the 'hi' id
    }
    ```

This will bind the string `"What's up?"` (aka the `hello` value) to the `span` with the id `"hi"` that we added in the HTML file.

---

Let's look at another one. `@BindList` will connect an element to an array. This will duplicate the specified element for each value in the array.
- In the HTML file:
    ```html
    <p> My to-do list: </p>
    <ul>
        <li id="task"></li> <!-- Again, note the id -->
    </ul>
    ```
- In the TS file:
    ```typescript
    @BindList("task") //the target id, again, followed by the new property
    private taskArray: string[] = ["Do the dishes", "Feed the cats", "Walk the dogs"];
    ```
This will create new list items (`<li>`) for each task in the `taskArray`.

---

We can also bind attributes of HTML elements. `@BindVisbileToBoolean` will bind a boolean to the visibility property of the element. If true, the element is visible, otherwise false.
- In the HTML file:
    ```html
    <div id="to-do"> <!-- Do you see the pattern? -->
        <p> My to-do list: </p>
        <ul>
            <li id="task"></li>
        </ul>
    </div>
    ```
- In the TS file:
    ```typescript
    @BindVisibleToBoolean("to-do") //the div id for the to-do list
    private visible: boolean = false; //hidden until we change `visible` somehow
    ```
This would make my to-do list invisible until its visibility (the `visible` property of the component) was changed to `true`.

---

With these decorators, you are binding something to an element using its `id` and a Bind decorator; changing the property will change the element it's bound to. You can apply this concept to any of the other types of Bind decorators.

## Event Decorators
Event decorators handle *events*, or things happening on the page. The simplest example is when someone clicks on a button.

- The button in HTML:
    ```html
    <button id="my-button">Click me!</button>
    ```
- We will use `@Click` to connect the click event on our button (specified with its id) to a method of the class. This method is something we want to do when the button is clicked.
    ```typescript
    export class MyComponent extends EzComponent {
        constructor() {
            super(html, css);
        }

        @Click('my-button') //the id of our button in the HTML above
        onMyButtonClick(){ //you can make this method do whatever you want to happen on click.
            console.log("What's up?"); 
        }
    }
    ```
---

Another common example is `@Input`, which will connect the input event with a method.

- Here is the HTML, that accepts an input for the user to create a page title:
    ```html
    <div>
        <h1 id="title"></h1>
        <label for="title-input">Add a tile:</label>
        <input type="text" id="title-input"/>
    </div>
    ```
- Here's what my component looks like before we add the event handler:
    ```typescript
    export class MyComponent extends EzComponent {
        @BindValue("title")
        private userTitle:string = "";

        constructor() {
            super(html, css);
        }
    }
    ```
- Now, we can add a method that will actually change the title, since we have a property bound to the header tag.
    ```typescript
    export class MyComponent extends EzComponent {
        //... see above
        @Input("title-input")
        onTitleInput(event: ValueEvent){ //we need the value associated with the event
            this.userTitle = event.value;
        }
    }
    ```

The `event` parameter consumes the `ValueEvent` (the user providing input) and we are changing the `userTitle` property of the component to the user's input (accessed with `.value`, the value provided from the input).

---

Just like with Bind decorators, the process of Event decorators is similar and there are more examples in the WebEZ documentation. You will use the Event decorators to bind the event on an element associated with the `id` argument *to* a method in the component. 


## EventSubject
`EventSubject` is a class that can be used in WebEZ to communicate changes in a child component to the parent class.\
```typescript
myEvent: EventSubject = new EventSubject();
```
`EventSubject`s can emit data as well, which is specified when we create it.
```typescript
//the general format, with the data type T being what is applicable:
myEvent: EventSubject<T> = new EventSubject<T>();

numberEvent: EventSubject<number> = new EventSubject<number>(); //emits a number

//etc..
```

`EventSubject` has two methods for each side of the communication:
- `next(data: T): void`: calls the methods subscribed to the `EventSubject` with the data from its argument
- `subscribe(data: T =>void)`: called with the data from `next` to handle the change <br/>
...with the data parameter being of type T defined in the `EventSubject` instance.

---
Going back to the to-do list example:
- TS:
    ```typescript
    export class TasksComponent extends EzComponent{
        @BindList("task")
        private taskArray: string[] = [];

        @Input("user-task")
        addTask(event: ValueEvent){
            this.taskArray.push(event.value);
        }
        
        constructor() {
                super(html, css);
        }
    }
    ```
If there is an instance of my `TasksComponent`, there may be a need to communicate the addition of tasks to another component. Ex. keeping a lifetime count of how many tasks I've added in a `StatsComponent`.

- First, we need to create the `EventSubject` in our `TasksComponent` and pass along the new task.
    ```typescript
    export class TasksComponent extends EzComponent{
        public addTaskEvent: EventSubject<string> = new EventSubject<string>();
        // etc...
        @Input("user-task")
        addTask(event: ValueEvent){
            taskArray.push(event.value);
            this.addTaskEvent.next(event.value); //emits task value
        }
    }
    ```
- Then, in the component we want to notify of this change, subscribe to the `addTaskEvent`:
    ```typescript
    export class MainComponent extends EzComponent{
        private stats: StatsComponent = new StatsComponent()
        private toDo: TasksComponent = new TasksComponent()

        constructor(){
            super(html, css);
            this.addComponent(this.stats, "stats")
            this.addComponent(this.toDo, "to-do")

            this.stats.addTaskEvent.subscribe((task: string) => { 
                //we now have this data from the addTaskEvent as soon as there was a change in the task input from TasksComponent
                this.stats.handleTaskData(task); //and can use it accordingly
            });
        }
    }
    ```


# Other WebEZ Features
*This is a work in progress! Will be adding info on these soon, but you can always check the full documentation.*

- Dialogues
- Popups
- Timers
- etc..
