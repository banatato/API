1. Briefly describe your team’s project
	Build a site for users to post ephemeral questions and answers.  Posts will expire after a specified time, such as 10 minutes.  Users can respond to active questions or post new questions.  Expired questions can be shown as inactive or deleted completely.
	
2. Research and compile a list of APIs that might be useful for your project
	GeoNames, The Movie DB API, Wikisearch API, Stack Exchange API, Duck Duck Go API		

3. For each API, briefly describe how its functionality might be used in your project
	GeoNames - Geographical database to extract information about different places like weather, timezone, post codes
	
	The Movie DB API - Integrate movies, TV shows, cast data, posters, movie fan art
	
	Wikisearch API - Helps find the specific Wikipedia page a user is looking for
	
	Stack Exchange API - Network of 89 questions and answer sites on diverse topics from software programming to cooking to photography
	
	Duck Duck Go API - Access to many search engines' instant answers. Potential uses include defining people, places, things, words, and concepts.

4. Choose one API from your list and create an example web page using jQuery AJAX to call the API and display the returned results
	Using Stack Exchange API, the example web page displays a list of most recent questions asked on Stack Overflow.

5. Describe why you chose that particular API and provide a link to its documentation
	Stack Exchange API provides access to the variety of Q&A sites in the Stack Exchange network, such as Stack Overflow, Mathematics, Home Improvement, Travel, Movies & TV, Politics, Beer.  Depending on the topic, we can use the site parameter to specify which site in the network to search for an answer.
	http://api.stackexchange.com/docs/

6. Discuss any potential issues that you can foresee with using this API in your project
	The methods of the Stack Exchange API operates on a single site at a time, meaning we would have to specify which site we want to search from for each question.  Also, getting answers to a set of questions requires identifying the id(s).  Is the implementation of this API worth it when we can do a Google search?

7. Evaluate your experience creating the example web page and make a recommendation of whether your team should use this API or keep looking for better options
	Documentation of the API is easy to understand, and creating the example web page was simple like the Flickr example from the book.  I would recommend the team to use Stack Exchange API because of the diverse topics available and the ability to search for existing questions and answers.

8. Describe how the example you wrote might be expanded to use additional functionality provided by the API
	The example written displays titles of recent questions with their corresponding links.  Additional functionality can be used to search for questions meeting certain criteria or tags.  Questions with no answers or questions the site considers unanswered can be displayed instead.  Parameters such as user id, creation date, and answer count can be shown.