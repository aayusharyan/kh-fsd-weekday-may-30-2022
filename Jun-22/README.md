# Jun-22, 2022

### Why index.html?
- When I open any server, it will by default try to load index.html.
- If we don't have index.html, we will need to give the file name manually in the URL.
- If we have a file with the name of index.html, the browser will load it automatically.
- Example.
Current Local server URL
http://127.0.0.1:5500/Jun-22/index.html
http://127.0.0.1:5500/Jun-22/


### superscript and subscript.
- A <sup> is a coupled tag. It will make the text to be written in the super script. That is, text will be slightly smaller and will go a little towards the up side.
- A <sub> is a coupled tag. It will make the text to be written in the sub script. That is, the text will be slightly smaller and will go a little towards the down side.


**Note: audio and video tags are used in both self closing as well as a coupled format.**

### Audio tag
- <audio></audio>
- Always use coupled version.
- This is used to show audio element inside the webpage.
- To give the source, we use source tag and give src attribute inside it and give the type attribute to tell the type of the source.

### Video tag
- <video></video>
- Video tag is used to render a video element on the Webpage.
- This is also a coupled tag.
- A source tag is required to give the required.



### Semantic
- The idea behind semantic tags is code readability.
- They are nothing special.
- They don't have any additional functionality.
- The only thing they are good at is code readability.
- This was introduced in HTML5.
- Example:
- header, footer, nav, section, aside, article, etc.

<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>



HTML5 tags:
- inputs:
-- color
-- date (local, datetime, month, week)
-- email and tel
-- number
-- range
-- url
- nav
- header
- section
- footer
- aside
- audio
- video


## CSS (Cascading Stylesheet)
- It gives the look and feel to your webpages.


### There are three ways to attach CSS to your page.
- Least recommended -> Using the style attribute to put the CSS style properties. This is called inline CSS.
- Medium recommended -> Using a style TAG on the html page. Internal CSS.
- Most Recommended -> Using a separate CSS file. This is called External CSS. (We use link tag for this purpose.)
-- <link rel="stylesheet" href="./<path_to_your_file>" />


- color
- background-color
- font-size: large/smaller/x-small

-- CSS is a set of rules. Any Element that matches those rules, will have that style properties applied.

-- syntax:
<rule> {
  property: value;
}

**These rules are called as selectors.**

### Tag type selector (Tag name Selector)
- Select the element based on the tag name / tag type.
- Example - body, h1, h2, p, span, button.





### Doubts
-> git commit -m "Your message"
-> git push <remote_name>

X git commit -m "dfslf" gh repo clone sdfsf XXXX




- legend
- meta
- iframe
- center
- marquee