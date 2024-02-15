# Portfolio Website

Simple overview of use/purpose.

## Objectives
* Learning Next.js 
* LEarn how to animate with framer-motion
* Deploy my first website and showcase my projects

## Challanges
- Animations
After reading react-framer documentation, I started playing around with it by copy-pasting the code from examples. Using these examples, I have used the basic method for the main cubes.
````
<div className="flex gap-40 ">
                <motion.div  initial="hidden" animate="visible" variants={{
                    hidden:{
                        scale: .8,
                        opacity: 0,
                        y: 100,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        y:0,
                        transition: {
                            delay: .3

                        }
````
There are several problems with using this code: adding so many lines of code into every cube will make my code hard to read and I would have to manually change the delay to make it appear one after another, and main part of all is that I would not be able to add more animations on top of it. After research, I have found that I can give variants to the cubes as children and animate them in a sequence using StaggerChildren. It solved my dynamic delay change problem and cleaned up my code, however, I still couldn't find a way how to nest another animation on top of it. 

```
const container = {
	show: {
		transition: {
			staggerChildren: 0.25,
		},
	},
};
```

After more research and reading the framer-motion documentation, I stumbled on useAnimate() hook that lets you use async-await promises to nest animkation on top of each other. I have created separate git branch to test out the code and try to handle the problem there. 

### Dependencies

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```



## Acknowledgments

Inspiration, code snippets, etc.
-

