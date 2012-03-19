SRC = $(shell find lib -name "*.js" -type f)
UGLIFY = $(shell find node_modules -name "uglifyjs" -type f)
LESS = $(shell find node_modules -name "lessc" -type f)

all: bekk-.js bekk-.css

bekk-.js: lib/bekk.js
	@$(UGLIFY) $< > $@

bekk-.css: lib/bekk.less
	@$(LESS) $< > $@

clean:
	rm -f bekk-*.js
	rm -f bekk-*.css
