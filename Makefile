theme.css: src/theme.crush.css
	bun compile-theme.bun.ts

theme.user.css: src/theme.crush.css
	bun compile-theme.bun.ts

dev:
	bunx nodemon --exec "bun compile-theme.bun.ts" -e "crush.css"

.PHONY: dev