---
layout: post
title:  "Scraping Data from Twitter"
date:   2019-12-01 21:15:05 +0000
excerpt: "I decided to try out scraping tweets from Twitter and generaing tweets based upon the input"

image: /assets/images/3D_ModelBanner.png
---
I decided to make a post about AI generated tweets using data scrapings from twitter since I didn't actually know much about it and thought it sounded cool.
Data (or web) scraping is a way of extracting information from a website (in this case Twitter) automatically onto a file stored locally on your computer. 
It can be used for numerous purposes in machine learning where the scraped data is analysed such as market analysis and sentiment analysis. Sentiment analysis attempts to algorithmically categorises and identifies the underlying opinion, or sentiment, behind a piece of text. 
I won’t go into sentiment analysis in this post, as I’m just looking for a quick and dirty way to pull some posts down from twitter with certain key phrases, input them into a neural network and generate text based upon these input tweets. 
Our first task is to decide which machine learning library to use. Arguably the two most popular (and open source) libraries available are Tensorflow and PyTorch.
Tensorflow (developed by Google) is based on the Theano library and PyTorch (developed by Facebook) is based on the Torch library.
I decided to use Tensorflow simply because I’ve used it recently, and thought it was relatively painless to use (after a slightly painful installation).
I decided to use Python to interface with Tensorflow, so our next step is to simply decide which python module to use since there is no point reinventing the wheel. After some browsing, the standout option seemed to be Ahmet Taspinar’s (Github user taspinar) Twitterscraper module. It’s really easy to use and does exactly what it says on the tin.
From the Twitterscraper module I imported the query_tweets function. For the purposes of this example the input arguments we care about are just our search term (string) and the number of tweets (integer).


```python
print "Hello World"
```


<div class="center">
<img src="/assets/images/IMG_0817a.png" alt="drawing" width="340" />
</div>

<div class="center">
The original coin from one of the source images in the image set.
</div>

<div class="center">
<img src="/assets/images/3D_coin.gif" alt="drawing" width="340" />
</div>

 <div class="center">
3D model of a coin in a VR environment I developed.
</div>



[models-link]: https://sketchfab.com/MatthewMcGuigan

