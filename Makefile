install:
	npm install

start calc:
	npx babel-node src/bin/games/brain-calc.js
start even:
	npx babel-node src/bin/games/brain-even.js
start gcd:
	npx babel-node src/bin/games/brain-gcd.js	
start prime:
	npx babel-node src/bin/games/brain-prime.js	
start progression:
	npx babel-node src/bin/games/brain-progression.js	


publish:
	npm publish --dry-run

lint calc:
	npx eslint src/bin/games/brain-calc.js
lint even:	
	npx eslint src/bin/games/brain-even.js
lint gcd:	
	npx eslint src/bin/games/brain-gcd.js
lint prime:	
	npx eslint src/bin/games/brain-prime.js
lint progression:	
	npx eslint src/bin/games/brain-progression.js