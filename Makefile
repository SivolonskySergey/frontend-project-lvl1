install:
	npm install

start:
	node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest