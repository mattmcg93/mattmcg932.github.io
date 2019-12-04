---
layout: post
title:  "Data Scraping and AI Generated Tweets"
date:   2019-12-01 21:15:05 +0000
excerpt: "I decided to make a post about AI generated tweets using data scrapings from twitter since I didn't actually know much about it and thought it sounded..."

image: /assets/images/laptop_1.png
---
<div class="center">
<img src="/assets/images/AI.gif" alt="drawing" width="200"/>
</div>
Image source: Giphy


I decided to make a post about AI generated tweets using data scrapings from twitter since I didn't actually know much about it and thought it sounded interesting. There are various ways to do this, so there's no need to use the specific modules I've listed - I'm just doing this for fun and these modules worked well for me.
Data (or web) scraping is a way of extracting information from a website (in this case Twitter) automatically onto a file stored locally on your computer. 
It can be used for numerous purposes in machine learning where the scraped data is analysed such as market analysis and sentiment analysis. Sentiment analysis attempts to algorithmically categorises and identifies the underlying opinion, or sentiment, behind a piece of text. 
I won’t go into sentiment analysis in this post, as I’m just looking for a quick and dirty way to pull some posts down from twitter with certain key phrases, input them into a neural network and generate text based upon these input tweets. 
#### Different Machine Learning Libraries
<div class="center">
<img src="/assets/images/tf_logo_social.png" alt="drawing" width="200"/>
</div>
<div class="center">
<img src="/assets/images/Pytorch.jpeg" alt="drawing" width="200"/>
</div>

<div class="center">
<img src="/assets/images/robot.gif" alt="drawing" width="200"/>
</div>
Image source: Giphy
Our first task is to decide which machine learning library to use. Arguably the two most popular (and open source) libraries available are [Tensorflow][Tensorflow-link] and [PyTorch][Pytorch-Link].
Tensorflow (developed by Google) is based on the Theano library and PyTorch (developed by Facebook) is based on the Torch library.
I decided to use Tensorflow simply because I’ve used it recently, and thought it was relatively painless to use (after a slightly painful installation).
#### Selecting a Python module
I decided to use Python to interface with Tensorflow, so our next step is to simply decide which python module to use since there is no point in reinventing the wheel. After some browsing, the standout option seemed to be Ahmet Taspinar’s (Github user taspinar) [Twitterscraper module][TS-link]. It’s really easy to use and does exactly what it says on the tin, and can be installed using pip as follows.

```console
pip install twitterscraper
```

From the Twitterscraper module I imported the query_tweets function. For the purposes of this example the input arguments we care about are just our search term (string) and the number of tweets (integer).


