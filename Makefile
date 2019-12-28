install:
	npm install

start calc:
	npx babel-node src/bin/games/brain-calc.js
start even:
	npx babel-node src/bin/games/brain-even.js
start gcd:
	npx babel-node src/bin/games/brain-gcd.js	

publish:
	npm publish --dry-run

lint calc:
	npx eslint src/bin/games/brain-calc.js
lint even:	
	npx eslint src/bin/games/brain-even.js
lint gcd:	
	npx eslint src/bin/games/brain-gcd.js