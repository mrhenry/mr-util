SRC_FILES = $(shell find src -name '*.js')
LIB_FILES = $(patsubst src/%.js, lib/%.js, $(SRC_FILES))

all: doc

clean:
	rm -rf lib doc

lib:
	tsc

doc:
	typedoc \
		--mode file \
		--module commonjs \
		--out ./doc/ \
		--theme minimal \
		--readme ./README.md \
		--excludeNotExported \
		--hideGenerator \
		./src/
	@touch doc

deploy: doc
	@bash ./script/deploy-docs.sh

.PHONEY: all clean deploy
