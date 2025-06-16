- [About this website](#about-this-website)
- [The short version](#the-short-version)
- [Where to find stuff](#where-to-find-stuff)
  * [Where to find more advanced stuff](#where-to-find-more-advanced-stuff)
- [Some basics](#some-basics)
- [For beginners](#for-beginners)
- [How to create a new page](#how-to-create-a-new-page)
- [Changing colours, finding old drafts, and site alerts](#changing-colours-finding-old-drafts-and-site-alerts)
- [Adding images](#adding-images)
- [More advanced changes](#more-advanced-changes)
    + [Automated translation link](#automated-translation-link)
    + [Contact form](#contact-form)
    + [Icons](#icons)
  * [How to change the youtube video and google maps directions](#how-to-change-the-youtube-video-and-google-maps-directions)
  * [Inserting images](#inserting-images)
  * [How to alter the site navigation (the links at the top)](#how-to-alter-the-site-navigation--the-links-at-the-top-)
  * [How to update the animations](#how-to-update-the-animations)
  * [UPDATING](#updating)
  * [Making even more advanced changes](#making-even-more-advanced-changes)
- [This site vs. Wordpress](#this-site-vs-wordpress)
- [Troubleshooting](#troubleshooting)
  * [Weird white line at the top](#weird-white-line-at-the-top)

# About this website
This GitHub hosts the Montreal Quaker meeting website using a system that converts text into webpages. Like Wordpress, it shouldn't be too tricky to add pages and blog posts, or edit existing pages.

# The short version
The only thing people are likely to need to change regularly are blog posts. This section contains everything you need to know to do so.

No need to memorize **any** of this information. Throughout this README, if you're planning to do a task, just look up the instructions one step at a time as you're doing the task.

The blog posts are in the ```_posts``` [folder](https://github.com/Montreal-Quakers/website/tree/master/_posts). Existing posts are organized chronologically and end in ```.md```. Click a file in that folder and then near the top, click ```Raw``` to see what a blog post looks like.

In order to create a new post, follow these steps.
1. Login to Github with an account that has permission to change the page
2. Open the [```_posts```](https://github.com/Montreal-Quakers/website/tree/master/_posts) folder. 
3. Click on ```Create new file```.
4. Name the file, beginning with the date, in this format: ```YYYY-MM-DD-your-title.md```. For instance, you could name a post ```2020-05-24-hello-world.md```. 
5. Copy and paste the front matter below. This front matter is explained in detail in this README, but all you need to do is copy and paste this at the tippy top of your file:
```
--- 
title: "Introduction to Quakers Event"
description: "Monthly Events Introducing Quakers"
tags: [introduction, learning]
lang: en
translationID: intro2us
author: "clerk"
---
Write your post here!
```
5. In the "front matter" (the text separated by three dashes ```---```)
  * Change:
     * The title (for instance to ```title: "Hello World"```)
     * Description (for instance to ```description: "My first post"```, or leave it blank)
     * Tags (for instance to ```tags: [announcements, testing]```)
     * The ```lang``` -- this tells the system which language to display a page in, either in English (```lang: en```) or in French (```lang: fr```). Default is English so you can leave this blank)
     * Author (to your name, for instance ```author: "Shelly"```)
     * If you do not have a translated version of the post, you don't need to worry about the ```translationID``` line. You can 1) delete it, 2) leave it blank, or 3) put in a random value. If you do have a translated version of the post, choose a unique code for ```translationID``` (for instance, ```translationID: helloworld```), and the website will automatically link between English and French pages that have the same ```translationID``` code.  
        * If you're not 100% sure if your translation code (```translationID```) is unique, you can search for it on this [page](https://montreal.quaker.ca/_pages/health).
6. Write your blog post after the second three dashes (```---```) the way you would write an email. GitHub will translate this into HTML.

The full sample blog post would look like this (```_posts/2020-05-24-hello-world.md```):
```
---
title: "Hello World!"
description: "My first post"
tags: [announcements, testing]
lang: en
translationID: hello-world
author: "Shelly"
---
Hello world!
This is my first blog post.
```

Once created, your new post will automatically appear in the "News" [page](https://montreal.quaker.ca/posts) with the post title and date extracted from the filename and the front matter.

There are only four things you need to know about writing a blog post using this system. Usually you just write normal text like an email: 
  * To format a header, that is, to format large bold text at the top of paragraphs, put a few ```#``` symbols in front of your header like so: ```# About this website``` which will look like [this](#about-this-website). Less hashtags (```#```) makes for a bigger header, and more hashtags (```######```) makes for a smaller header.
  * _Format_ **text** ~~like~~ _this_ ```_Format_ **text** ~~like~~ _this_```. _Italics_, **bold**, ~~strikethrough~~, ```_Italics_, **bold**, ~~strikethrough~~```.
  * Links like so: ```[your text describing Google](https://google.ca)```, which will look like this: [your text describing Google](https://google.ca). Description in brackets (```[description]```), link in parentheses (```(example.com)```)
  * Images like so (after the image has been uploaded to GitHub): ```![](/assets/images/yourimage.png)```. Same format as links except with an exclamation mark (```!```) at the beginning. See the codepen below for examples.
Most of the pages and posts on this website are just plain text, just like Wordpress.

So you could make that sample post above a bit more fancy by adding a bit of formatting: 
```
---
title: "Hello World!"
description: "My first post"
tags: [announcements, testing]
lang: en
translationID: hello-world
author: "Shelly"
---
# Hello world!
This is my _first_ blog post.

Go back to the [home](/home) page.
```
# Where to find stuff
The only files in the Github [home directory](https://github.com/Montreal-Quakers/website) that one will need to change are [```index.md```](https://github.com/Montreal-Quakers/website/blob/master/index.md) (the language chooser), [```home.md```](https://github.com/Montreal-Quakers/website/blob/master/home.md) (the English homepage), [```accueil.md```](https://github.com/Montreal-Quakers/website/blob/master/accueil.md) (the French homepage), and maybe [```404.md```](https://github.com/Montreal-Quakers/website/blob/master/404.md) (the page displayed if there is no matching page, for instance [this](https://montreal.quaker.ca/doesntexist)).

All the major pages, except for the index pages, are in the [```_pages```](https://github.com/Montreal-Quakers/website/tree/master/_pages) directory. Posts (blog updates, found in the ["News"](https://montreal.quaker.ca/posts) part of the website) can be found in [```_posts```](https://github.com/Montreal-Quakers/website/tree/master/_posts). See advanced tasks at the end of this README that explains, for instance, how to alter the site navigation (the links at the top of the page). It should be more advanced but not too advanced.

This site is designed so that it's fairly easy to change text as needed. Minor modifications can be easily made to [```home.md```](https://github.com/Montreal-Quakers/website/blob/master/home.md) or [```accueil.md```](https://github.com/Montreal-Quakers/website/blob/master/accueil.md) or to any of the ```.md``` (Markdown) files in [```_pages```](https://github.com/Montreal-Quakers/website/tree/master/_pages) or [```_posts```](https://github.com/Montreal-Quakers/website/tree/master/_posts) without any specialized knowledge, because this site uses a simplified markdown language to translate normal text into website readable HTML.

## Where to find more advanced stuff
A bunch of instructions for more advanced changes to the website appear near the end of this README. 

Most of the more advanced changes you want to make to the site are done in [_config.yml](https://github.com/Montreal-Quakers/website/blob/master/_config.yml), for instance, to add a site alert, choose which pages it will appear on, alter its text, or to turn on and off animations for certain pages.

Just to give an idea of the basic structure, the navigation menus (all the links at the top of the page) are stored in ```_data/navigation.yml```. The way it's laid out on the page is (the HTML) is in ```_includes/navigation.html``` and styled in ```/assets/css/navstyle.scss``` but it shouldn't be necessary to touch the latter two files. The first file allows one to add pages and links to the navigation. The rest of the most advanced building blocks of this website are in ```_layouts``` and ```_includes```, whereas all the simple, changeable stuff are in .md files in ```_pages```, ```_posts```, or (slightly more advanced) in ```_data/```. Note that some things, especially in the ```_layout``` and ```_includes``` folders, are complicated in order to allow as much as possible to be done in easy markdown files (for instance, the way footers are generated from markdown files in ```_includes``` or the way alerts can be called from ```_config.yml``` and are found in ```_includes/alert```). It is more complex to build such a modular website, but the advantage is that it's easier for non-specialists to modify.

# Some basics
Some basics about how this website works:
* A [tutorial](https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository) on how to change files on GitHub.
* Posts are in the simplified [Markdown](https://guides.github.com/features/mastering-markdown/) format. 
* If you'd like to see for yourself if Markdown is as intuitive as I think it is, feel free to make changes to [this Codepen](https://codepen.io/mtlquakers/pen/xxwGKPQ) (change anything on there, because you can't save your changes. In other words, no matter what you do, you can reload the page and it will be like before).
* You don't need to memorize any of that, just look it up anytime you need it. Besides, there are really only four things you are likely to need:
  * Headers like so: ```### Your header-3 text here``` which will look like [this](#about-this-website)
  * Images like so: ```![](/assets/images/yourimage.png)```. See the codepen above.
  * Links like so: ```[your text describing Google](https://google.ca)```, which will look like this: [your text describing Google](https://google.ca)
  * _Format_ **text** ~~like~~ _this_ ```_Format_ **text** ~~like~~ _this_```
* Most of the pages and posts on this website are just plain text, just like Wordpress.
* If you'd like to play around on this site on Github, there is also a [sandbox page](https://github.com/Montreal-Quakers/g/sandbox.html) where website administrators can test the changes they've made to see how they'd look on the final site. Or you can just modify any way you want a live copy of the website code [here] (https://github.com/Montreal-Quakers/website-test), and see how it looks on the [live version](https://montreal.quaker.ca/test-site).
* If you're feeling very ambitious, you can also create a GitHub account, [fork this repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo), and change anything you want. Or the administrator can create draft "[branches](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)" of the website and test out how they look. Good luck doing that on WordPress.
* Finally, note this [site health page](https://montreal.quaker.ca/_pages/health), which will help detect problems with the automated translation system. More details appear on that page. You may also test to make sure [this blank page](https://montreal.quaker.ca/blank) is looking normal.

# For beginners
No HTML is needed to make basic changes to the site, but it's good to know one thing: HTML works by putting "tags" around text to tell your browser how to render the text. Tags in HTML begin and end with these greater-than, lesser-than symbols ```<>```. For instance, text with ```<b>bold</b>``` around it will appear, well, <b>bold</b>. So a ```<b>``` means that the bold is beginning and a ```</b>``` with a slash before it means that that the bold is ending. You don't need to code in HTML to make changes, you just need to not feel intimidated by the bits of code that are on various pages. There is no need to change HTML; it's enough to avoid changing it by knowing how the tags work. Some pages also contain a language called Liquid; again, no knowledge of Liquid is required. It's enough to know that liquid begins and ends tags with either two brackets ```{% raw %}{{  }}{% endraw %}``` or a bracket and parenthesis ```{% raw %}{%  %}{% endraw %}```.

Next, a beginner can make changes to the sandbox markdown file in ```_pages/sandbox.md```, and then load the sandbox page in their browser to see what has happened. When making changes in Github, remember that it saves everything you do. You can always go back and restore the previous version. 

Moreover, you'll see that as you try to save changes to a Github file, it asks you if you want to label changes you're making. If you're unsure, label them as ```unsure``` or something and you will be able to search for them later. But if you practice making changes in the codepen and then in the sandbox page, and things are looking good, most likely everything will be fine once pushed to the website. Perhaps it will take a couple of tries, but if you check your work, everything will be ok.

# How to create a new page
Create a new ```.md``` file in the [```_pages```](https://github.com/Montreal-Quakers/website/tree/master/_pages) directory, write your content, and insert the "front matter" as explained here. For instance, for the COVID outbreak, I needed to create [```covid-19.md```](https://github.com/Montreal-Quakers/website/blob/master/_pages/covid-19.md) and [```covid-19-fr.md```](https://github.com/Montreal-Quakers/website/blob/master/_pages/covid-19-fr.md) (feel free to open these files as you read along (hint: view the [raw covid-19](https://raw.githubusercontent.com/Montreal-Quakers/website/master/_pages/covid-19.md) and [raw covid-19-fr.md](https://raw.githubusercontent.com/Montreal-Quakers/website/master/_pages/covid-19-fr.md) files.). I created a new file at  [```covid-19.md```](https://github.com/Montreal-Quakers/website/blob/master/_pages/covid-19.md) and then I wrote some text. Then I made a translated version here [```covid-19-fr.md```](https://github.com/Montreal-Quakers/website/blob/master/_pages/covid-19-fr.md). Finally, in both files I set the "front matter". This is the most advanced part, but it should be accessible, and once you master it, you're good. I'll show you the code and then I'll tell you how it works. To the top of the file, above the text I'd written, I added:
```
---
title: "COVID-19 Updates"
lang: en
translationID: covid
---
As a COVID-19 prevention measure, the Sunday Quaker meeting, the Quebec City group, and the Wednesday midweek meeting will meet online until at least June 1st, 2020.
```
For the French translation ([```covid-19-fr.md```](https://github.com/Montreal-Quakers/website/blob/master/_pages/covid-19-fr.md)) I added:
```
---
title: "Mises à jour COVID-19"
lang: fr
translationID: covid
---
Comme mesure préventive contre la COVID-19, les assemblées Quaker de dimanche, de Québec, et de mi-semaine seront en ligne au moins jusqu’au 1er juin 2020.
```
Here's what all this means:
```
--- (<--- this is required, it just means that the "front matter", a bit of code that instructs how to build the page, is beginning)
title: "COVID-19 Updates" (<--- This is a title that will appear at the top and isn't required)
description: (<--- this would be a subtitle at the top of the page and is not required either)
lang: en   (<--- This tells the system which language you're writing in, ```en``` for English and ```fr``` for French, so the correct headers and footers appear on the page)
translationID: covid   (<--- This a codeword that helps the system find a translation for this page, if one exists. If you didn't translate the page, don't bother with this.)
---  (<--- This is required and just means that the front matter is ending)
```

For the automatic translation linking system (the link in the navigation between English and French content) to work properly, you just need to properly indicate in the "front matter" the ```lang:``` (```en``` or ```fr```) and make up a unique translation code (for instance, ```veryuniquecode```) and put it after ```translationID: ``` like this: ```translationID: veryuniquecode```. You can see above that I set one COVID page ```lang``` to ```fr``` and the other one to ```en``` and then I set both ```translationID:``` to ```covid```. If you look on the website, a link will be created that will connect the two pages. If you have any doubts whether that code has already been used, then use something more unique or else look at the [site health page](https://montreal.quaker.ca/health), which lists all the current ```lang``` and ```trans``` codes in use for every single page and post.

# Changing colours, finding old drafts, and site alerts

Otherwise, theme and site colors can be changed from [```_sass/_colors.scss```](https://github.com/Montreal-Quakers/website/blob/master/_sass/_colors.scss).

Or see for instance the [```_drafts```](https://github.com/Montreal-Quakers/website/tree/master/_drafts) folder, where I keep updates that recur from year to year, such as the Greene Centre closing for Christmas.

You can turn alerts on and off in this website. There's no need to code HTML to do so. Open [_config.yml](https://github.com/Montreal-Quakers/website/blob/master/_config.yml) and you will see ```alerts: ```, and instructions for how to change it. ```alerts: on``` turns on alerts for all pages. If you change this to ```alerts: off```, alerts will be turned off. ```alerts: some``` turns on alerts for the pages you specify. To turn on alerts only for the homepage and the page giving directions to the Sunday meeting at the Greene Centre, use this code: 

```
alerts: some
redalert_en-text: alert/en-covid.md
redalert_fr-text: alert/fr-covid.md
alert_pages:
  - translationID: home
  - translationID: greene-centre
```

(The ```page_trans``` code for every page can be found at the [site health page](https:/montreal.quaker.ca/_pages/health)).

To create or edit the alert text itself, go to ```_include/alert/```. You can either change the text of the current file (as indicated by ```redalert_en-text``` in English and ```redalert_fr-text``` in French). Or make a new file within ```_include/alert/``` and point ```_config.yml```. For instance, create a new file at ```_includes/alert/newfile.md``` and then change ```redalert_en-text: alert/newfile.md```. 

To change the alert color, go to ```_sass/colors.scss``` and change ```$redalert-color:``` to anything you like and all of this applies to ```greenalert``` the same way.

# Adding images

To add an image, upload it on this site to ```assets/images``` (anywhere is fine but this keeps things organized), and then we can call images using ```![image_text](/assets/images/CYM.jpg)```

This gives:

![image_text](/assets/images/CYM.jpg)

# More advanced changes

### Automated translation link
This site uses an automatic search algorithm that checks the "front matter" (everything between the three dashes, you can see some examples above) in order to match up posts to their translation. So if you're having trouble with translations, make sure that each page and post has a unique "translationID:" (translation) code.  If anything is going wrong, see the [site health page](https://montreal.quaker.ca/_pages/health) to see all the ```trans``` codes and ```lang``` codes for every page and post in the website.

### Contact form
This site uses formspree for the contact form. The code should be in ```_includes/contact.html```. There is some liquid code to get the right language text in the form.

### Icons
Some of the only HTML in the Markdown pages, just so you know, are [FontAwesome](fontawesome.com/) icons, which are called like this ```<i class="fas fa-pencil-alt"></i>&nbsp;``` (that code generates the pencil on the contact page). In theory, a user with very little technical expertise can nonetheless easily change these icons by going to the fontawesome [website](http://fontawesome.com/) and searching for free icons. It is then possible to just copy the code that FontAwesome will tell you to use and insert it in any page. Again, this is possible in Wordpress but not really any easier. The user can choose between copying the code entirely from the FontAwesome website, or just replacing the part in the code that indicates which icon ```fa-pencil-alt```. Also, note that the ```&nbsp;``` is the HTML code for a non-breaking space, in case it's necessary to add more spacing on either side. Also, the user may notice that the [intro](https://montreal.quaker.ca/intro) page contains some icons that contain code like ```fa-fw``` (fixed-width icons so that the text aligns) and ```fa-lg``` which sets the icon-size to large. This is technical but equally technical as Wordpress.

Note two complicating factors, however: 
1. To make the page load faster I downloaded a specific version of Fontawesome, so newer icons would need to be uploaded to ```/assets/webfonts```.
2. To make the page load faster, instead of serving the FontAwesome css file ```/assets/css/all.css``` I just copied the codes I needed and put them into ```/assets/css/fa-custom.scss```. So if you want to add new icons that I'm not already using but that are in the Fontawesome5 icon set, you can either:
  * Follow the instructions in [```/_layouts/default.html```](https://github.com/Montreal-Quakers/website/blob/master/_layouts/default.html) and comment and uncomment out the line in the instructions. You can find the instructions by searching for the word FontAwesome.

## How to change the youtube video and google maps directions

The layout for these files is in the ```_includes``` folder, for instance: ```_includes/yt_embed.html``` and ```_includes/directions.html```. Just change the links in the file near the text ```src=``` and ```href=``` and you should be able to update these without too much trouble. For instance, the current YouTube link is ```https://www.youtube.com/embed/hxjH4sa2RFI?autoplay=1```. If we want to change it, just change the link, for instance to ```https://www.youtube.com/embed/nUxC_yr4RRs?autoplay=1```. 

It should be easy to add more media in files in the ```_includes``` folder. To call them up, or to choose which pages they appear on, look in ```_config.yml``` under ```media_pages```. For instance, the first lines say:
```
media_pages:
  - translationID: home
    media: yt_embed.html
```
This means that on the homepage ([/home](https://montreal.quaker.ca/home)), yt_embed.html will appear full-width next to it. 

Note too that there is an image carousel in the sandbox page. That can be inserted in any page the same way as the YouTube videos. For instance, if we want it on the ```about``` page, just add these lines to [```config.yml```](https://github.com/Montreal-Quakers/website/blob/master/_config.yml) under ```media_pages:```:
```
  - translationID: about
   media: slideshow.html
```

The images and descriptions for the image carousel are in ```_data/slideshow.yml``` and it should be fairly straightforward to change the images and descriptions through that document. For instance the first lines are:

```
slideshow1:
- title: "Our historic meetinghouse on de Maisonneuve"
  titre-fr: "Notre chez nous sur la rue Maisonneuve pendant les années 1970"
  file: 1974 MaisW (1).JPG
```

```title``` and ```titre-fr``` means the image description that appears below the image in the slideshow. ```file``` refers to which image in [```assets/images```](https://github.com/Montreal-Quakers/website/tree/master/assets/images) that should appear in the slideshow.

## Inserting images

As mentioned in the markdown, images can be inserted via ```![](/link/to/image.jpg)```. That said, by default, images will appear on the left, and generally you will want to size and center them. The very, very advanced way to do this is to write your own CSS in ```/assets/css/style.css```, but I might as well mention the shortcuts I generated in making this site, namely a few classes you can add to the image. I'll show you an example.

Let's say you want to call up [```/assets/images/claires_painting.jpg```](https://github.com/Montreal-Quakers/website/blob/master/assets/images/claires_painting.jpg). If you want it centered and half-size, call the image using ```![Art retreat](/assets/images/claires_painting.jpg){: class="img_center50"}``` and you'll get:

![Art retreat](/assets/images/claires_painting.jpg)

(the image probably won't display properly on the readme, but will display properly on the sandbox page)

The classes you can choose from are ```{: class="img_center25"}```, ```{: class="img_center50"}```, ```{: class="img_center75"}```, and ```{: class="img_center100"}```. If you do simply ```{: class="img_center"}``` it will be a centered full-size image (not recommended as this will likely look bad on mobile). There are a few more classes in the CSS or you can search the internet for other options.

You can also see all the images available in [```assets/images```](https://github.com/Montreal-Quakers/website/blob/master/assets/images/) via [this page](https://montreal.quaker.ca/all_images).

## How to alter the site navigation (the links at the top)

In order to change how the site navigation works, it should be enough to add or subtract pages within the ```_data/navigation.yml``` file. I'll show the code and then explain it:

```
- title: "News"
  subtitle: "The Latest Updates"
  link: /posts.html
```
Here's what all that means:
```
- title: "News" (<--- This is the name of the link that will appear on the site)
  hovertitle: "The Latest Updates"  (<--- This the text that appears if you hover over the title)
  link: /posts.html  (<--- This is the link, where the link directs the browser to go to)
```
The exact formatting is important to observe. Note how the first line has ```- title: ``` and the other items don't have a dash before them. Note the way the spacing aligns as well.

Let's look at another example. Again these are fairly simple, but following the format is important, or else it could break the site:

```
- title: "Where We Meet"
  hovertitle: "Where We Meet"
  children:
    - childtitle: "Sundays in Montreal"
      childlink: /greene-centre.html
    - childtitle: "Midweek Meeting"
      childlink: /midweek.html
- title: "News"
  subtitle: "The Latest Updates"
  link: /posts.html
```
Let's break this down. We've already looked at what the first two lines do.
```
- title: "Where We Meet"
  subtitle: "Where We Meet"  (<--- Note there is no "link" line, so clicking on "Where We Meet" does not direct the browser)
  children:  (<---- this indicates that this menu has a submenu, a downward arrow will be automatically added)
    - childtitle: "Sundays in Montreal" (<---- Note how the childtitle and child link follow the same formatting, but with four spaces before them)
      childlink: /greene-centre.html (<---- the link for the submenu item)
    - childtitle: "Midweek Meeting"
      childhovertitle: "Midweek Meeting in Montreal" (<---- text when hovering over title)
      childlink: /midweek.html
- title: "News"  (<---- to end the submenu just go back to the normal way of laying out items)
  subtitle: "The Latest Updates"
  link: /posts.html
```

## How to update the animations

Seven animations have been defined in the CSS files: for the birds, a right landing (```land_right```), a left landing with a flip (```land_left_flip```), a roll in both from left (```roll_bird1```) and right (```roll_bird1```), and a swing-in (```swing-in1```). For the text, a focus-in entry (```focustext```) and a lighting and glow animation (```flicker_glow```) for the header text. It shouldn't be hard to control this via ```/config.yml```. For instance, right now, in that file, see these lines:

```
bird_left:
  - animation: land_left_flip
    translationID: midweek
```

That means that the left bird in the wide-screen header (as opposed to the mobile header) will land from the left and then do a flip on the midweek meeting page in both French and English. 

There are similar animation controls for ```bird_left```, ```bird_right```, ```mobile_bird``` (the bird in the mobile version of the site), ```header_animation```, and ```mobile_header_animation```. Animations can be specified for any of those elements, using any of the seven animations (you can also add more using [animista](https://animista.net/)), to be used on any page (for now, you have to define it page by page).

# Making even more advanced changes

Also, if making even more advanced changes than anything contained in this README (e.g. to ```_layout``` or ```includes``` files), folks should fork this project, testing changes along the way, before updating a final version which may contain errors. 

# Updating the website version of Jekyll

Right now, Wordpress is constantly emailing me with updates to plugins, and even Wordpress itself. Every update could potentially break our site as it becomes incompatible with certain plugins. True, right now we pay someone to fix our messes for us. Meanwhile, hackers are throwing tons of password combinations at our Wordpress login page all the time, and who knows what could happen unless we update constantly. We also need constant backups. By comparison, let's see here, [Jekyll 4.0](https://jekyllrb.com/docs/history/) came out in August 2019, and as of April, 2020 has had zero updates; there seems to be maybe one minor security fix per year, half of them don't apply. Oh and Github backs up automatically for us.

Anyway, at some point, GitHub may send us an email saying that we need to update our website. The email will contain instructions and all that. Most updates will happen automatically without any intervention, because this site essentially uses zero plugins. But anyway, worst case scenario, if we need to do an update, it will involve editing the file ```Gemfile.lock``` and simply changing the numbers to whatever GitHub's email tells you to change them to. For instance, it might say to change ```jekyll (4.0.0)``` to ```jekyll (4.1.0)```. Do this and the update is complete. Try the website and see if anything is broken, but probably everything will be fine. If it's broken, perhaps just downgrade Jekyll (a.k.a. back to 4.0.0) see if someone technical can fix it by reading Jekyll's release notes. Worst case scenario, we'll probably be fine just ignoring the update or could pay someone to figure it out.

# This site vs. Wordpress
Making changes will take a bit of time to learn, but it's not tons more complicated than Wordpress, which does offer a graphical interface, but good luck finding what you want and then learning to operate it within the dozens of options and plugins. Also, in terms of multilingual functionality, Wordpress is pretty good but it is still work to get translations to link. I would need to teach the next person something; it is not instantly intuitive. Also, the final product isn't as good -- I haven't been able to figure out how to get the headers and all the menus to translate automatically. Basically, it would take specialized knowledge to change the architecture of the Wordpress site anyway, so why not just make a better structure within which to easily make the minor everyday changes we need. This structure also makes it easier to have a written README that anyone can access, anyone can learn anytime about how to make changes, and anyone can suggest improvements by proposing a pull request.

One thing to note is that nothing on Github is private. Anyone can view all the code for our site and all its previous versions. Not that there is anything private on our current site, and even if there were, private stuff would potentially be just as accessible. If there are any concerns about this, one way forward is to occasionally save the files we want public, delete the repository, and start fresh.

# Troubleshooting
## Weird white line at the top
If you add pages using icons in the title, you may get a bug with a weird white line at the top of the page with text like ```COVID-19 Updates"> COVID-19 Updates">```. What's happening is that the default layout for every page ```_layout/default.html``` is trying pass a bunch of information and variables in HTML that improve the site's SEO (search optimization) and how well the site embeds links, for instance, by allowing posts on Facebook to use the appropriate icon. Much of this information is automatically provided by the title of each page. But if that title contains HTML code (for instance, the title of our contact us page is ```<i class="fas fa-pencil-alt shake-tl color-1-text"></i>&nbsp; Contact Us &nbsp;<i class="fas fa-phone shake-bottom color-1-dark-text"></i>```), for some annoying reason it causes a bug in the HTML. As a fix, just add in the frontmatter ```og-title: ``` and then the title without any HTML.
