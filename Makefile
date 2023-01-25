env: ## Install the requirements with gem
	gem install jekyll bundler webrick github-pages
	bundle install

clean-env: ## Reset the environment
	gem uninstall jekyll bundler webrick github-pages

serve-dev: ## Serve a local copy of the website
	bundle exec jekyll serve