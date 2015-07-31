SRC_FILES = $(shell find src -name '*.js')
LIB_FILES = $(patsubst src/%.js, lib/%.js, $(SRC_FILES))

all: lib dist doc

clean:
	rm -r lib dist

doc: dist
	jsdoc -r -d ./doc ./dist/*.js
	@touch doc

lib: $(SRC_FILES)
	babel --out-dir=lib --source-maps=true --module=umdStrict --stage=0 src
	@touch lib

dist: lib $(LIB_FILES)
	@mkdir -p dist
	browserify lib/index.js -o dist/mr-util.raw.js --standalone=MrUtil --extension=js --debug
	cat dist/mr-util.raw.js | exorcist dist/mr-util.js.map > dist/mr-util.js
	rm dist/mr-util.raw.js
	@touch dist

deploy: doc
	@bash ./script/deploy-docs.sh

.PHONEY: all clean deploy
