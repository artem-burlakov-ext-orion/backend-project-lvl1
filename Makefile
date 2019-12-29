install:
	npm install

start:
	npx babel-node src/bin/games/brain-games.js

publish:
	npm publish --dry-run

lint:	
	npx eslint src/bin/games/brain-games.js