```python
from twitterscraper import query_tweets
```
Now we simply decide on a search term, and how many tweets we’d like to scrape. The Twitterscraper module interfaces with [Twitter's API][TwitterAPI], so we can use the operators AND and OR between search terms. The current version of Twitterscraper doesn’t have inbuilt functionality to discern between different languages of the tweet, but since it interfaces with Twitter’s API so we can use the additional search term ‘%20lang%3Aen’, just to ensure our tweets are in English. For a full list of different languages and their syntax see Twitter’s documentation. See below for an example on searching four search terms with an OR operator and the additional argument of choosing only English language tweets, with a tweet limit of one hundred thousand. The connection between these terms is that the unicorn is Scotland's national animal, but the AI won't know that so we'll probably get some weird results 🦄. And Voldemort is in there to mix things up.
```python
SearchTerm=' Glasgow OR Scotland OR unicorn OR Voldemort %20lang%3Aen'
TweetLimit=100000
list_of_tweets = query_tweets(SearchTerm, limit=TweetLimit)
```
The tweets are stored in a list (called list_of_tweets here), which contains lots of metadata such as Twitter handles, the number of likes and retweets. We don't care about this metadata, so next we choose to set up and empty list called TweetTextArray, in which we extract only the text content of the tweets. 
```python
TweetTextArray = [] # create empty list to save tweets 

for tweet in list_of_tweets: # for looping
    TweetTextArray.append((tweet.text))
    tweet.text

```
We then choose to write this array of the text content of the tweets to a text file in order to feed this into a neural network. This step is not essential since you could store the list as a variable in memory,  but I wanted to do this so I could save the tweet contents and I already had a machine learning module in mind which works well with text files.
#### Cleaning the data
There are a few things to note here with regards the text output of these tweets in terms of cleaning the data. It is often estimated that data scientists spend up to 60 percent of their time cleaning data, so this is an important step in the process. For the sake of simplicity, I decided to remove any tweets with mentions (i.e. @username) and URLs as well as removing any duplicates (should there be any). This is done easily enough with the following lines of code.
```python
#removing tweets with URLs
TweetTextArray=[ x for x in TweetTextArray if "http" not in x ] #remove tweets with http
TweetTextArray=[ x for x in TweetTextArray if ".com" not in x ] #remove tweets with .com
TweetTextArray=[ x for x in TweetTextArray if "@" not in x ] #remove tweets with @
TweetTextArray = list(dict.fromkeys(TweetTextArray)) #remove duplicate tweets

```
Our next cleaning task involves converting between character encoding standards. An example of how a tweet stored in a text file looks is shown below for a tweet scraped from the search term "Exeter".
```python
"b'Current Temp: 15.8\xc2\xb0C. Wind 0.0 m/s S. Barometer 1019.5 hPa - Falling. #exeter #ukweather'"
```
Note that there is a few things strange about this, such as ‘\xc2\xb0’ which doesn’t look quite right. This is because there is a problem converting UNICODE (the text format the tweets are stored in) to ASCII (the text format the tweets are written to). This happens for special characters such as -, +, =. There is an easy fix for this which is to simply perform a find and replace. Rather than write this from scratch for various Unicode symbols I opted to use Taiwo Kareem’s (Github user tushortz) [UNICODE to ASCII python replace function][Unicode-replace-link] which worked fine. I defined this function in my script and chose to use it when writing each line to the text file. 
```python
FileName=SearchTerm+'_clean.txt'
with open(FileName, "w", encoding="utf-8") as f:
#with open(FileName, 'w') as f:
    for item in TweetTextArray:
        item=unicodetoascii(str(item))  #found this online, handy to stop encoding errors
        #item=item.encode("utf-8")  # <--- don't use, was causing encoding errors!!
        f.write("%s\n" % item) 
```
#### Selecting a neural network
<div class="center">
<img src="/assets/images/brain.gif" alt="drawing" width="200"/>
</div>
Image source: Giphy

Now we have a collection of clean tweets consisting of just text, ideal for training a recurrent neural network to produce new tweets based upon them. I decided to use Max Woolf’s (Github user minimaxir) [textgenrnn module][textgenrnn-link]. Recurrent neural networks are different from regular neural networks as they remember (or learn) things from the past (from their training phase), but also uses new information being input to update it’s model. This module is fantastically simple to train, only requiring a few lines to execute using the default parameters. We simply import the module and run as shown below.
```python
from textgenrnn import textgenrnn
textgen = textgenrnn().
```
Now we’ve imported the module we use the train_from_file function as shown below.
```python
textgen.train_from_file(FileName, num_epochs=1)
```
This may take some time depending on how many tweets you started with, and how many you have left after cleaning. Since I’m being lazy and excluding entire tweets on the basis of whether they contain a URL or a mention, we are left with roughly only 25% of the originally gathered tweets. This is fine for this example as I’m not doing anything in depth with the tweets since its just for fun, so I haven’t developed any complicated cleaning rules. If you’re interested in doing this you could perhaps use [Regex][Regex-link] (Regular Expressions) with python. Now we’ve trained the recurrent neural network we may begin generating tweets by simply executing the line below.
```python
textgen.generate()
```
We can also enter the following line if we want to save the trained network to a Hierarchical Data Format (HDF5) file, allowing us to store the results of training which is useful if training on lots of tweets.
```python
textgen.save(SearchTerm+'_network.hdf5').
```
#### AI generated tweets
The neural network outputs text based on its input every full pass of the data it processes, in our case generating tweets at different levels of creativity, called temperatures (between zero and one).
The tweets generated after the network learned from tweets based on my search terms "Glasgow OR Scotland OR unicorn" are shown below.
```python
"Scotland result by the state in Scotland in Glasgow Libya 
and Scotland are a pretty to see a unicorn in your!"

"The people in this pretting special hour."


```


[Tensorflow-link]: https://www.tensorflow.org/
[Pytorch-Link]: https://pytorch.org/
[TS-link]: https://github.com/taspinar/twitterscraper
[TwitterAPI]: https://developer.twitter.com/en/docs
[Unicode-replace-link]: https://gist.github.com/tushortz/9fbde5d023c0a0204333267840b592f9
[textgenrnn-link]: https://github.com/minimaxir/textgenrnn
[Regex-link]: https://docs.python.org/2/library/re.html
