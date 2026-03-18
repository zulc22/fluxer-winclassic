theme.css: src/theme.less
	bun compile-theme.bun.ts

theme.user.css: src/theme.less
	bun compile-theme.bun.ts

dev:
	bunx nodemon --exec "bun compile-theme.bun.ts" -e "less"

.PHONY: dev