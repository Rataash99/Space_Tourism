# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshots/Screenshot%202023-06-07%20223426.jpg)
![](./screenshots/Screenshot%202023-06-07%20223610.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Rataash99/Space_Tourism)
- Live Site URL: [Add live site URL here](https://space-tourism-fend-mentor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I was planning to conquer a react + tailwind project for a long time because I almost forgot React since I haven't used it for so long so this project helped me remember react and tailwind concepts back.

```JSX
 <div className='flex gap-3 tracking-[2.8px] md:w-full md:absolute md:text-[1.1rem] md:pl-8 lg:pl-[8rem] xl:pl-[10rem] 2xl:pl-[12rem] lg:text-[1.2rem] xl:text-[1.4rem] md:gap-5 md:top-32 lg:top-44 transition-all duration-500'>
      <span className='opacity-50'>01</span>
      <h2 className='uppercase'> Pick Your Destination</h2>
  </div>
```
```css
html{
  font-family: 'Bellefair', serif;
  background-color: black;
  ::-webkit-scrollbar {
    width: 0;
  }
}
```
```js
  const addContent = (e) => {
        destination_Data.map((item, index) => {
            if(e.target.classList.contains(item.name.replace(/\s/g, ''))){
                refRole.current.innerHTML = destination_Data[index].role;
                refBio.current.innerHTML = destination_Data[index].bio;
                refName.current.innerHTML = destination_Data[index].name;
                refImage.current.src = item.name == 'Douglas Hurley' ? douglas : item.name == 'Mark Shuttleworth' ? mark : item.name == 'Victor Glover' ? victor : anousheh;
                setUnderline(e);
            }
        })
    }
```

### Useful resources

- [Tailwind Docs](https://tailwindcss.com/docs/installation) - Tailwind Docs are amazing as none of us can remember everything or most of the things instead of blaming yourself better to take a look at documentation, no ones expecting you to remember everything (^_^)>.
- [React Learning](https://react.dev/learn) - I am enjoying reading documentation rather than tutorial hell nowadays.

## Author

- Frontend Mentor - [@Rataash99](https://www.frontendmentor.io/profile/Rataash99)
- Frontend Mentor - [@rataash99](https://www.showwcase.com/rataash99)

## Acknowledgments

I am really glad to get to work on this project I would like to thank kevin powell and all others for providing this project. Glad to be a part of the community.
